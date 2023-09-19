import { Modal } from 'antd';
import { CustomizationModalProps } from './CustomizationModal';
import { BackgroundSettings } from './BackgroundSettings';
import { BlockSettings } from './BlockSettings';
import { ThemeSettings } from './ThemeSettings';

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
      onOk={handleOk}
      onCancel={handleCancel}
      width="660px"
    >
      {/* 배경 */}
      <BackgroundSettings />

      {/* 블록 */}
      <BlockSettings />

      {/* 테마 */}
      <ThemeSettings />
    </Modal>
  );
};
