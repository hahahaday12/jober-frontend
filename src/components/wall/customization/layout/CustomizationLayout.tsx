//import React from 'react';
//import { useState } from 'react';
import { FloatButton } from 'antd';
//import Brush from '@/assets/icons/customization/brush.svg';
//import { CustomizationModal } from '..';

export const CustomizationLayout = () => {
  // const [isCustomizationLayout, setIsCustomizationLayout] = useState(false);

  // const showModal = () => {
  //   setIsCustomizationLayout(true);
  // };

  // const handleOk = () => {
  //   setIsCustomizationLayout(false);
  // };

  // const handleCancel = () => {
  //   alert('취소');
  //   setIsCustomizationLayout(false);
  // };

  return (
    <>
      {/* <CustomizationModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      /> */}

      <FloatButton onClick={() => console.log('click')} />
      {/* <FloatButton
        icon={<Brush />}
        description="스타일 설정"
        shape="square"
        onClick={showModal}
        className="px-2 py-2 w-auto inline-flex items-center flex-row"
      /> */}

      {/* <FloatButton
        icon={<Brush />}
        description="HELP INFO"
        shape="square"
        style={{ right: 24 }}
      /> */}

      {/* <Modal
        title="스타일 설정"
        open={isCustomizationLayout}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal> */}
    </>
  );
};
