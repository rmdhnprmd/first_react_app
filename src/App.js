import React from "react";
import "./App.css";
import ReviewItems from "./Reviews";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo
        isDiscount="yes"
        category="RUNNING SPORT"
        name="NIKE SuperRep Go"
      />
      <ReviewItems />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="sneaker.jpg" alt="" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount === "yes") {
    return <p>Diskon {discount}% Off</p>;
  } else if (isDiscount === "coming") {
    return <p>Discount is Coming Soon..</p>;
  } else {
    return <p>Belum Ada Diskon Brayy</p>;
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Water Proof", "Light", "Flexibel", "Long Last Durability"];
  const listBenefits = benefits.map((itemBenefit) => (
    <li key={itemBenefit}>{itemBenefit}</li>
  ));

  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 5,000,000</p>
        <CheckDiscount isDiscount={isDiscount} discount={60} />
        <p className="Info">
          Best for: Training/Nike SuperRep Go Training Shoe GO HARD. GO FAST. GO
          AGAIN. The Nike SuperRep Go combines lightweight cushioning underfoot
          and breathable mesh up top to get you moving comfortably in
          circuit-based fitness class or while streaming workouts at home. With
          the supportive arc on the side and extra flexibility in the sole,
          you're ready to go for 1 more rep. Feel the Fit The upper feels soft
          and breathable—and gives you a bit more stretch across the forefoot
          than the last version.
        </p>
        <ul>{listBenefits}</ul>
        <button onClick={(e) => TambahCart(name, e)} href="#">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli Produk " + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired,
};

export default App;
