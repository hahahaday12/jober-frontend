import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Input } from 'antd';
import { useWallStore } from '@/store';
import { produce } from 'immer';
import { BlockContainer, SingleList } from 'components/index';
import { BlockType, ListBlockType, ListType } from '@/types/wall';
import trashIcon from '@/assets/icons/trash.svg';

interface ListBlockProps {
  id?: number;
  blockType?: BlockType;
}
export const ListBlock = ({ id, blockType }: ListBlockProps) => {
  const [isListTitleEdit, setIsListTitleEdit] = useState(false);

  const { isEdit, wall, setWall } = useWallStore();
  const targetBlockData = wall.listBlocks?.find((block) => block.id === id);

  const handleListTile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        const listBlockIndex = (draft.listBlocks as ListBlockType[]).findIndex(
          (block) => block.id === id,
        );
        if (listBlockIndex !== -1) {
          (draft.listBlocks as ListBlockType[])[listBlockIndex].listTitle =
            e.target.value;
        }
      }),
    );
  };

  // const handleDeletBlock = () => {
  //   setWall(
  //     produce(wall, (draft) => {
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       (draft as any)[blockName] = undefined;
  //       draft.order = draft.order.filter((block) => block !== blockName);
  //     }),
  //   );
  // };

  // const handleAddList = () => {
  //   setWall(
  //     produce(wall, (draft) => {
  //       draft.listBlock?.lists.push({
  //         id: draft.listBlock.lists[draft.listBlock.lists.length - 1].id + 1,
  //         listSubtitle: '',
  //         listDescription: '',
  //         isLink: false,
  //       });
  //     }),
  //   );
  // };

  return (
    <BlockContainer blockName="listBlock">
      {isEdit && (
        <img
          src={trashIcon}
          alt="trash icon"
          className="absolute right-[27px] top-[26px] hover:opacity-60 transition cursor-pointer"
          // onClick={handleDeletBlock}
        />
      )}

      <div className="px-[28px] py-[26px] flex flex-col">
        <div className="flex items-center text-lightBlack gap-[6px] db-20 mb-[16px]">
          {isListTitleEdit ? (
            <Input
              placeholder="내용을 입력해주세요."
              value={targetBlockData?.listTitle}
              onChange={handleListTile}
              className="db-20 text-lightBlack w-1/3"
            />
          ) : (
            <h4>{targetBlockData?.listTitle || '내용을 입력해주세요.'}</h4>
          )}
          {isEdit && (
            <EditOutlined
              className="cursor-pointer hover:opacity-60 transition"
              onClick={() => setIsListTitleEdit((prev) => !prev)}
            />
          )}
        </div>
        <div className="flex flex-col gap-[30px]">
          {targetBlockData?.lists.map((list: ListType) => (
            <SingleList
              key={list.id}
              isEdit={isEdit}
              id={list.id}
              subTitle={list.listSubtitle}
              desc={list.listDescription}
              isLink={list.isLink}
            />
          ))}
        </div>

        {isEdit && (
          <div className="w-full text-center">
            <PlusOutlined
              className="cursor-pointer"
              // onClick={handleAddList}
            />
          </div>
        )}
      </div>
    </BlockContainer>
  );
};
