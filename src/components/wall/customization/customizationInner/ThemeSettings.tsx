import { useWallStore } from '@/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { THEMES } from '@/data/constants/theme';
import { produce } from 'immer';
import { useWindowWidth } from '@/hooks/useWindowWidth';

export const ThemeSettings = () => {
  const { wall, setWall } = useWallStore();

  const handleSelectTheme = (theme: {
    label: string;
    src: string;
    bg: string;
    blockBorderRadius: string;
    blockBg?: string;
    blockStyle: string;
  }) => {
    setWall(
      produce(wall, (draft) => {
        draft.styleSetting.themeSetting.theme = theme.label;
        draft.styleSetting.backgroundSetting.gradation = false;
        draft.styleSetting.backgroundSetting.solidColor = '#eeeeee';
        draft.styleSetting.blockSetting.gradation = false;
        draft.styleSetting.blockSetting.styleColor = theme.blockBg || '#ffffff';
        draft.styleSetting.blockSetting.shape = theme.blockBorderRadius;
        draft.styleSetting.blockSetting.style = theme.blockStyle;
        draft.styleSetting.backgroundSetting.styleImgURL = theme.bg;
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
            onClick={() => handleSelectTheme(theme)}
            key={theme.label}
          >
            <div className="p-1">
              <img
                src={theme.src}
                className={` rounded-[8px] w-[194px] h-[100px] block hover ${
                  wall.styleSetting.themeSetting.theme === theme.label &&
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
