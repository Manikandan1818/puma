import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl text-center font-bold">
        What our <span className="text-coral-red">Customers</span> say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map(({ customerName, imgURL, feedback, rating }) => (
          <ReviewCard
            key={customerName}
            customerName={customerName}
            imgURL={imgURL}
            rating={rating}
            feedback={feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
