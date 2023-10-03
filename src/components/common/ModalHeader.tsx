import { Button, Divider } from 'antd';
import { CommonModal } from '..';
import { useState } from 'react';

export const ModalHeader = ({
  handleCloseModal,
  handleContents,
  handleOk,
  title,
  reset,
}: {
  handleCloseModal: () => void;
  handleOk: () => void;
  handleContents: () => void;
  title: React.ReactNode;
  reset?: boolean;
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Button danger onClick={handleCloseModal}>
          취소
        </Button>
        {reset && (
          <Button onClick={handleCloseModal} className="absolute left-[90px]">
            초기화
          </Button>
        )}
        <div className="dm-16">{title}</div>

        <Button type="primary" onClick={handleContents}>
          미리보기
        </Button>

        <Button type="primary" onClick={handleOk}>
          완료
        </Button>
      </div>
      <Divider />
    </>
  );
};
