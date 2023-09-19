import { Button } from 'antd';

export const ModalHeader = ({
  handleCloseModal,
  handleOk,
  title,
  reset,
}: {
  handleCloseModal: () => void;
  handleOk: () => void;
  title: React.ReactNode;
  reset?: boolean;
}) => {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-line border-solid pb-[20px]">
      <Button danger onClick={handleCloseModal}>
        취소
      </Button>
      {reset && (
        <Button onClick={handleCloseModal} className="absolute left-[90px]">
          초기화
        </Button>
      )}
      <div className="dm-16">{title}</div>
      <Button type="primary" onClick={handleOk}>
        완료
      </Button>
    </div>
  );
};
