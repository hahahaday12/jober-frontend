import { useParams } from 'react-router-dom';
//import WallHeader from '@/pages/wall/WallHeader';
import { Button, message } from 'antd';
//import ListBlock from '@/pages/wall/blocks/list/ListBlock';
import { useEffect, useState } from 'react';
import { ReactSortable, Sortable } from 'react-sortablejs';
// import SnsBlock from '@/pages/wall/blocks/sns/SnsBlock';
// import ProfileBlock from '@/pages/wall/blocks/profile/ProfileBlock';
// import TemplateBlock from '@/pages/wall/blocks/template/TemplateBlock';
import { useWallStore } from '@/store';
//import FileBlock from '@/pages/wall/blocks/file/FileBlock';
//import FreeBlock from '@/pages/wall/blocks/free/FreeBlock';
import { produce } from 'immer';
//import AddBlockModal from '@/pages/wall/AddBlockModal';
import { BlockType } from '@/types/blocks';
import { WallType } from '@/types/wall';
import {WallHeader,ListBlock,SnsBlock,ProfileBlock,
  TemplateBlock,FileBlock,FreeBlock,AddBlockModal } from 'components/index'


const BlockMapper: { [key: string]: JSX.Element } = {
  listBlock: <ListBlock />,
  fileBlock: <FileBlock />,
  snsBlock: <SnsBlock />,
  templateBlock: <TemplateBlock />,
  freeBlock: <FreeBlock />,
};

interface ItemType {
  id: BlockType;
  block: React.ReactNode;
}
export const WallPage = () => {
  // const category: CategoryType = 'career';

  const { wallId } = useParams();

  const [messageApi, contextHolder] = message.useMessage();

  const { wall, setWall, isEdit } = useWallStore();

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
      setSortableBlocks(
        wall.order.map((block) => ({
          id: block,
          block: BlockMapper[block],
        })),
      );
    }
  }, [wall]);

  const handleSortBlocks = (event: Sortable.SortableEvent) => {
    const item = sortableBlocks.splice(event.oldIndex as number, 1)[0];
    sortableBlocks.splice(event.newIndex as number, 0, item);
    setWall(
      produce(wall, (draft) => {
        draft.order = sortableBlocks.map((block) => block.id);
      }),
    );
  };

  const [isAddBlockModalOpen, setIsAddBlockModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col ">
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
          </main>
        </>
      )}
    </div>
  );
}
