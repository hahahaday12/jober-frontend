import { useWallStore } from '@/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import { BLOCK_SHAPE, BLOCK_STYLE } from '@/data/constants/customization';
import '@/index.css';
import { THEMES } from '@/data/constants/theme';
import { useState } from 'react';
import { produce } from 'immer';

// TODO
// 1. 이미지 변경하기, constant에서 label이름 변경
// 2. 반응형 해보기
// 3. theme가 설정되어 있을 때 최상위 조건으로 바꾸기.

export const ThemeSettings = () => {
  const { wall, setWall } = useWallStore();
  const [selectedTheme, setSelectedTheme] = useState(
    wall.styleSetting.themeSetting,
  );
  const handleSelectTheme = (themeLabel: string) => {
    setSelectedTheme(themeLabel);
    setWall(
      produce(wall, (draft) => {
        draft.styleSetting.themeSetting = themeLabel;
      }),
    );
  };

  return (
    <>
      <div className="db-18 mt-[30px] mb-[16px]">테마</div>
      <Swiper spaceBetween={10} slidesPerView={1.5}>
        {THEMES.map((theme) => (
          <SwiperSlide onClick={() => handleSelectTheme(theme.label)}>
            <div className="p-1">
              <img
                src={theme.src}
                className={` rounded-[8px] w-[194px] h-[100px] block hover ${
                  selectedTheme === theme.label &&
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
