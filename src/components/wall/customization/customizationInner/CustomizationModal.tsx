import { useWallStore } from '@/store';
//import { StyleType, BackgroundType, StyleBlockType } from '@/types/wall';
import { Modal, ColorPicker, Button, theme } from 'antd';
import type { Color } from 'antd/es/color-picker';
import { produce } from 'immer';
import { useMemo, useState } from 'react';
//import { useState } from 'react';
//import modernTheme from '@/assets/theme/modern.svg';

interface CustomizationModalProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}
export const CustomizationModal = ({
  isModalOpen,
  // handleOk,
  handleCancel,
}: CustomizationModalProps) => {
  const { wall, setWall } = useWallStore();

  const { token } = theme.useToken();

  const [color, setColor] = useState<Color | string>(token.colorPrimary);

  const bgColor = useMemo<string>(
    () => (typeof color === 'string' ? color : color.toHexString()),
    [color],
  );

  const btnStyle: React.CSSProperties = {
    backgroundColor: bgColor,
  };

  // 배경-컬러
  // const handleColor = (color: string) => {
  //   setWall(
  //     produce(wall, (draft) => {
  //       draft.style.background.color = color;
  //     }),
  //   );
  //   //console.log(e.target.value);
  // };

  // 배경-그라데이션
  const handleGradation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        draft.style.background.gradation = e.target.value as unknown as boolean;
      }),
    );
    console.log(e.target.value);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        draft.style.block.gradation = e.target.value as unknown as boolean;
      }),
    );
    console.log(e.target.value);
  };

  // 블록-모양
  const handleBorder = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setWall({
    //   ...wall,
    //   style: {
    //     ...wall.style,
    //     block: { ...wall.style.block, shape: e.target.value },
    //   },
    // });
    //immer
    setWall(
      produce(wall, (draft) => {
        draft.style.block.shape = e.target.value as '0px' | '6px' | '13px';
      }),
    );
    console.log(e.target.value);
  };

  // 블록-스타일
  const handleStyle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        draft.style.block.style = e.target.value as 'none' | 'shadow' | 'flat';
      }),
    );
    console.log(e.target.value);
  };

  // 블록-스타일 컬러
  const handleStyleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        draft.style.block.color = e.target.value; //질문
      }),
    );
    console.log(e.target.value);
  };
  // 블록-스타일 컬러 그라데이션
  const handleStyleGradation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        draft.style.block.gradation = e.target.value as unknown as boolean;
      }),
    );
    console.log(e.target.value);
  };

  // const handleApplyCustomization = () => {
  //   console.log('선택된 스타일 옵션:', style);
  //   // 선택된 스타일 옵션을 여기서 활용하거나 필요한 대로 처리합니다.
  //   handleOk(); // 원래의 확인 핸들러를 호출합니다.
  // };

  return (
    <Modal
      centered
      title="Modal 제목"
      open={isModalOpen}
      //onOk={handleApplyCustomization}
      onCancel={handleCancel}
      width="660px"
      //height="688px"
    >
      {/* 배경 */}
      <div>
        <div className="db-18 mt-[30px] mb-[16px]">배경</div>
        <div className="flex justify-between">
          <div className="flex flex-row gap-[10px]">
            <label
              className={`bg-sky rounded-[8px] w-[194px] h-[100px] block hover ${
                wall.style.background.color === '#eee' && 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="color"
                checked={wall.style.background.color === '#eee'}
                //onChange={handleColor}
              />
              <ColorPicker value={color} onChange={setColor}>
                <Button
                  type="primary"
                  style={btnStyle}
                  className="w-[194px] h-[100px] rounded-[8px]"
                >
                  컬러 피커
                </Button>
              </ColorPicker>
              {/* <ColorPicker
                className="w-[194px] h-[100px]"
                color={wall.style.background.color}
                onChange={(color) => {
                  handleColor(color);
                }}
              /> */}
            </label>
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
            {/* 이미지 고민... */}
            <label
              className={`bg-sky rounded-[8px] w-[194px] h-[100px] block hover ${
                wall.style.background.imageUrl === 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="image"
                checked={wall.style.background.imageUrl === null}
                onChange={handleImage}
              />
            </label>
          </div>
        </div>
      </div>

      {/* 블록 */}
      <div>
        <div className="db-18 mt-[30px] mb-[16px]">블록</div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <label
              className={`bg-lightGray border-[1px] border-solid border-line w-[194px] h-[30px] block hover ${
                wall.style.block.shape === '0px' && 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="0px"
                checked={wall.style.block.shape === '0px'}
                onChange={handleBorder}
              />
            </label>
            <label
              className={`bg-lightGray border-[1px] rounded-[6px] border-solid border-line w-[194px] h-[30px] block hover ${
                wall.style.block.shape === '6px' && 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="6px"
                checked={wall.style.block.shape === '6px'}
                onChange={handleBorder}
              />
            </label>
            <label
              className={`bg-lightGray border-[1px] rounded-[13px] border-solid border-line w-[194px] h-[30px] block hover ${
                wall.style.block.shape === '13px' && 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="13px"
                checked={wall.style.block.shape === '13px'}
                onChange={handleBorder}
              />
            </label>
            <div className="dm-16 mt-[10px]">모양</div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <label
              className={`bg-lightGray w-[194px] h-[30px] block hover ${
                wall.style.block.style === 'none' && 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="none"
                checked={wall.style.block.style === 'none'}
                onChange={handleStyle}
              />
            </label>
            <label
              className={`bg-lightGray border-[1px] border-solid border-lightBlack w-[194px] h-[30px] block hover ${
                wall.style.block.style === 'flat' && 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="flat"
                checked={wall.style.block.style === 'flat'}
                onChange={handleStyle}
              />
            </label>
            <label
              className={` shadow-[3px_3px_0_0] bg-lightGray border-[1px] border-solid border-lightBlack w-[194px] h-[30px] block hover ${
                wall.style.block.style === 'shadow' && 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="shadow"
                checked={wall.style.block.style === 'shadow'}
                onChange={handleStyle}
              />
            </label>
            <div className="dm-16 mt-[8px]">스타일</div>
          </div>

          {/* 스타일 색상 - 컬러, 그라데이션 어떻게 처리할지 생각하기 */}
          <div className="flex flex-col gap-[10px]">
            <label
              className={` bg-sky rounded-[8px] w-[194px] h-[48px] block hover ${
                wall.style.block.color === '#eee' && 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="color"
                checked={wall.style.block.color === '#eee'}
                onChange={handleStyleColor}
              />
              {/* <ColorPicker value={color} onChange={setColor}>
                <Button
                  type="primary"
                  style={btnStyle}
                  className="w-[194px] h-[48px]"
                >
                  컬러 피커
                </Button>
              </ColorPicker> */}
            </label>
            {/* 그라데이션 */}
            <label
              className={`bg-gradient-to-t from-white to-[rgba(237, 248, 252, 0.20)] bg-sky rounded-[8px] w-[194px] h-[48px] block hover ${
                wall.style.block.gradation === true && 'ring-blue ring-1'
              }`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value="gradation"
                checked={wall.style.block.gradation === true}
                onChange={handleStyleGradation}
              />
            </label>
            <div className="dm-16 mt-[10px]">스타일 색상</div>
          </div>
        </div>
      </div>

      {/* 이미지 질문 */}
      {/* bg-[${modernTheme}] */}
      <div className="db-18 mt-[30px] mb-[16px]">테마</div>
      <div className="overflow-x-auto flex justify-between">
        <div className="flex flex-row gap-[10px]">
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.style.theme === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.style.theme === 'modern'}
              //onChange={handleTheme}
            />
          </label>
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.style.theme === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.style.theme === 'modern'}
              //onChange={handleTheme}
            />
          </label>
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.style.theme === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.style.theme === 'modern'}
              //onChange={handleTheme}
            />
          </label>
          <label
            className={` bg-blue rounded-[8px] w-[194px] h-[100px] block hover ${
              wall.style.theme === 'modern' && 'ring-blue ring-1'
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="style"
              value="modern"
              checked={wall.style.theme === 'modern'}
              //onChange={handleTheme}
            />
          </label>
        </div>
      </div>
    </Modal>
  );
};
