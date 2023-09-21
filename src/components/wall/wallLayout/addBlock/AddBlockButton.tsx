import { BlockContainer } from '../..';
import plusIcon from '@/assets/icons/plus.svg';
import { Icon } from '@/components/common';

export const AddBlockButton = ({
  setIsAddBlockModalOpen,
}: {
  setIsAddBlockModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <BlockContainer blockName="addButton">
      <div
        onClick={() => setIsAddBlockModalOpen(true)}
        className="dm-16 hover flex justify-center items-center h-[76px]"
      >
        <span>항목 추가하기</span>
        <Icon src={plusIcon} className="ml-[6px]" />
      </div>
    </BlockContainer>
  );
};
