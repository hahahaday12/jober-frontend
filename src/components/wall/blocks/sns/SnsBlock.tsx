import { Button } from 'antd';
import { useState } from 'react';
import { useWallStore } from '@/store';
import { BlockContainer, SnsBlockModal } from 'components/index';
import { SingleSnsType, SubDataClassType, SubDatumType } from '@/types/wall';
import { Icon } from '@/components/common';
import { ADDABLE_SNSS } from '@/data/constants/blocks';
import { PlusOutlined } from '@ant-design/icons';

interface SnsBlockProps {
  blockUUID?: string;
  subData?: SubDatumType[] | SubDataClassType;
}

export const SnsBlock = ({ blockUUID, subData }: SnsBlockProps) => {
  const [isSnsModalOpen, setIsSnsModalOpen] = useState(false);

  const { isEdit } = useWallStore();

  const handleClickSnsIcons = (sns: SingleSnsType) => {
    isEdit ? console.log(sns.snsTitle) : window.open(sns.snsUrl, '_blank');
  };

  return (
    <BlockContainer blockName="snsBlock" blockUUID={blockUUID}>
      <div className="px-[28px] py-[26px]">
        <div className="flex items-center gap-[8px] mb-[23px]">
          <p className="db-20">SNS 연결</p>
          <p className="dm-16">보여주고 싶은 SNS를 연결해주세요!</p>
        </div>
        <div className="flex gap-[24px] justify-center">
          {(subData as SubDatumType[])?.map((sns) => (
            <Icon
              src={ADDABLE_SNSS[sns.snsTitle as string].svg}
              className="w-[60px] h-[60px] rounded-full"
              onClick={() => handleClickSnsIcons(sns as SingleSnsType)}
            />
          ))}
          {isEdit && (
            <Button
              shape="circle"
              type="default"
              className="w-[60px] h-[60px] flex justify-center items-center"
              onClick={() => setIsSnsModalOpen(true)}
            >
              <PlusOutlined />
            </Button>
          )}

          <SnsBlockModal
            isSnsModalOpen={isSnsModalOpen}
            setIsSnsModalOpen={setIsSnsModalOpen}
          />
        </div>
      </div>
    </BlockContainer>
  );
};
