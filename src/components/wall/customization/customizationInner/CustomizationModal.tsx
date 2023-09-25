import { Modal } from 'antd';
import { BackgroundSettings } from './BackgroundSettings';
import { BlockSettings } from './BlockSettings';
import { ThemeSettings } from './ThemeSettings';
import { ModalHeader } from '@/components/common/ModalHeader';
import { Icon } from '@/components/common';
import brushIcon from '@/assets/icons/brush.svg';

type CustomizationModalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

export const CustomizationModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
}: CustomizationModalProps) => {
  const modalTitle = (
    <div className="flex items-center gap-2">
      <Icon src={brushIcon} />
      <span>스타일 설정</span>
    </div>
  );
  return (
    <Modal
      centered
      open={isModalOpen}
      onCancel={handleCancel}
      width="660px"
      footer={null}
      getContainer={false}
      closable={false}
    >
      <ModalHeader
        title={modalTitle}
        handleOk={handleOk}
        handleCloseModal={handleCancel}
        reset
      />
      <BackgroundSettings />
      <BlockSettings />
      <ThemeSettings />
    </Modal>
  );
};
