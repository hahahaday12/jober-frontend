import { useState } from 'react';
import { Input } from 'antd';
import { produce } from 'immer';
import { useWallStore } from '@/store';
import { BlockContainer, FileUpload } from 'components/index';
import { SubDataClassType } from '@/types/wall';
import { Icon } from '@/components/common';
import editThickIcon from '@/assets/icons/edit-thick.svg';
import editIcon from '@/assets/icons/edit.svg';

interface FileBlockProps {
  blockUUID?: string;
}

export const FileBlock = ({ blockUUID }: FileBlockProps) => {
  const { isEdit, wall, setWall } = useWallStore();
  const [isFileTitleEdit, setIsFileTitleEdit] = useState(false);
  const [isFileSubtitleEdit, setIsFileSubtitleEdit] = useState(false);

  const tragetFileBlockIndex = wall.blocks.findIndex(
    (block) => block.blockUUID === blockUUID,
  );
  const targetFileBlock = wall.blocks[tragetFileBlockIndex];

  const handleFileTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        (
          draft.blocks[tragetFileBlockIndex].subData as SubDataClassType
        ).fileTitle = e.target.value;
      }),
    );
  };
  const handleFileSubtitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        (
          draft.blocks[tragetFileBlockIndex].subData as SubDataClassType
        ).fileSubtitle = e.target.value;
      }),
    );
  };

  return (
    <BlockContainer blockName="fileBlock" blockUUID={blockUUID}>
      <div className="p-7 flex flex-col gap-5">
        <div className="flex text-xl font-bold items-center gap-2 text-gray-600">
          {isFileTitleEdit ? (
            <Input
              className="w-1/3 px-1 py-0 "
              name="fileTitle"
              value={(targetFileBlock.subData as SubDataClassType).fileTitle}
              onChange={handleFileTitle}
            />
          ) : (
            <div>
              {(targetFileBlock.subData as SubDataClassType).fileTitle ||
                '파일블록제목'}
            </div>
          )}
          {isEdit && (
            <Icon
              src={editThickIcon}
              className="hover"
              onClick={() => setIsFileTitleEdit((prev) => !prev)}
            />
          )}
        </div>
        <div className="flex text-lg items-center gap-2 text-gray-600">
          {isFileSubtitleEdit ? (
            <Input
              className="w-1/3 px-1 py-0 "
              name="fileSubtitle"
              value={(targetFileBlock.subData as SubDataClassType).fileSubtitle}
              onChange={handleFileSubtitle}
            />
          ) : (
            <div>
              {(targetFileBlock.subData as SubDataClassType).fileSubtitle ||
                '파일블록소제목'}
            </div>
          )}
          {isEdit && (
            <Icon
              src={editIcon}
              className="hover"
              onClick={() => setIsFileSubtitleEdit((prev) => !prev)}
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
