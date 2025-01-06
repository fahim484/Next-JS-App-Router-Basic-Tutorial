import { notFound } from "next/navigation";
import React from "react";

const Review = ({ params }: { params: { reviewId: string } }) => {
  if (Number(params.reviewId) > 100) {
    notFound();
  }
  return <div>Review</div>;
};

export default Review;

// URL:- http://localhost:3000/reviews/100 (Review)
// URL:- http://localhost:3000/reviews/101 (404 page not found)
