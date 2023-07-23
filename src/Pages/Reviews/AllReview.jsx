import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const AllReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl text-purple-700  font-semibold text-center m-8 uppercase">
        Reviews
      </h1>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-4/5 bg-opacity-30 bg-primary-content"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <p className="text-center  mt-20 font-bold text-xl">
              {review.name}
            </p>
            <p className="text-black text-center mt-5 mb-20 px-14 mx-auto">
              {review.review}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllReview;
