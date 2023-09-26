import { useWallStore } from '@/store';
import { Button, ColorPicker } from 'antd';
import { Color } from 'antd/es/color-picker';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/common';
import galleryIcon from '@/assets/icons/gallery.svg';
import { message } from 'antd';
import { STYLE_IMAGE_FILE_SIZE_LIMIT } from '@/data/constants/customization';

export const BackgroundSettings = () => {
  const { wall, isEdit, setWall } = useWallStore();
  const [messageApi] = message.useMessage();
  const [backgroundColor, setBackgroundColor] = useState<Color | string>(
    wall.styleSetting.backgroundSetting.solidColor,
  );

  useEffect(() => {
    const bgColor =
      typeof backgroundColor === 'string'
        ? backgroundColor
        : backgroundColor.toHexString();
    setWall(
      produce(wall, (draft) => {
        draft.styleSetting.backgroundSetting.solidColor = bgColor;
      }),
    );
  }, [backgroundColor]);

  const handleColorChange = (newColor: Color) => {
    setBackgroundColor(newColor.toHexString());
  };

  // 배경-그라데이션
  const handleGradation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        draft.styleSetting.backgroundSetting.gradation = e.target
          .value as unknown as boolean;
      }),
    );
    console.log(e.target.value);
  };

  // 배경-이미지
  const handleStyleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    if (imageFile && imageFile.size > STYLE_IMAGE_FILE_SIZE_LIMIT) {
      messageApi.error('이미지가 2MB를 초과하였습니다.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FileReader.DONE) {
        setWall(
          produce(wall, (draft) => {
            draft.styleSetting.backgroundSetting.styleImgURL =
              reader.result as string;
          }),
        );
      }
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };

  return (
    <>
      <div className="db-18 mt-[30px] mb-[16px]">배경</div>
      <div className="flex justify-between">
        <div className="flex flex-row gap-[10px]">
          <div>
            <label
              className={`bg-sky rounded-[8px] w-[194px] h-[100px] block hover ${
                wall.styleSetting.backgroundSetting.solidColor ===
                  backgroundColor && 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="color"
                checked={
                  wall.styleSetting.backgroundSetting.solidColor ===
                  backgroundColor
                }
                //onChange={handleColor}
              />
              <ColorPicker value={backgroundColor} onChange={handleColorChange}>
                <Button
                  type="primary"
                  className={`w-[194px] h-[100px] rounded-[8px]`}
                  style={{ backgroundColor: backgroundColor as string }}
                  //style={{ backgroundColor }}
                />
              </ColorPicker>
            </label>
            <div className="dm-16 mt-[10px] text-center items-center">단색</div>
          </div>

          {/* 그라데이션 */}
          <div>
            <label
              className={`bg-sky rounded-[8px] w-[194px] h-[100px] block hover ${
                wall.styleSetting.backgroundSetting.gradation === true &&
                'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="gradation"
                checked={wall.styleSetting.backgroundSetting.gradation === true}
                onChange={handleGradation}
              />
            </label>
            <div className="dm-16 mt-[10px] text-center items-center">
              그라데이션
            </div>
          </div>
          {/* 이미지 */}
          <div>
            <label
              className={`bg-sky rounded-[8px] w-[194px] h-[100px] block hover ${
                wall.styleSetting.backgroundSetting.styleImgURL ===
                'ring-blue ring-1'
              }`}
            >
              <div className="rounded-[8px] w-[194px] h-[100px] flex flex-col items-center justify-center bg-white overflow-hidden">
                {wall.styleSetting.backgroundSetting.styleImgURL ? (
                  <img
                    src={wall.styleSetting.backgroundSetting.styleImgURL}
                    alt="styleBGimage"
                    className={`object-cover w-full h-full ${
                      isEdit ? 'opacity-50' : 'opacity-100'
                    }`}
                  />
                ) : (
                  <div className="w-full h-full bg-lightGray" />
                )}
                {isEdit && (
                  <label className="hover absolute bg-white z-20 w-10 h-10 rounded-full flex justify-center items-center">
                    <Icon src={galleryIcon} />
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleStyleImage}
                      accept="image/*"
                    />
                  </label>
                )}
              </div>
            </label>
            <div className="dm-16 mt-[10px] text-center items-center">
              이미지
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
