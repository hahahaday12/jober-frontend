import { Button, Popconfirm } from 'antd';
import { useMemo, useState } from 'react';
import { useWallStore } from '@/store';
import { BlockContainer, SnsBlockModal } from 'components/index';
import { SubDatumType } from '@/types/wall';
import { Icon } from '@/components/common';
import { ADDABLE_SNSS } from '@/data/constants/blocks';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { produce } from 'immer';

export type SnsBlockSubData = Pick<
  SubDatumType,
  'snsBlockUUID' | 'snsType' | 'snsUrl'
>;

type SnsBlockProps = {
  blockUUID?: string;
  subData?: SnsBlockSubData[];
};

export const SnsBlock = ({ blockUUID, subData: snsData }: SnsBlockProps) => {
  const { isEdit, wall, setWall } = useWallStore();

  const [isSnsModalOpen, setIsSnsModalOpen] = useState(false);

  const unregisteredSns = useMemo(
    () =>
      Object.keys(ADDABLE_SNSS).filter(
        (sns) =>
          !(snsData as SnsBlockSubData[])
            .map((sns) => sns.snsType)
            .includes(sns),
      ),
    [snsData],
  );

  const handleClickSnsIcons = (snsUrl: string) => {
    !isEdit && window.open(snsUrl, '_blank');
  };

  const handleDeleteSingleSns = (snsBlockUUID: string) => {
    const snsBlockIndex = wall.blocks.findIndex(
      (block) => block.blockType === 'snsBlock',
    );
    if (snsBlockIndex !== -1) {
      setWall(
        produce(wall, (draft) => {
          draft.blocks[snsBlockIndex].subData = draft.blocks[
            snsBlockIndex
          ].subData.filter((sns) => sns.snsBlockUUID !== snsBlockUUID);
        }),
      );
    }
  };

  return (
    <BlockContainer blockName="snsBlock" blockUUID={blockUUID}>
      <div className="p-block">
        {isEdit && (
          <div className="flex items-center gap-[8px] mb-[23px]">
            <p className="db-20">SNS 연결</p>
            <p className="dm-16">보여주고 싶은 SNS를 연결해주세요!</p>
          </div>
        )}

        <div className="flex gap-[24px] justify-center">
          {snsData?.map((sns) => (
            <Popconfirm
              key={sns.snsBlockUUID}
              title="SNS 연결해제"
              description={`정말로 ${sns.snsType} 연결을 해제하시겠습니까?`}
              showCancel={false}
              onConfirm={() =>
                handleDeleteSingleSns(sns.snsBlockUUID as string)
              }
              disabled={!isEdit}
              okButtonProps={{ danger: true }}
              okText="해제"
            >
              <div
                key={sns.snsBlockUUID}
                className="relative rounded-full group overflow-hidden hover"
              >
                <Icon
                  src={ADDABLE_SNSS[sns.snsType as string]?.svg}
                  className="w-[60px] h-[60px] rounded-full"
                  onClick={() => handleClickSnsIcons(sns.snsUrl as string)}
                />
                {isEdit && (
                  <CloseOutlined className="group-hover:block hidden absolute top-[21.5px] left-[21.5px]" />
                )}
              </div>
            </Popconfirm>
          ))}
          {isEdit && unregisteredSns.length > 0 && (
            <Button
              shape="circle"
              className="w-[60px] h-[60px] flex justify-center items-center"
              onClick={() => setIsSnsModalOpen(true)}
            >
              <PlusOutlined />
            </Button>
          )}

          <SnsBlockModal
            unregisteredSns={unregisteredSns}
            isSnsModalOpen={isSnsModalOpen}
            setIsSnsModalOpen={setIsSnsModalOpen}
          />
        </div>
      </div>
    </BlockContainer>
  );
};
