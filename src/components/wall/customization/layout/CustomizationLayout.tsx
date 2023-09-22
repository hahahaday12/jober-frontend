import { Button, message } from 'antd';
import brushIcon from '@/assets/icons/brush.svg';
import { CustomizationModal } from '../customizationInner/CustomizationModal';
import { useState } from 'react';

export const CustomizationLayout = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    messageApi.error('스타일 변경 성공');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <CustomizationModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <Button
        className=" z-10 flex items-center justify-center gap-[6px] w-[174px] h-[62px] rounded-full fixed bottom-10 right-10"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={brushIcon} alt="brush icon" />
        스타일 설정
      </Button>
    </>
  );
};
