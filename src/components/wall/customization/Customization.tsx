import { Button, message } from 'antd';
import brushIcon from '@/assets/icons/brush.svg';
import { CustomizationModal } from './customizationInner/CustomizationModal';
import { useState } from 'react';
import { Icon } from '@/components/common';

type CustomizationProps = {
  styleSettingRef: React.MutableRefObject<null>;
};

export const Customization = ({ styleSettingRef }: CustomizationProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    messageApi.success('스타일 설정을 완료했습니다.');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    messageApi.error('스타일 설정을 취소합니다.');
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
        ref={styleSettingRef}
        className="z-10 flex items-center justify-center gap-[6px] sm:w-[174px] sm:h-[62px] w-[50px] h-[50px] rounded-full fixed bottom-[75px] sm:bottom-[24px] right-[24px]"
        onClick={() => setIsModalOpen(true)}
      >
        <Icon src={brushIcon} />
        <span>스타일 설정</span>
      </Button>
    </>
  );
};
