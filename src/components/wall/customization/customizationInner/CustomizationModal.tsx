import { Modal } from 'antd';
import { BackgroundSettings } from './BackgroundSettings';
import { BlockSettings } from './BlockSettings';
import { ThemeSettings } from './ThemeSettings';
import { ModalHeader } from '@/components/common/ModalHeader';

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
  return (
    <Modal
      centered
      title="Modal 제목"
      open={isModalOpen}
      onCancel={handleCancel}
      width="660px"
      footer={null}
    >
      <ModalHeader
        title={'스타일 수정'}
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
