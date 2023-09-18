import { useWallStore } from '@/store';
import { BlockContainer } from '../..';
import plusIcon from '@/assets/icons/plus.svg';

export const AddBlockButton = ({
  setIsAddBlockModalOpen,
}: {
  setIsAddBlockModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { isEdit } = useWallStore();
  return (
    <BlockContainer blockName="profileBlock">
      <div
        onClick={() => setIsAddBlockModalOpen(true)}
        className={`dm-16 hover text-gray88 flex justify-center items-center h-[76px] ${
          !isEdit && 'hidden'
        }`}
      >
        항목 추가하기
        <img src={plusIcon} alt="plus icon" />
      </div>
    </BlockContainer>
  );
};
