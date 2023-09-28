import { useWallStore } from '@/store';
//import { produce } from 'immer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const ThemeSettings = () => {
  const { wall } = useWallStore();

  return (
    <>
      <div className="db-18 mt-[30px] mb-[16px]">테마</div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* <div className="flex justify-between"> */}
        {/* <div className="flex flex-row gap-[10px]"> */}
        <SwiperSlide>
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.styleSetting.themeSetting === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.styleSetting.themeSetting === 'modern'}
            />
          </label>
        </SwiperSlide>
        <SwiperSlide>
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.styleSetting.themeSetting === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.styleSetting.themeSetting === 'modern'}
            />
          </label>
        </SwiperSlide>
        <SwiperSlide>
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.styleSetting.themeSetting === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.styleSetting.themeSetting === 'modern'}
            />
          </label>
        </SwiperSlide>
        <SwiperSlide>
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.styleSetting.themeSetting === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.styleSetting.themeSetting === 'modern'}
            />
          </label>
        </SwiperSlide>
        {/* </div> */}
        {/* </div> */}
      </Swiper>
    </>
  );
};
