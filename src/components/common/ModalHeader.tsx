import { Button } from 'antd';

export const ModalHeader = ({
  handleCloseModal,
  handleAddBLock,
  text,
}: {
  handleCloseModal: () => void;
  handleAddBLock: () => void;
  text: string;
}) => {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-line border-solid pb-[20px]">
      <Button danger onClick={handleCloseModal}>
        취소
      </Button>
      <div className="dm-16">{text}</div>
      <Button type="primary" onClick={handleAddBLock}>
        완료
      </Button>
    </div>
  );
};
