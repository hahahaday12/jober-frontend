import { Modal, message } from 'antd';
import React, { useState } from 'react';
import { ADDABLE_SNSS } from '@/data/constants/blocks';
import { Icon } from '@/components/common';
import SnsModalInput from './SnsModalInput';
import { ModalHeader } from '@/components/common/ModalHeader';
import { useWallStore } from '@/store';
import { produce } from 'immer';
import { SubDatumType } from '@/types/wall';

interface SnsBlockModalProps {
  unregisteredSns: string[];
  isSnsModalOpen: boolean;
  setIsSnsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SnsBlockModal = ({
  unregisteredSns,
  isSnsModalOpen,
  setIsSnsModalOpen,
}: SnsBlockModalProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const { wall, setWall } = useWallStore();

  const [selectedSns, setSelectedSns] = useState('');
  const [snsInput, setSnsInput] = useState('');

  const handleSnsClick = (snsTitle: string) => {
    setSelectedSns(snsTitle);
  };

  const handleCloseSnsModal = () => {
    setIsSnsModalOpen(false);
    setSelectedSns('');
    setSnsInput('');
  };

  const handleOk = () => {
    const newSns = {
      snsUUID: crypto.randomUUID(),
      snsTitle: selectedSns,
      snsUrl: `https://${ADDABLE_SNSS[selectedSns].url}${snsInput}`,
    };
    const snsBlockIndex = wall.blocks.findIndex(
      (block) => block.blockType === 'snsBlock',
    );
    if (snsBlockIndex !== -1) {
      setWall(
        produce(wall, (draft) => {
          (draft.blocks[snsBlockIndex].subData as SubDatumType[]).push(newSns);
        }),
      );
    }
    messageApi.success('SNS 계정을 연결했습니다.');
    setIsSnsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Modal
        centered
        closeIcon={false}
        title={
          <ModalHeader
            text="SNS 연결하기"
            handleCloseModal={handleCloseSnsModal}
            handleAddBLock={handleOk}
          />
        }
        footer={null}
        open={isSnsModalOpen}
        onCancel={handleCloseSnsModal}
        width="520px"
      >
        <div className="flex gap-[24px] justify-center pt-[24px]">
          {unregisteredSns.map((sns) => (
            <div key={sns} className="flex flex-col items-center gap-[8px]">
              <Icon
                src={ADDABLE_SNSS[sns].svg}
                onClick={() => handleSnsClick(sns)}
                className={`rounded-full hover w-[60px] h-[60px] ${
                  selectedSns === sns && 'ring-[3px] ring-offset-2 ring-blue'
                }`}
              />
              <span
                className={`dm-12 ${
                  selectedSns === sns ? 'text-lightBlack' : 'text-gray88'
                }`}
              >
                {ADDABLE_SNSS[sns].title}
              </span>
            </div>
          ))}
        </div>
        {selectedSns && (
          <SnsModalInput
            sns={selectedSns}
            snsInput={snsInput}
            setSnsInput={setSnsInput}
          />
        )}
      </Modal>
    </>
  );
};
