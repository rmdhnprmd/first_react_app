import React from "react";
import "./App.css";

function ReviewItems() {
  // data dummy json
  const users = [
    {
      id: 1,
      name: "Antonio Andreas",
      review: "Khan maen kualitas nya brayy",
      photo:
        "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      name: "Teh Yuli",
      review: "Nyesel ga beli dari dulu",
      photo:
        "https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Susan",
      review: "Asu Kabehhh mantabb",
      photo:
        "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  const listReview = users.map((itemReview) => (
    <div key={itemReview.id} className="Item">
      <img src={itemReview.photo} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  ));
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default ReviewItems;
