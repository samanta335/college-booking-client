import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const AllReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://college-booking-server-delta.vercel.app/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  
  return (
    <div className="mt-24">
      <h1 className="text-3xl text-purple-700  font-semibold text-center ">
        Reviews
      </h1>
      <hr  className="mt-5 w-1/2 mx-auto"/>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-4/5 "
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <p className="text-center  mt-5 font-semibold text-2xl">
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
