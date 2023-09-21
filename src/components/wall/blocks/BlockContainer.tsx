import { useWallStore } from '@/store';
import DragHandle from '@/components/wall/blocks/DragHandle';
import trashIcon from '@/assets/icons/trash.svg';
import { produce } from 'immer';
import { Icon } from '@/components/common';

type BlockContainerProps = {
  children: React.ReactNode;
  blockName: string;
  blockUUID?: string;
};

export const BlockContainer = ({
  blockUUID,
  children,
  blockName,
}: BlockContainerProps) => {
  const { isEdit, wall, setWall } = useWallStore();

  const handleDeleteBlock = () => {
    setWall(
      produce(wall, (draft) => {
        draft.blocks = draft.blocks.filter(
          (block) => block.blockUUID !== blockUUID,
        );
      }),
    );
  };

  const defaultBlocks =
    blockName === 'wallInfoBlock' || blockName === 'addButton';

  return (
    <div
      className={`rounded-[${wall?.styleSetting?.blockSetting?.shape}] ${
        wall?.styleSetting?.blockSetting?.style
      } border-solid border-lightBlack overflow-hidden relative ${
        isEdit && 'text-gray88'
      }`}
      style={{
        backgroundColor: wall?.styleSetting?.blockSetting?.styleColor,
      }}
    >
      {isEdit && !defaultBlocks && (
        <>
          <DragHandle />
          <Icon
            src={trashIcon}
            className={`absolute right-[26px] top-[26px] hover ${
              blockName === 'templateBlock' && 'hidden'
            }`}
            onClick={handleDeleteBlock}
          />
        </>
      )}
      {children}
    </div>
  );
};
