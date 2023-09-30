import { useWallStore } from '@/store';
//import { produce } from 'immer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import { Icon } from '@/components/common';
import modernBG from '@/assets/theme/modern.svg';
//import { BLOCK_SHAPE, BLOCK_STYLE } from '@/data/constants/customization';
import '@/index.css';

export const ThemeSettings = () => {
  const { wall, setWall, isEdit } = useWallStore();

  return (
    <>
      <div className="db-18 mt-[30px] mb-[16px]">테마</div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.styleSetting.themeSetting === 'modern' &&
              'ring-blue ring-1 ring-offset-2'
            }`}
            style={{
              backgroundImage: `url(${modernBG})`,
              backgroundSize: 'cover',
              //backgroundPosition: 'center center', // 이미지 위치 조절
              display: 'flex',
              justifyContent: 'center', // 가로 중앙 정렬
              alignItems: 'center', // 세로 중앙 정렬
            }}
          >
            <div className={`w-[160px] h-[20px] block bg-white shadow`}>
              모던테마
            </div>
            <div className={`w-[160px] h-[20px] block bg-white shadow`}>
              모던테마
            </div>
            <div className={`w-[160px] h-[20px] block bg-white shadow`}>
              모던테마
            </div>
          </div>
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
      </Swiper>
    </>
  );
};
