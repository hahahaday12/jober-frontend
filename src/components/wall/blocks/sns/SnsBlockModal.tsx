import { Modal, message } from 'antd';
import React, { useMemo, useState } from 'react';
import { ADDABLE_SNSS } from '@/data/constants/blocks';
import { Icon } from '@/components/common';
import SnsModalInput from './SnsModalInput';
import { ModalHeader } from '@/components/common/ModalHeader';

interface SnsBlockModalProps {
  registeredSns: (string | undefined)[];
  isSnsModalOpen: boolean;
  setIsSnsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SnsBlockModal = ({
  registeredSns,
  isSnsModalOpen,
  setIsSnsModalOpen,
}: SnsBlockModalProps) => {
  const [selectedSns, setSelectedSns] = useState('');

  const handleSnsClick = (snsTitle: string) => {
    setSelectedSns(snsTitle);
  };

  const handleCloseSnsModal = () => {
    setIsSnsModalOpen(false);
    setSelectedSns('');
  };

  const confirm = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.success('Click on Yes');
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error('Click on No');
  };

  const unregisteredSns = useMemo(
    () =>
      Object.keys(ADDABLE_SNSS).filter((sns) => !registeredSns.includes(sns)),
    [registeredSns],
  );

  return (
    <Modal
      centered
      closeIcon={false}
      title={
        <ModalHeader
          text="SNS 연결하기"
          handleCloseModal={handleCloseSnsModal}
          handleAddBLock={() => {}}
        />
      }
      footer={null}
      open={isSnsModalOpen}
      onCancel={handleCloseSnsModal}
      width="520px"
    >
      <div className="flex gap-[24px] justify-center py-[30px]">
        {unregisteredSns.map((sns) => (
          <div key={sns} className="flex flex-col items-center gap-[8px]">
            <Icon
              src={ADDABLE_SNSS[sns].svg}
              onClick={() => handleSnsClick(ADDABLE_SNSS[sns].title)}
              className={`rounded-full hover w-[60px] h-[60px] ${
                selectedSns === ADDABLE_SNSS[sns].title &&
                'ring-[3px] ring-offset-2 ring-blue'
              }`}
            />
            <span className="dm-12 text-gray88">{ADDABLE_SNSS[sns].title}</span>
          </div>
        ))}
      </div>
      {selectedSns && <SnsModalInput sns={selectedSns} />}
    </Modal>
  );
};
