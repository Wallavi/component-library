import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface SimpleCarouselProps {
  sliders: {
    image: string;
    title: string;
    name: string;
    job_title: string;
    id: string;
  }[];
}

const SimpleCarousel = ({ sliders }: SimpleCarouselProps) => {
  return (
    <Box
      sx={{
        ".swiper-pagination": {
          marginBottom: 3,
        },
        ".swiper-pagination-bullet": {
          background: "white",
          opacity: 0.6,
        },
        ".swiper-pagination-bullet-active": {
          opacity: 1,
        },
      }}
    >
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {sliders.map((sliderElement) => (
          <SwiperSlide key={sliderElement.id}>
            <Box
              sx={{
                background: `url("${sliderElement.image}") no-repeat center center fixed`,
                backgroundSize: "cover",
              }}
              height={"100vh"}
              width={"100%"}
              position={"relative"}
            >
              <Box
                height={"100vh"}
                width={"100%"}
                sx={{ background: `rgba(0, 0, 0, 0.5)` }}
              ></Box>
            </Box>
            <Box
              position={"absolute"}
              left={0}
              bottom={0}
              padding={8}
              color={"white"}
              marginBottom={4}
            >
              <Typography
                sx={{
                  marginBottom: 4,
                }}
                variant="h4"
              >
                {sliderElement.title}
              </Typography>
              <Box>
                <Typography variant="h5">{sliderElement.name}</Typography>
                <Typography variant="h6">{sliderElement.job_title}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );

  // return (
  //   <Box width={"100%"} height={"100%"}>
  //     <Slider {...settings}>
  //       {sliders.map((sliderElement) => (
  //         <Box
  //           key={sliderElement.id}
  //           sx={{ backgroundImage: `url("${sliderElement.image}")` }}
  //           height={"100%"}
  //           width={"100%"}
  //         >
  //           <Box>
  //             <Typography variant="h5">{sliderElement.title}</Typography>
  //             <Box>
  //               <Typography variant="h6">{sliderElement.name}</Typography>
  //               <Typography>{sliderElement.job_title}</Typography>
  //             </Box>
  //           </Box>
  //         </Box>
  //       ))}
  //     </Slider>
  //   </Box>
  // );
};

export default SimpleCarousel;
