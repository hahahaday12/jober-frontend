import { Button } from 'antd';

export const AddBlockHeader = ({
  handleCloseModal,
  handleAddBLock,
}: {
  handleCloseModal: () => void;
  handleAddBLock: () => void;
}) => {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-line border-solid pb-[20px]">
      <Button danger onClick={handleCloseModal}>
        취소
      </Button>
      <div className="dm-16">항목 추가하기</div>
      <Button type="primary" onClick={handleAddBLock}>
        완료
      </Button>
    </div>
  );
};
