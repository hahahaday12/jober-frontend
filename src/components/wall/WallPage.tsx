import { useRef, useState } from 'react';
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
import { CustomizationLayout } from 'components/index';
import { AddBlockButton } from './wallLayout/addBlock/AddBlockButton';
import useFetchWallData from '@/hooks/useFetchWallData';
import { Tour, type TourProps } from 'antd';
import previewTour from '@/assets/tour/preview.gif';
import styleTour from '@/assets/tour/style.gif';

export const WallPage = () => {
  const tourWallInfoRef = useRef(null);
  const tourTemplateAddButtonRef = useRef(null);
  const tourAddBlockButtonRef = useRef(null);
  const tourStyleSettingRef = useRef(null);
  const tourPreviewRef = useRef(null);

  const BlockMapper: { [key: string]: JSX.Element } = {
    listBlock: <ListBlock />,
    fileBlock: <FileBlock />,
    snsBlock: <SnsBlock />,
    templateBlock: (
      <TemplateBlock templateAddButtonRef={tourTemplateAddButtonRef} />
    ),
    freeBlock: <FreeBlock />,
  };

  const [tourOpen, setTourOpen] = useState(
    localStorage.getItem('hasVisited') ? false : true,
  );

  const steps: TourProps['steps'] = [
    {
      title: (
        <>
          <p>페이지의 기본 정보를 설정합니다.</p>
          <p>여러분과 페이지를 설명해주세요</p>
        </>
      ),
      target: () => tourWallInfoRef.current,
    },
    {
      title: <>원하는 템플릿을 넣고 빠르게 사용할 수 있어요!</>,
      target: () => tourTemplateAddButtonRef.current,
    },
    {
      title: <>손쉽게 여러종류의 블록을 추가해보세요!</>,
      target: () => tourAddBlockButtonRef.current,
    },
    {
      // TODO : 이미지 변경
      cover: <img src={styleTour} alt="style gif" />,
      title: <>페이지 스타일을 설정해 본인의 개선을 쉽게 표현해보세요!</>,
      target: () => tourStyleSettingRef.current,
    },
    {
      // TODO : 이미지 변경
      cover: <img src={previewTour} alt="preview gif" />,
      title: <>만든페이지를 미리 볼 수 있어요!</>,
      target: () => tourPreviewRef.current,
    },
  ];

  const handleTourClose = () => {
    setTourOpen(false);
    localStorage.setItem('hasVisited', '네');
  };

  const [isAddBlockModalOpen, setIsAddBlockModalOpen] = useState(false);

  const {
    contextHolder,
    isEdit,
    wall,
    loading,
    error,
    setWall,
    sortableBlocks,
    setSortableBlocks,
  } = useFetchWallData(BlockMapper);

  const handleSortBlocks = (event: Sortable.SortableEvent) => {
    const selectedBlock = sortableBlocks.splice(event.oldIndex as number, 1)[0];
    sortableBlocks.splice(event.newIndex as number, 0, selectedBlock);
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
      className="min-h-screen flex flex-col sm:items-center"
      style={{
        backgroundColor: wall?.styleSetting?.backgroundSetting?.solidColor,
      }}
    >
      {contextHolder}
      <WallHeader previewRef={tourPreviewRef} />

      {/* TODO : 로딩 */}
      {loading ? (
        <div className="py-[106px]">loading...</div>
      ) : (
        <main className="sm:pt-[106px] pt-[132px] pb-[24px] flex-1 flex flex-col gap-[12px] sm:gap-[24px] px-[24px] sm:px-0 max-w-[866px]">
          <WallInfoBlock wallInfoRef={tourWallInfoRef} />
          <ReactSortable
            list={sortableBlocks}
            setList={setSortableBlocks}
            handle=".handle"
            className="flex gap-[12px] sm:gap-[24px] flex-col"
            animation={400}
            forceFallback // 스크롤가능하게
            onEnd={handleSortBlocks}
          >
            {sortableBlocks?.map((block) => (
              <div key={block.id}>{block.block}</div>
            ))}
          </ReactSortable>

          {isEdit && (
            <>
              <AddBlockButton
                addBlockButtonRef={tourAddBlockButtonRef}
                setIsAddBlockModalOpen={setIsAddBlockModalOpen}
              />
              <CustomizationLayout styleSettingRef={tourStyleSettingRef} />
            </>
          )}

          <AddBlockModal
            isAddBlockModalOpen={isAddBlockModalOpen}
            setIsAddBlockModalOpen={setIsAddBlockModalOpen}
          />
          {isEdit && (
            <Tour open={tourOpen} onClose={handleTourClose} steps={steps} />
          )}
          <ModalOpen />
        </main>
      )}
    </div>
  );
};
