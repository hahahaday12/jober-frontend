import { useWallStore } from '@/store';
import { produce } from 'immer';
import { BLOCK_SHAPE, BLOCK_STYLE } from '@/data/constants/customization';
//import { useEffect, useState } from 'react';
import { Button, ColorPicker } from 'antd';
import { Color } from 'antd/es/color-picker';

export const BlockSettings = ({
  setBlockOptions,
  blockOptions,
}: {
  blockOptions: 'solid' | 'gradation';
  setBlockOptions: React.Dispatch<React.SetStateAction<'solid' | 'gradation'>>;
}) => {
  const { wall, setWall } = useWallStore();
  const handleBlockColorPick = (backgroundColor: Color) => {
    const bgColor =
      typeof backgroundColor === 'string'
        ? backgroundColor
        : backgroundColor.toHexString();
    setBlockOptions('solid');
    setWall(
      produce(wall, (draft) => {
        draft.styleSetting.blockSetting.gradation = false;
        draft.styleSetting.blockSetting.styleColor = bgColor;
      }),
    );
    console.log('ColorPicker Value:', backgroundColor);
    console.log('Block Setting:', wall.styleSetting.blockSetting);
  };
  const handleBlockGradationPick = (backgroundColor: Color) => {
    const bgColor =
      typeof backgroundColor === 'string'
        ? backgroundColor
        : backgroundColor.toHexString();
    setBlockOptions('gradation');
    setWall(
      produce(wall, (draft) => {
        draft.styleSetting.blockSetting.gradation = true;
        draft.styleSetting.blockSetting.styleColor = bgColor;
      }),
    );
  };

  // 블록-모양
  const handleBorder = (e: React.ChangeEvent<HTMLInputElement>) => {
    //immer
    setWall(
      produce(wall, (draft) => {
        draft.styleSetting.blockSetting.shape = e.target.value as
          | '0px'
          | '6px'
          | '13px';
      }),
    );
    console.log(e.target.value);
  };

  // 블록-스타일
  const handleStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        draft.styleSetting.blockSetting.style = e.target.value as
          | 'none'
          | 'shadow'
          | 'flat';
      }),
    );
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="db-18 mt-[30px] mb-[16px]">블록</div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[8px]">
          {BLOCK_SHAPE.map((shape) => (
            <label
              className={`bg-lightGray border-[1px] border-solid border-line w-[194px] h-[30px] block hover ${
                wall.styleSetting.blockSetting.shape === shape &&
                'ring-blue ring-1 ring-offset-2'
              }`}
              style={{ borderRadius: shape }}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value={shape}
                checked={wall.styleSetting.blockSetting.shape === shape}
                onChange={handleBorder}
              />
            </label>
          ))}
          <div className="dm-16 mt-[10px] text-center items-center">모양</div>
        </div>

        <div className="flex flex-col gap-[8px]">
          {BLOCK_STYLE.map((style) => (
            <label
              className={`${style} bg-lightGray w-[194px] h-[30px] block hover ${
                wall.styleSetting.blockSetting.style === style &&
                'ring-blue ring-1 ring-offset-2'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value={style}
                checked={wall.styleSetting.blockSetting.style === style}
                onChange={handleStyle}
              />
            </label>
          ))}
          <div className="dm-16 mt-[8px] text-center items-center">스타일</div>
        </div>

        {/* 블록-컬러 */}
        <div className="flex flex-col gap-[10px]">
          <div
            className={` bg-sky rounded-[8px] w-[194px] h-[48px] hover ${
              blockOptions === 'solid' && 'ring-blue ring-2 ring-offset-2'
            }`}
          >
            <ColorPicker
              value={wall.styleSetting.blockSetting.styleColor}
              onChange={handleBlockColorPick}
            >
              <Button
                type="primary"
                className={`w-[194px] h-[48px] rounded-[8px]`}
                style={{
                  backgroundColor: wall.styleSetting.blockSetting.styleColor,
                }}
              />
            </ColorPicker>
          </div>

          {/* 블록-그라데이션 */}
          <div
            className={`bg-gradient-to-t from-white to-[rgba(237, 248, 252, 0.20)] bg-sky rounded-[8px] w-[194px] h-[48px] hover ${
              blockOptions === 'gradation' && 'ring-blue ring-2 ring-offset-2'
            }`}
          >
            <ColorPicker
              value={wall.styleSetting.blockSetting.styleColor}
              onChange={handleBlockGradationPick}
            >
              <Button
                type="primary"
                className={`w-[194px] h-[48px] rounded-[8px]`}
                style={{
                  backgroundColor: wall.styleSetting.blockSetting.styleColor,
                }}
              />
            </ColorPicker>
          </div>
          <div className="dm-16 mt-[10px] text-center items-center">
            스타일 색상
          </div>
        </div>
      </div>
    </div>
  );
};
