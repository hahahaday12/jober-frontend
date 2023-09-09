import { useParams } from 'react-router-dom';
import { Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { ReactSortable, Sortable } from 'react-sortablejs';
import { useWallStore } from '@/store';
import { produce } from 'immer';
import { BlockType, WallType } from '@/types/wall';
import {
  WallHeader,
  ProfileBlock,
  AddBlockModal,
  ModalOpen,
} from 'components/index';
import {
  FileBlock,
  SnsBlock,
  TemplateBlock,
  FreeBlock,
  ListBlock,
} from 'components/wall/blocks/index';
import React from 'react';

interface ItemType {
  id: string;
  block: React.ReactNode;
}
const BlockMapper: { [key: string]: JSX.Element } = {
  listBlock: <ListBlock />,
  fileBlock: <FileBlock />,
  snsBlock: <SnsBlock />,
  templatesBlock: <TemplateBlock />,
  freeBlock: <FreeBlock />,
};

export const WallPage = () => {
  // const category: CategoryType = 'career';

  const { wallId } = useParams();

  const [messageApi, contextHolder] = message.useMessage();

  const { wall, setWall, isEdit } = useWallStore();

  const [isAddBlockModalOpen, setIsAddBlockModalOpen] = useState(false);

  // wall data fetching
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/wall');
        if (response.ok) {
          const wallData = (await response.json()) as WallType;
          setWall(wallData);
        }
      } catch (error) {
        console.log(error);
        messageApi.error({ content: 'data fetching error' });
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [messageApi, setWall]);

  const [sortableBlocks, setSortableBlocks] = useState<ItemType[]>([]);

  useEffect(() => {
    if (wall.order) {
      const objToComponent = wall.order.map((block) => {
        const { blockType, id } = block;
        const component = BlockMapper[block.blockType];
        return React.cloneElement(component, {
          id,
          blockType,
        });
      });
      setSortableBlocks(
        objToComponent.map((block) => ({
          block,
          id: `${block.props.blockType}-${block.props.id}`,
        })),
      );
    }
  }, [wall]);

  const handleSortBlocks = (event: Sortable.SortableEvent) => {
    const item = sortableBlocks.splice(event.oldIndex as number, 1)[0];
    sortableBlocks.splice(event.newIndex as number, 0, item);
    setWall(
      produce(wall, (draft) => {
        draft.order = sortableBlocks.map((block) => ({
          blockType: block.id.split('-')[0] as BlockType,
          id: Number(block.id.split('-')[1]),
        }));
      }),
    );
  };

  return (
    <div className="min-h-screen bg-line flex flex-col ">
      {contextHolder}
      <WallHeader wallId={wallId} />

      {loading ? (
        <div className="py-[120px] ">loading...</div>
      ) : (
        <>
          <main className="py-[120px] flex-1 flex flex-col gap-7 w-[866px] mx-auto">
            <ProfileBlock />
            <ReactSortable
              list={sortableBlocks}
              setList={setSortableBlocks}
              handle=".handle"
              className="flex gap-4 flex-col"
              animation={400}
              scroll
              forceFallback
              onEnd={handleSortBlocks}
            >
              {sortableBlocks?.map((item) => (
                <div key={item.id}>{item.block}</div>
              ))}
            </ReactSortable>
            <Button
              onClick={() => setIsAddBlockModalOpen(true)}
              className={`${!isEdit && 'hidden'}`}
            >
              블록 추가
            </Button>
            <AddBlockModal
              isAddBlockModalOpen={isAddBlockModalOpen}
              setIsAddBlockModalOpen={setIsAddBlockModalOpen}
            />
            <ModalOpen />
          </main>
        </>
      )}
    </div>
  );
};
