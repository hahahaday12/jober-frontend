import { useWallStore } from '@/store';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Checkbox, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { produce } from 'immer';
import { useState } from 'react';

interface ListProps {
  isEdit: boolean;
  id: number;
  subTitle: string;
  desc: string;
  isLink: boolean;
}

export const SingleList =({
  id,
  subTitle,
  desc,
  isLink,
  isEdit,
}: ListProps) => {
  const { wall, setWall } = useWallStore();

  const [isListDescEdit, setIsListDescEdit] = useState(false);

  const handleSubtitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        if (draft.listBlock) {
          draft.listBlock.lists = draft.listBlock.lists.map((list) =>
            list.id === id ? { ...list, listSubtitle: e.target.value } : list,
          );
        }
      }),
    );
  };

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
        <div className="flex items-center gap-2 w-44">
          {isListDescEdit ? (
            <Input value={subTitle} onChange={handleSubtitle} />
          ) : (
            <h5 className="text-sm w-full">{subTitle || `소제목${id}`}</h5>
          )}
          {isEdit && (
            <>
              <EditOutlined
                className="cursor-pointer"
                onClick={() => setIsListDescEdit((prev) => !prev)}
              />
              <Checkbox
                onChange={handleIsLink}
                checked={isLink}
                className="w-56"
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
      {isEdit ? (
        <Input placeholder="내용" value={desc} onChange={handleDesc} />
      ) : (
        <>
          {isLink ? (
            <a target="_blank" href={desc}>
              {desc}
            </a>
          ) : (
            <p>{desc}</p>
          )}
        </>
      )}
    </div>
  );
}
