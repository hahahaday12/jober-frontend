import { useState } from 'react';
import { Input } from 'antd';
import { produce } from 'immer';
import { useWallStore } from '@/store';
import { BlockContainer, FileUpload } from 'components/index';
import { Icon } from '@/components/common';
import editThickIcon from '@/assets/icons/edit-thick.svg';
import editIcon from '@/assets/icons/edit.svg';
import { SubDatumType } from '@/types/wall';

export type FileBlockSubDataType = Pick<
  SubDatumType,
  'fileTitle' | 'fileDescription' | 'fileName' | 'file'
>;

type FileBlockProps = {
  blockUUID?: string;
};

export const FileBlock = ({ blockUUID }: FileBlockProps) => {
  const { isEdit, wall, setWall } = useWallStore();

  const [isFileTitleEdit, setIsFileTitleEdit] = useState(false);
  const [isFileDescriptionEdit, setIsFileDescriptionEdit] = useState(false);

  const tragetFileBlockIndex = wall.blocks.findIndex(
    (block) => block.blockUUID === blockUUID,
  );
  const targetFileBlock = wall.blocks[tragetFileBlockIndex];

  const handleTitleAndDescription = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setWall(
      produce(wall, (draft) => {
        draft.blocks[tragetFileBlockIndex].subData[0][
          name as keyof FileBlockSubDataType
        ] = value;
      }),
    );
  };

  if (tragetFileBlockIndex === -1) {
    return null;
  }
  return (
    <BlockContainer blockName="fileBlock" blockUUID={blockUUID}>
      <div className="p-block flex flex-col">
        <div className="db-18 sm:db-20 flex items-center gap-[6px] mb-[16px]">
          {isFileTitleEdit ? (
            <Input
              className="w-1/2 px-1 py-0 "
              name="fileTitle"
              value={targetFileBlock.subData[0].fileTitle}
              onChange={handleTitleAndDescription}
            />
          ) : (
            <>{targetFileBlock.subData[0].fileTitle || '파일블록 제목'}</>
          )}
          {isEdit && (
            <Icon
              src={editThickIcon}
              className="hover"
              onClick={() => setIsFileTitleEdit((prev) => !prev)}
            />
          )}
        </div>

        <div className="flex dm-16 items-center gap-[6px] mb-[10px]">
          {isFileDescriptionEdit ? (
            <Input
              className="w-1/2 px-1 py-0 "
              name="fileDescription"
              value={targetFileBlock.subData[0].fileDescription}
              onChange={handleTitleAndDescription}
            />
          ) : (
            <>
              {targetFileBlock.subData[0].fileDescription || '파일블록 부제목'}
            </>
          )}
          {isEdit && (
            <Icon
              src={editIcon}
              className="hover"
              onClick={() => setIsFileDescriptionEdit((prev) => !prev)}
            />
          )}
        </div>

        <FileUpload
          isEdit={isEdit}
          tragetFileBlockIndex={tragetFileBlockIndex}
          targetFileBlock={targetFileBlock}
        />
      </div>
    </BlockContainer>
  );
};
