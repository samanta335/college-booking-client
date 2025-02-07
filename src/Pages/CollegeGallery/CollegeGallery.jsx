import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const CollegeGallery = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mt-10 text-purple-700 text-center">
        College Graduate's Pictures
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container mySwiper my-16"
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1620458840530-820e1853f682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYWR1YXRlJTIwc2Nob29sfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20185/5b245a732cfac23f590c53ed_5D4A4570/5D4A4570_mid.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/452716307/photo/were-on-our-way-to-success.jpg?s=612x612&w=0&k=20&c=tGofU5zLFgRpNu88onsnJMRo0aWsZA_ChSk70p89ooE="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://npr.brightspotcdn.com/legacy/sites/kansaspublicradio.org/files/field/image/graduation.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/482362583/photo/multi-ethnic-friends-excitedly-hold-diplomas-after-college-graduation.jpg?s=612x612&w=0&k=20&c=0u-Jm_50Rtdwl5n8vMZ-ROfxEg-BCSmg3ZKJJ_w5CWY="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://parade.com/.image/t_share/MTkwNTgxMzE0Nzc3OTE3MzA4/graduation-picture-ideas-jpg.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/originals/b2/47/2b/b2472b82af911beed06f0c87d06eb7ab.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CollegeGallery;
