import { useWallStore } from '@/store';
import { Modal } from 'antd';
//import { produce } from 'immer';
import { CustomizationModalProps } from './CustomizationModal';
//import { BLOCK_SHAPE } from '@/data/constants/customization';
import { BackgroundSettings } from './BackgroundSettings';
import { BlockSettings } from './BlockSettings';
import { ThemeSettings } from './ThemeSettings';

export const CustomizationModal = ({
  isModalOpen,
  // handleOk,
  handleCancel,
}: CustomizationModalProps) => {
  const { wall, setWall } = useWallStore();

  // antD 예시로 넣음, handleColor로 관리하도록 변경해야 함.
  // 배경-컬러
  // const handleColor = (color: string) => {
  //   setWall(
  //     produce(wall, (draft) => {
  //       draft.style.background.color = color;
  //     }),
  //   );
  //   //console.log(e.target.value);
  // };
  // const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setWall(
  //     produce(wall, (draft) => {
  //       draft.style.block.imageUrl = e.target.value as unknown as boolean;
  //     }),
  //   );
  //   console.log(e.target.value);
  // };
  // 정우님, 프로필이미지 방식

  // const handleApplyCustomization = () => {
  //   console.log('선택된 스타일 옵션:', style);
  //   // 선택된 스타일 옵션을 여기서 활용하거나 필요한 대로 처리합니다.
  //   handleOk(); // 원래의 확인 핸들러를 호출합니다.
  // };
  return (
    <Modal
      centered
      title="Modal 제목"
      open={isModalOpen}
      //onOk={handleApplyCustomization}
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
