import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReactSortable, Sortable } from 'react-sortablejs';
import { produce } from 'immer';
import {
  WallHeader,
  WallInfoBlock,
  ModalOpen,
  AddBlockModal,
} from 'components/index';
import {
  FileBlock,
  SnsBlock,
  FreeBlock,
  ListBlock,
  TemplateBlock,
} from 'components/wall/blocks/index';
import React from 'react';
import { SubDatumType } from '@/types/wall';
import { CustomizationLayout } from 'components/index';
import { AddBlockButton } from './wallLayout/addBlock/AddBlockButton';
import useFetchWallData from '@/hooks/useFetchWallData';

const BlockMapper: { [key: string]: JSX.Element } = {
  listBlock: <ListBlock />,
  fileBlock: <FileBlock />,
  snsBlock: <SnsBlock />,
  // templateBlock: <TemplateBlock />,
  freeBlock: <FreeBlock />,
};

export const WallPage = () => {
  const { wallId } = useParams();

  const [isAddBlockModalOpen, setIsAddBlockModalOpen] = useState(false);

  const { contextHolder, isEdit, wall, loading, error, setWall } =
    useFetchWallData();

  const [sortableBlocks, setSortableBlocks] = useState<
    {
      id: string;
      block: JSX.Element;
      subData: SubDatumType[];
    }[]
  >([]);

  useEffect(() => {
    if (wall.blocks) {
      const objToComponent = wall.blocks.map((block) => {
        const { blockType, blockUUID, subData } = block;
        const component = BlockMapper[blockType];
        return React.cloneElement(component, {
          blockType,
          blockUUID,
          subData,
        });
      });
      setSortableBlocks(
        objToComponent.map((block) => ({
          block,
          id: block.props.blockUUID,
          subData: block.props.subData,
        })),
      );
    }
  }, [wall]);

  const handleSortBlocks = (event: Sortable.SortableEvent) => {
    const item = sortableBlocks.splice(event.oldIndex as number, 1)[0];
    sortableBlocks.splice(event.newIndex as number, 0, item);
    const compToObj = sortableBlocks.map((comp) => ({
      blockUUID: comp.id,
      blockType: comp.block.props.blockType,
      subData: comp.block.props.subData,
    }));
    setWall(
      produce(wall, (draft) => {
        draft.blocks = compToObj;
      }),
    );
  };

  // TODO : 에러핸들링
  if (error) {
    return <div>ERROR, {error.message}</div>;
  }

  return (
    <div
      className={`min-h-screen bg-gray flex flex-col`}
      style={{
        backgroundColor: wall?.styleSetting?.backgroundSetting?.solidColor,
      }}
    >
      {contextHolder}
      <WallHeader wallId={wallId} />

      {loading ? (
        <div className="py-[106px] ">loading...</div>
      ) : (
        <main className="py-[106px] flex-1 flex flex-col gap-[24px] w-[866px] mx-auto">
          <WallInfoBlock />
          <ReactSortable
            list={sortableBlocks}
            setList={setSortableBlocks}
            handle=".handle"
            className="flex gap-[24px] flex-col"
            animation={400}
            forceFallback
            onEnd={handleSortBlocks}
          >
            {sortableBlocks?.map((item) => (
              <div key={item.id}>{item.block}</div>
            ))}
          </ReactSortable>

          {isEdit && (
            <>
              <AddBlockButton setIsAddBlockModalOpen={setIsAddBlockModalOpen} />
              <CustomizationLayout />
            </>
          )}

          <AddBlockModal
            isAddBlockModalOpen={isAddBlockModalOpen}
            setIsAddBlockModalOpen={setIsAddBlockModalOpen}
          />

          <ModalOpen />
        </main>
      )}
    </div>
  );
};
