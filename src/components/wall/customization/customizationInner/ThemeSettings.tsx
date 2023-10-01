import { useWallStore } from '@/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import { BLOCK_SHAPE, BLOCK_STYLE } from '@/data/constants/customization';
import '@/index.css';
import { THEMES } from '@/data/constants/theme';
import { useState } from 'react';
import { produce } from 'immer';
import { useWindowWidth } from '@/hooks/useWindowWidth';

// TODO
// 1. 이미지 변경하기, constant에서 label이름 변경
// 2. 반응형 해보기
// 3. theme가 설정되어 있을 때 최상위 조건으로 바꾸기.

export const ThemeSettings = () => {
  const { wall, setWall } = useWallStore();

  const handleSelectTheme = (themeLabel: string) => {
    setWall(
      produce(wall, (draft) => {
        draft.styleSetting.themeSetting = themeLabel;
      }),
    );
  };

  const windowWidth = useWindowWidth();
  const mobile = windowWidth < 640;

  return (
    <>
      <div className="db-18 mt-[30px] mb-[16px]">테마</div>
      <Swiper spaceBetween={10} slidesPerView={mobile ? 1.5 : 3}>
        {THEMES.map((theme) => (
          <SwiperSlide
            onClick={() => handleSelectTheme(theme.label)}
            key={theme.label}
          >
            <div className="p-1">
              <img
                src={theme.src}
                className={` rounded-[8px] w-[194px] h-[100px] block hover ${
                  wall.styleSetting.themeSetting === theme.label &&
                  'ring-blue ring-2 ring-offset-2'
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
