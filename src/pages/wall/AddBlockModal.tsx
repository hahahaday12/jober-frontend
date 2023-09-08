import { defaultBlocks } from '@/data/constants/blocks';
import { useWallStore } from '@/store';
import { BlockType } from '@/types/blocks';
import { Modal, Radio, RadioChangeEvent } from 'antd';
import { produce } from 'immer';
import { useState } from 'react';

interface AddBlockModalProps {
  setIsAddBlockModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAddBlockModalOpen: boolean;
}

export default function AddBlockModal({
  setIsAddBlockModalOpen,
  isAddBlockModalOpen,
}: AddBlockModalProps) {
  const [selectedBlock, setSelectedBlock] = useState();
  const handleSelecting = (e: RadioChangeEvent) => {
    setSelectedBlock(e.target.value);
  };
  const { wall, setWall } = useWallStore();

  const BLOCKS: { [key: string]: string } = {
    listBlock: '리스트블록',
    fileBlock: '파일블록',
    freeBlock: '자유블록',
    snsBlock: 'SNS블록',
    templateBlock: '템플릿블록',
  };

  const AddableRadioBlocks = Object.keys(BLOCKS).map((block) => (
    <Radio key={block} value={block}>
      {BLOCKS[block]}
    </Radio>
  ));

  const handleAddBLock = () => {
    setWall(
      produce(wall, (draft) => {
        if (selectedBlock) {
          draft.order.push(selectedBlock as BlockType);
          draft[selectedBlock] = defaultBlocks[selectedBlock];
        }
      }),
    );
    setIsAddBlockModalOpen(false);
  };

  return (
    <Modal
      centered
      title="블록선택"
      open={isAddBlockModalOpen}
      onOk={handleAddBLock}
      onCancel={() => setIsAddBlockModalOpen(false)}
      width="70vw"
      className="max-w-xl"
    >
      <Radio.Group onChange={handleSelecting} value={selectedBlock}>
        {AddableRadioBlocks}
      </Radio.Group>
    </Modal>
  );
}
