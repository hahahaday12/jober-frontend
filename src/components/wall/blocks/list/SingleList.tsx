import { useWallStore } from '@/store';
import { SubDataClassType } from '@/types/wall';
import { Checkbox, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { produce } from 'immer';
import { useCallback, useState } from 'react';
import editIcon from '@/assets/icons/edit.svg';
import minusIcon from '@/assets/icons/minus.svg';
import { Icon } from '@/components/common';

interface ListProps {
  id: number;
  targetListBlockIndex: number;
  listUUID: string;
  isEdit: boolean;
  listSubtitle: string;
  listDescription: string;
  isLink: boolean;
}

export const SingleList = ({
  id,
  targetListBlockIndex,
  listUUID,
  listSubtitle,
  listDescription,
  isLink,
  isEdit,
}: ListProps) => {
  const { wall, setWall } = useWallStore();

  const [isListDescEdit, setIsListDescEdit] = useState(false);

  const handleSubtitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWall(
        produce(wall, (draft) => {
          if (targetListBlockIndex !== -1) {
            const targetListBlockSubData = draft.blocks[targetListBlockIndex]
              .subData as SubDataClassType;
            if (targetListBlockSubData && targetListBlockSubData.lists) {
              const listIndex = targetListBlockSubData.lists.findIndex(
                (list) => list.listUUID === listUUID,
              );
              if (listIndex !== -1) {
                targetListBlockSubData.lists[listIndex].listSubtitle =
                  e.target.value;
              }
            }
          }
        }),
      );
    },
    [listUUID, setWall, targetListBlockIndex, wall],
  );

  const handleIsLink = useCallback(
    (e: CheckboxChangeEvent) => {
      setWall(
        produce(wall, (draft) => {
          if (targetListBlockIndex !== -1) {
            const targetListBlockSubData = draft.blocks[targetListBlockIndex]
              .subData as SubDataClassType;
            if (targetListBlockSubData && targetListBlockSubData.lists) {
              const listIndex = targetListBlockSubData.lists.findIndex(
                (list) => list.listUUID === listUUID,
              );
              if (listIndex !== -1) {
                targetListBlockSubData.lists[listIndex].isLink =
                  e.target.checked;
              }
            }
          }
        }),
      );
    },
    [listUUID, setWall, targetListBlockIndex, wall],
  );

  const handleListDesc = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWall(
        produce(wall, (draft) => {
          if (targetListBlockIndex !== -1) {
            const targetListBlockSubData = draft.blocks[targetListBlockIndex]
              .subData as SubDataClassType;
            if (targetListBlockSubData && targetListBlockSubData.lists) {
              const listIndex = targetListBlockSubData.lists.findIndex(
                (list) => list.listUUID === listUUID,
              );
              if (listIndex !== -1) {
                targetListBlockSubData.lists[listIndex].listDescription =
                  e.target.value;
              }
            }
          }
        }),
      );
    },
    [listUUID, setWall, targetListBlockIndex, wall],
  );

  const handleDeleteList = useCallback(() => {
    setWall(
      produce(wall, (draft) => {
        if (targetListBlockIndex !== -1) {
          (
            draft.blocks[targetListBlockIndex].subData as SubDataClassType
          ).lists = (
            draft.blocks[targetListBlockIndex].subData as SubDataClassType
          ).lists?.filter((list) => list.listUUID !== listUUID);
        }
      }),
    );
  }, [listUUID, setWall, targetListBlockIndex, wall]);

  return (
    <div className={`space-y-2 ${isEdit ? 'text-gray88' : 'text-lightBlack'}`}>
      <div className="flex justify-between">
        <div className="flex items-center dm-16 gap-[6px]">
          {isListDescEdit ? (
            <Input
              value={listSubtitle}
              onChange={handleSubtitle}
              className="py-0 px-1"
            />
          ) : (
            <div className={`db-16 flex items-center gap-3`}>
              {listSubtitle || '입력'}
              {!isEdit && (
                <>
                  <span className="relative -top-[2.3px]">|</span>
                  {isLink ? (
                    <a href={listDescription} target="_blank">
                      {listDescription}
                    </a>
                  ) : (
                    <span className="dm-16">{listDescription}</span>
                  )}
                </>
              )}
            </div>
          )}
          {isEdit && (
            <Icon
              src={editIcon}
              onClick={() => setIsListDescEdit((prev) => !prev)}
            />
          )}
        </div>
        {isEdit && (
          <Icon
            src={minusIcon}
            onClick={handleDeleteList}
            className={`${id === 0 && 'hidden'} mr-[16px]`}
          />
        )}
      </div>
      {isEdit && (
        <>
          <Input
            placeholder="내용"
            value={listDescription}
            onChange={handleListDesc}
            className="h-[50px]"
          />
          <Checkbox onChange={handleIsLink} checked={isLink} className="dm-16">
            링크
          </Checkbox>
        </>
      )}
    </div>
  );
};
