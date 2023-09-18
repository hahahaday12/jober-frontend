import { useWallStore } from '@/store';
import { produce } from 'immer';
import { BLOCK_SHAPE } from '@/data/constants/customization';

export const BlockSettings = () => {
  const { wall, isEdit, setWall } = useWallStore();

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

  return (
    <div>
      <div className="db-18 mt-[30px] mb-[16px]">블록</div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[8px]">
          {BLOCK_SHAPE.map((shape) => (
            <label
              className={`bg-lightGray border-[1px] border-solid border-line w-[194px] h-[30px] block hover ${
                wall.style.block.shape === shape && 'ring-blue ring-1'
              } rounded-[${shape}]`}
            >
              <input
                className="hidden"
                type="radio"
                name="style"
                value={shape}
                checked={wall.style.block.shape === shape}
                onChange={handleBorder}
              />
            </label>
          ))}

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
            className={`shadow-[3px_3px_0_0] bg-lightGray border-[1px] border-solid border-lightBlack w-[194px] h-[30px] block hover ${
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
  );
};
