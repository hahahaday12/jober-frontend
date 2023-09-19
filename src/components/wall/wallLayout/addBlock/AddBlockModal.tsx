import { ADDABLE_BLOCKS, DEFAULT_BLOCKS } from '@/data/constants/blocks';
import { useWallStore } from '@/store';
import { Modal } from 'antd';
import { produce } from 'immer';
import { useMemo, useState } from 'react';
import { ModalHeader } from '../../../common/ModalHeader';
import { v4 as uuidv4 } from 'uuid';
import { BlockElementType } from '@/types/wall';
import { AddableBlock } from './AddableBlock';

interface AddBlockModalProps {
  setIsAddBlockModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAddBlockModalOpen: boolean;
}

export const AddBlockModal = ({
  setIsAddBlockModalOpen,
  isAddBlockModalOpen,
}: AddBlockModalProps) => {
  const [selectedBlock, setSelectedBlock] = useState('');

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBlock(e.target.value);
  };

  const { wall, setWall } = useWallStore();
  const hasSnsBlock = useMemo(
    () => wall?.blocks?.some((block) => block.blockType === 'snsBlock'),
    [wall?.blocks],
  );

  const handleCloseModal = () => {
    setIsAddBlockModalOpen(false);
    setSelectedBlock('');
  };

  const handleAddBLock = () => {
    if (selectedBlock) {
      setWall(
        produce(wall, (draft) => {
          const newBlock = {
            ...DEFAULT_BLOCKS[selectedBlock],
            blockUUID: uuidv4(),
          };
          draft.blocks.push(newBlock as BlockElementType);
        }),
      );
    }
    setIsAddBlockModalOpen(false);
    setSelectedBlock('');
  };

  return (
    <Modal
      centered
      closeIcon={false}
      title={
        <ModalHeader
          text="항목 추가하기"
          handleCloseModal={handleCloseModal}
          handleAddBLock={handleAddBLock}
        />
      }
      footer={null}
      open={isAddBlockModalOpen}
      onCancel={handleCloseModal}
      width="560px"
    >
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[32px] ">
        {Object.keys(ADDABLE_BLOCKS).map((block) => (
          <AddableBlock
            hasSnsBlock={hasSnsBlock}
            key={block}
            block={block}
            handleSelect={handleSelect}
            selectedBlock={selectedBlock}
          />
        ))}
      </div>
    </Modal>
  );
};
