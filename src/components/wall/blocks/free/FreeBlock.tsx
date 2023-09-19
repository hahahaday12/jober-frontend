import { Input } from 'antd';
import { produce } from 'immer';
import { useState } from 'react';
import { BlockContainer } from 'components/index';
import { useWallStore } from '@/store';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/languages/ko.js';
import { BlockType, SubDataClassType } from '@/types/wall';
import { Icon } from '@/components/common';
import editThickIcon from '@/assets/icons/edit-thick.svg';

type FreeBlockProps = {
  blockUUID?: string;
  blockType?: BlockType;
  subData?: SubDataClassType;
};

export const FreeBlock = ({ blockUUID }: FreeBlockProps) => {
  const { isEdit, wall, setWall } = useWallStore();
  const [isFreeTitleEdit, setIsFreeTitleEdit] = useState(false);

  const targetFreeBlockIndex = wall.blocks.findIndex(
    (block) => block.blockUUID === blockUUID,
  );
  const targetFreeBlock = wall.blocks[targetFreeBlockIndex];

  const handleFreeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        (
          draft.blocks[targetFreeBlockIndex].subData as SubDataClassType
        ).freeTitle = e.target.value;
      }),
    );
  };
  const handleEditorChange = (content: string) => {
    setWall(
      produce(wall, (draft) => {
        (
          draft.blocks[targetFreeBlockIndex].subData as SubDataClassType
        ).freeDescription = content;
      }),
    );
  };

  return (
    <BlockContainer blockName="freeBlock" blockUUID={blockUUID}>
      <div className="px-[28px] py-[26px] flex flex-col">
        <div className="flex items-center gap-[6px] db-20 mb-[16px]">
          {isFreeTitleEdit ? (
            <Input
              placeholder="자유블록 제목을 입력해주세요."
              value={(targetFreeBlock.subData as SubDataClassType).freeTitle}
              onChange={handleFreeTitle}
              className="w-1/3 px-1 py-0 "
            />
          ) : (
            <>
              {(targetFreeBlock?.subData as SubDataClassType).freeTitle ||
                '자유블록 제목을 입력해주세요.'}
            </>
          )}
          {isEdit && (
            <Icon
              src={editThickIcon}
              onClick={() => setIsFreeTitleEdit((prev) => !prev)}
              className="hover"
            />
          )}
        </div>

        <div className="flex text-lg items-center gap-2 text-gray-600">
          {isEdit ? (
            <FroalaEditorComponent
              tag="textarea"
              config={{
                heightMin: 200,
                placeholderText: '자유블록 내용을 입력해주세요',
                language: 'ko',
                quickInsertEnabled: false,
                imageUpload: false,
                fileUpload: false,
                imagePaste: false,
              }}
              model={
                (targetFreeBlock.subData as SubDataClassType).freeDescription
              }
              onModelChange={handleEditorChange}
            />
          ) : (
            <FroalaEditorView
              model={
                (targetFreeBlock.subData as SubDataClassType).freeDescription
              }
            />
          )}
        </div>
      </div>
    </BlockContainer>
  );
};
