import { useWallStore } from '@/store';
import { StyleType } from '@/types/wall';
import { Modal } from 'antd';
import { produce } from 'immer';
import { useState } from 'react';

interface CustomizationModalProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}
export const CustomizationModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
}: CustomizationModalProps) => {
  const { wall, setWall } = useWallStore();
  const handleBorder = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setWall({
    //   ...wall,
    //   style: {
    //     ...wall.style,
    //     block: { ...wall.style.block, shape: e.target.value },
    //   },
    // });
    setWall(
      produce(wall, (draft) => {
        draft.style.block.shape = e.target.value as '0px' | '6px' | '13px';
      }),
    );
  };

  const handleApplyCustomization = () => {
    console.log('선택된 스타일 옵션:', style);
    // 선택된 스타일 옵션을 여기서 활용하거나 필요한 대로 처리합니다.
    handleOk(); // 원래의 확인 핸들러를 호출합니다.
  };

  return (
    <Modal
      centered
      title="Modal 제목"
      open={isModalOpen}
      onOk={handleApplyCustomization}
      onCancel={handleCancel}
    >
      {/* <label>배경</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="color"
            checked={!style.background.gradation && !style.background.imageUrl}
            onChange={(e) => handleRadioChange(e, 'background')}
          />
          단색
        </label>
        <label>
          <input
            type="radio"
            value="gradation"
            checked={style.background.gradation}
            onChange={(e) => handleRadioChange(e, 'background')}
          />
          그라데이션
        </label>
        <label>
          <input
            type="radio"
            value="imageUrl"
            checked={style.background.imageUrl !== null}
            onChange={(e) => handleRadioChange(e, 'background')}
          />
          이미지
        </label>
      </div> */}

      <div>
        <div className="db-18 mb-[16px]">블록</div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[8px]">
            <label
              className={`border-[1px] border-solid border-line w-[194px] h-[30px] block hover ${
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
              className={`border-[1px] rounded-[6px] border-solid border-line w-[194px] h-[30px] block hover ${
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
              className={`border-[1px] rounded-[13px] border-solid border-line w-[194px] h-[30px] block hover ${
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
            <div>모양</div>
          </div>
          <div>
            <div>다크</div>
            <div>평면</div>
            <div>그림자</div>
            <div>스타일</div>
          </div>
          <div>
            <div>일반</div>
            <div>그라데이션</div>
            <div>스타일색상</div>
          </div>
        </div>
      </div>

      {/* <div className="vertical-layout">
            <label>스타일</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="style"
                  value="dark"
                  checked={style.block.style === 'dark'}
                  onChange={(e) => handleRadioChange(e, 'block')}
                />
                스타일 1
              </label>
              <label>
                <input
                  type="radio"
                  name="style"
                  value="shadow"
                  checked={style.block.style === 'shadow'}
                  onChange={(e) => handleRadioChange(e, 'block')}
                />
                스타일 2
              </label>
              <label>
                <input
                  type="radio"
                  name="style"
                  value="flat"
                  checked={style.block.style === 'flat'}
                  onChange={(e) => handleRadioChange(e, 'block')}
                />
                스타일 3
              </label>
            </div>
          </div> */}

      {/* <div className="vertical-layout">
            <label>스타일 색상</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gradation"
                  value="스타일색상1"
                  checked={style.block.gradation}
                  onChange={(e) => handleRadioChange(e, 'block')}
                />
                스타일 색상 1
              </label>
              <label>
                <input
                  type="radio"
                  name="gradation"
                  value="스타일색상2"
                  checked={style.block.gradation}
                  onChange={(e) => handleRadioChange(e, 'block')}
                />
                스타일 색상 2
              </label>
              <label>
                <input
                  type="radio"
                  name="gradation"
                  value="스타일색상3"
                  checked={style.block.gradation}
                  onChange={(e) => handleRadioChange(e, 'block')}
                />
                스타일 색상 3
              </label>
            </div>
          </div> */}

      {/* <label>테마</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="modern"
            checked={style.theme === 'modern'}
            onChange={(e) => handleRadioChange(e, 'theme')}
          />
          테마 1
        </label>
        <label>
          <input
            type="radio"
            value="classic"
            checked={style.theme === 'classic'}
            onChange={(e) => handleRadioChange(e, 'theme')}
          />
          테마 2
        </label>
        <label>
          <input
            type="radio"
            value="simple"
            checked={style.theme === 'simple'}
            onChange={(e) => handleRadioChange(e, 'theme')}
          />
          테마 3
        </label>
        <label>
          <input
            type="radio"
            value="dark"
            checked={style.theme === 'dark'}
            onChange={(e) => handleRadioChange(e, 'theme')}
          />
          테마 4
        </label>
      </div> */}
    </Modal>
  );
};
