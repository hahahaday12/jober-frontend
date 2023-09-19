import { useWallStore } from '@/store';
import { Button, ColorPicker } from 'antd';
import { Color } from 'antd/es/color-picker';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import galleryIcon from '@/assets/icons/gallery.svg';

export const BackgroundSettings = () => {
  const { wall, isEdit, setWall } = useWallStore();

  const [color, setColor] = useState<Color | string>(
    wall.style.background.color,
  );

  useEffect(() => {
    const bgColor = typeof color === 'string' ? color : color.toHexString();
    setWall(
      produce(wall, (draft) => {
        draft.style.background.color = bgColor;
      }),
    );
  }, [color]);

  const handleColorChange = (newColor: Color) => {
    setColor(newColor.toHexString());
  };

  // 배경-그라데이션
  const handleGradation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        draft.style.background.gradation = e.target.value as unknown as boolean;
      }),
    );
    console.log(e.target.value);
  };

  // 배경-이미지
  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === FileReader.DONE) {
        setWall(
          produce(wall, (draft) => {
            draft.style.background.imageUrl = reader.result as string;
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
          <label
            className={`bg-sky rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.style.background.color === color && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="color"
              checked={wall.style.background.color === color}
              //onChange={handleColor}
            />
            <ColorPicker value={color} onChange={handleColorChange}>
              <Button
                type="primary"
                className={`w-[194px] h-[100px] rounded-[8px]`}
                style={{ backgroundColor: color as string }}
                //style={{ backgroundColor }}
              />
            </ColorPicker>
          </label>

          {/* 그라데이션 */}
          <label
            className={`bg-sky rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.style.background.gradation === true && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="gradation"
              checked={wall.style.background.gradation === true}
              onChange={handleGradation}
            />
          </label>
          {/* 이미지 */}
          <label
            className={`bg-sky rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.style.background.imageUrl === 'ring-blue ring-1'
            }`}
          >
            <div className="flex w-[36px] h-[36px] flex-col items-center justify-center rounded-full bg-white overflow-hidden">
              {wall.style.background.imageUrl ? (
                <img
                  src={wall.style.background.imageUrl}
                  alt="profile"
                  className={`h-full w-full rounded-full object-cover ${
                    isEdit ? 'opacity-50' : 'opacity-100'
                  }`}
                />
              ) : (
                <div className="w-full bg-lightGray h-full" />
              )}

              {isEdit && (
                <label className="cursor-pointer hover:opacity-60 transition absolute bg-white z-20 w-10 h-10 rounded-full flex justify-center items-center">
                  <img src={galleryIcon} alt="gallery icon" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImage}
                    accept="image/*"
                  />
                </label>
              )}
            </div>
          </label>
        </div>
      </div>
    </>
  );
};
