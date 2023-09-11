import { useWallStore } from '@/store';
import { ListBlockType } from '@/types/wall';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Checkbox, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { produce } from 'immer';
import { useState } from 'react';
import editIcon from '@/assets/icons/edit.svg';

interface ListProps {
  blockId?: number;
  isEdit: boolean;
  id: number;
  subTitle: string;
  desc: string;
  isLink: boolean;
}

export const SingleList = ({
  blockId,
  id,
  subTitle,
  desc,
  isLink,
  isEdit,
}: ListProps) => {
  console.log({ id, subTitle, desc, isEdit });

  const { wall, setWall } = useWallStore();

  const [isListDescEdit, setIsListDescEdit] = useState(false);

  const handleSubtitle = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleIsLink = (e: CheckboxChangeEvent) => {
    setWall(
      produce(wall, (draft) => {
        if (draft.listBlock) {
          draft.listBlock.lists = draft.listBlock.lists.map((list) =>
            list.id === id ? { ...list, isLink: e.target.checked } : list,
          );
        }
      }),
    );
  };

  const handleDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        if (draft.listBlock && draft.listBlock.lists) {
          draft.listBlock.lists = draft.listBlock.lists.map((list) => {
            if (list.id === id) {
              list.listDescription = e.target.value;
            }
            return list;
          });
        }
      }),
    );
  };

  const handleDeleteList = () => {
    setWall(
      produce(wall, (draft) => {
        if (draft.listBlock) {
          draft.listBlock.lists = draft.listBlock?.lists.filter(
            (list) => list.id !== id,
          );
        }
      }),
    );
  };
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="flex items-center dm-16 gap-[6px] text-gray88">
          {isListDescEdit ? (
            <Input
              value={subTitle}
              onChange={handleSubtitle}
              className="w-1/3"
            />
          ) : (
            <div
              className={`db-16 ${
                isEdit ? 'text-gray88' : 'text-lightBlack'
              }  flex items-center gap-[12px]`}
            >
              {subTitle || '입력'}
              {!isEdit && (
                <>
                  <div className="w-[2px] h-[22px] bg-lightBlack" />
                  <span className="dm-16">{desc}</span>
                </>
              )}
            </div>
          )}
          {isEdit && (
            <>
              <img
                src={editIcon}
                alt="edit icon"
                className="hover"
                onClick={() => setIsListDescEdit((prev) => !prev)}
              />
              <Checkbox
                onChange={handleIsLink}
                checked={isLink}
                className="ml-5"
              >
                링크
              </Checkbox>
            </>
          )}
        </div>
        {isEdit && (
          <DeleteOutlined
            className={`cursor-pointer ${id === 1 && 'hidden'}`}
            onClick={handleDeleteList}
          />
        )}
      </div>
      {isEdit && (
        <Input
          placeholder="내용"
          value={desc}
          onChange={handleDesc}
          className="h-[50px] text-gray88"
        />
      )}
    </div>
  );
};
