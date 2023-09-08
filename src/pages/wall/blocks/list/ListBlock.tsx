import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import SingleList from '@/pages/wall/blocks/list/SingleList';
import { useState } from 'react';
import { Input } from 'antd';
import BlockContainer from '@/pages/wall/blocks/BlockContainer';
import { useWallStore } from '@/store';
import { produce } from 'immer';
import { ListBlockType, ListType } from '@/types/blocks';

export default function ListBlock() {
  const [isListTitleEdit, setIsListTitleEdit] = useState(false);

  const { isEdit, wall, setWall } = useWallStore();

  const handleListTile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        (draft.listBlock as ListBlockType).listTitle = e.target.value;
      }),
    );
  };

  const handleAddList = () => {
    setWall(
      produce(wall, (draft) => {
        draft.listBlock?.lists.push({
          id: draft.listBlock.lists[draft.listBlock.lists.length - 1].id + 1,
          listSubtitle: '',
          listDescription: '',
          isLink: false,
        });
      }),
    );
  };

  return (
    <BlockContainer blockName="listBlock">
      <div className="p-7 flex flex-col gap-5">
        <div className="flex text-xl font-bold items-center gap-2 text-gray-600">
          {isListTitleEdit ? (
            <Input
              value={wall.listBlock?.listTitle}
              onChange={handleListTile}
            />
          ) : (
            <h4>{wall.listBlock?.listTitle || '제목'}</h4>
          )}
          {isEdit && (
            <EditOutlined
              className="cursor-pointer"
              onClick={() => setIsListTitleEdit((prev) => !prev)}
            />
          )}
        </div>

        {wall.listBlock?.lists.map((list: ListType) => (
          <SingleList
            key={list.id}
            isEdit={isEdit}
            id={list.id}
            subTitle={list.listSubtitle}
            desc={list.listDescription}
            isLink={list.isLink}
          />
        ))}

        {isEdit && (
          <div className="w-full text-center">
            <PlusOutlined className="cursor-pointer" onClick={handleAddList} />
          </div>
        )}
      </div>
    </BlockContainer>
  );
}
