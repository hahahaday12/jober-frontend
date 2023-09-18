import { Button, Popconfirm } from 'antd';
import { useMemo, useState } from 'react';
import { useWallStore } from '@/store';
import { BlockContainer, SnsBlockModal } from 'components/index';
import { SingleSnsType, SubDataClassType, SubDatumType } from '@/types/wall';
import { Icon } from '@/components/common';
import { ADDABLE_SNSS } from '@/data/constants/blocks';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import Test from '@/test';
import { produce } from 'immer';

interface SnsBlockProps {
  blockUUID?: string;
  subData?: SubDatumType[] | SubDataClassType;
}

export const SnsBlock = ({ blockUUID, subData }: SnsBlockProps) => {
  const [isSnsModalOpen, setIsSnsModalOpen] = useState(false);

  const { isEdit, wall, setWall } = useWallStore();

  const handleClickSnsIcons = (sns: SingleSnsType) => {
    !isEdit && window.open(sns.snsUrl, '_blank');
  };

  const handleDeleteSingleSns = (snsUUID: string) => {
    const snsBlockIndex = wall.blocks.findIndex(
      (block) => block.blockType === 'snsBlock',
    );
    if (snsBlockIndex !== -1) {
      setWall(
        produce(wall, (draft) => {
          draft.blocks[snsBlockIndex].subData = (
            draft.blocks[snsBlockIndex].subData as SubDatumType[]
          ).filter((sns) => sns.snsUUID !== snsUUID);
        }),
      );
    }
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
            <div
              key={sns.snsUUID}
              className="relative rounded-full group overflow-hidden"
            >
              <Popconfirm
                title="SNS 연결해제"
                description="정말로 해당 SNS연결을 해제하시겠습니까?"
                showCancel={false}
                onConfirm={() => handleDeleteSingleSns(sns.snsUUID as string)}
                disabled={!isEdit}
                okButtonProps={{ danger: true }}
              >
                <div className="hover">
                  <Icon
                    src={ADDABLE_SNSS[sns.snsTitle as string].svg}
                    className="w-[60px] h-[60px] rounded-full group-hover:hover"
                    onClick={() => handleClickSnsIcons(sns as SingleSnsType)}
                  />
                  {isEdit && (
                    <CloseOutlined className="group-hover:block hidden font-extrabold absolute top-[21.5px] left-[21.5px]" />
                  )}
                </div>
              </Popconfirm>
            </div>
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
