import { useState } from 'react';
import { Input } from 'antd';
import { useWallStore } from '@/store';
import { produce } from 'immer';
import { BlockContainer, SingleList } from 'components/index';
import { BlockType, SubDataClassType, SubDatumType } from '@/types/wall';
import editThickIcon from '@/assets/icons/edit-thick.svg';
import plusIcon from '@/assets/icons/plus.svg';
import { Icon } from '@/components/common';

interface ListBlockProps {
  blockUUID?: string;
  blockType?: BlockType;
  subData?: SubDatumType[] | SubDataClassType;
}
export const ListBlock = ({ blockUUID }: ListBlockProps) => {
  const { isEdit, wall, setWall } = useWallStore();
  const [isListTitleEdit, setIsListTitleEdit] = useState(false);

  const targetListBlockIndex = wall.blocks.findIndex(
    (block) => block.blockUUID === blockUUID,
  );
  const targetListBlock = wall.blocks[targetListBlockIndex];

  const handleListTile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        (
          draft.blocks[targetListBlockIndex].subData as SubDataClassType
        ).listTitle = e.target.value;
      }),
    );
  };

  const handleAddList = () => {
    setWall(
      produce(wall, (draft) => {
        const listBlockIndex = draft.blocks.findIndex(
          (block) => block.blockUUID === blockUUID,
        );
        if (listBlockIndex !== -1) {
          (
            draft.blocks[listBlockIndex].subData as SubDataClassType
          ).lists?.push({
            listUUID: crypto.randomUUID(),
            listSubtitle: '',
            listDescription: '',
            isLink: false,
          });
        }
      }),
    );
  };

  return (
    <BlockContainer blockName="listBlock" blockUUID={blockUUID}>
      <div className="px-[28px] py-[26px] flex flex-col">
        <div className={`flex items-center gap-[6px] db-20 mb-[16px]`}>
          {isListTitleEdit ? (
            <Input
              placeholder="블록 제목을 입력해주세요."
              value={(targetListBlock?.subData as SubDataClassType).listTitle}
              onChange={handleListTile}
              className="w-1/3 px-1 py-0 "
            />
          ) : (
            <>
              {(targetListBlock?.subData as SubDataClassType).listTitle ||
                '블록 제목을 입력해주세요.'}
            </>
          )}
          {isEdit && (
            <Icon
              src={editThickIcon}
              onClick={() => setIsListTitleEdit((prev) => !prev)}
            />
          )}
        </div>

        <div className="flex flex-col gap-[30px]">
          {(targetListBlock?.subData as SubDataClassType).lists?.map(
            (list, id) => (
              <SingleList
                id={id}
                targetListBlockIndex={targetListBlockIndex}
                listUUID={list.listUUID}
                key={list.listUUID}
                isEdit={isEdit}
                listSubtitle={list.listSubtitle}
                listDescription={list.listDescription}
                isLink={list.isLink}
              />
            ),
          )}
        </div>

        {isEdit && (
          <div className="w-full text-center">
            <Icon
              src={plusIcon}
              onClick={handleAddList}
              className="mt-[20px]"
            />
          </div>
        )}
      </div>
    </BlockContainer>
  );
};
