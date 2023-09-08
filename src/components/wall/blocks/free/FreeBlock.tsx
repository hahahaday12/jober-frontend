import { Input } from 'antd';
import { produce } from 'immer';
import { useState } from 'react';
import { BlockContainer } from 'components/index';
import { useWallStore } from '@/store';
import { FreeBlockType } from '@/types/blocks';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/languages/ko.js';

export const FreeBlock = () => {
  const { isEdit, wall, setWall } = useWallStore();

  const [, setEditorContent] = useState<string | undefined>(
    wall.fileBlock?.fileSubtitle || '',
  );

  const handleFreeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWall(
      produce(wall, (draft) => {
        (draft.freeBlock as FreeBlockType).freeTitle = e.target.value;
      }),
    );
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content); // Update the local state
    setWall(
      produce(wall, (draft) => {
        // Update the wall state with the new content
        (draft.freeBlock as FreeBlockType).freeDescription = content;
      }),
    );
  };

  return (
    <BlockContainer blockName="freeBlock">
      <div className="p-7 flex flex-col gap-5">
        <div className="flex text-xl font-bold items-center gap-2 text-gray-600">
          {isEdit ? (
            <Input
              name="fileTitle"
              value={wall.freeBlock?.freeTitle}
              onChange={handleFreeTitle}
              placeholder="자유블록제목"
            />
          ) : (
            <h4>{wall.freeBlock?.freeTitle || '자유블록제목'}</h4>
          )}
        </div>
        <div className="flex text-lg items-center gap-2 text-gray-600">
          {isEdit ? (
            <>
              {/* <Input
                name="fileSubtitle"
                value={wall.fileBlock?.fileSubtitle}
                onChange={handleChange}
                placeholder="자유블록내용"
              /> */}
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
                model={wall.freeBlock?.freeDescription}
                onModelChange={handleEditorChange}
              />
            </>
          ) : (
            <FroalaEditorView model={wall.freeBlock?.freeDescription} />
          )}
        </div>
      </div>
    </BlockContainer>
  );
}
