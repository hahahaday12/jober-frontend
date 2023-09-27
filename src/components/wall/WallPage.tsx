import { useRef, useState } from 'react';
import { ReactSortable, Sortable } from 'react-sortablejs';
import { produce } from 'immer';
import {
  WallHeader,
  WallInfoBlock,
  ModalOpen,
  AddBlockModal,
  Customization,
} from 'components/index';
import {
  FileBlock,
  SnsBlock,
  FreeBlock,
  ListBlock,
  TemplateBlock,
} from 'components/wall/blocks/index';
import { AddBlockButton } from './wallLayout/addBlock/AddBlockButton';
import useFetchWallData from '@/hooks/useFetchWallData';
import { Tour, type TourProps } from 'antd';
import previewTour from '@/assets/tour/preview.gif';
import styleTour from '@/assets/tour/style.gif';
import { useWindowWidth } from '@/hooks/useWindowWidth';

export const WallPage = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 640;
  const tourWallInfoRef = useRef(null);
  const tourTemplateAddButtonRef = useRef(null);
  const tourAddBlockButtonRef = useRef(null);
  const tourStyleSettingRef = useRef(null);
  const tourPreviewRef = useRef(null);
  const tourMobilePreviewRef = useRef(null);
  const [addTemplateModalOpen, setAddTemplateModalOpen] = useState(false);

  const BlockMapper = {
    listBlock: <ListBlock />,
    fileBlock: <FileBlock />,
    snsBlock: <SnsBlock />,
    templateBlock: (
      <TemplateBlock
        templateAddButtonRef={tourTemplateAddButtonRef}
        setAddTemplateModalOpen={setAddTemplateModalOpen}
      />
    ),
    freeBlock: <FreeBlock />,
  };

  const {
    contextHolder,
    isEdit,
    wall,
    loading,
    error,
    sortableBlocks,
    setWall,
    setSortableBlocks,
  } = useFetchWallData(BlockMapper);

  const [tourOpen, setTourOpen] = useState(!localStorage.getItem('hasVisited'));

  const steps: TourProps['steps'] = [
    {
      title: (
        <>
          <p>페이지의 기본 정보를 설정합니다.</p>
          <p>여러분과 페이지를 설명해주세요</p>
        </>
      ),
      target: () => tourWallInfoRef.current,
      // onNext: () => setHideHeaderWhileTour(true),
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
      title: <>페이지 스타일을 설정해 본인의 개성을 쉽게 표현해보세요!</>,
      target: () => tourStyleSettingRef.current,
    },
    {
      // TODO : 이미지 변경
      cover: <img src={previewTour} alt="preview gif" />,
      title: <>만든페이지를 미리 볼 수 있어요!</>,
      target: () =>
        isMobile ? tourMobilePreviewRef.current : tourPreviewRef.current,
    },
  ];

  const handleTourClose = () => {
    setTourOpen(false);
    localStorage.setItem('hasVisited', '네');
  };

  const [isAddBlockModalOpen, setIsAddBlockModalOpen] = useState(false);

  const handleSortBlocks = (event: Sortable.SortableEvent) => {
    const selectedBlock = sortableBlocks.splice(event.oldIndex as number, 1)[0];
    sortableBlocks.splice(event.newIndex as number, 0, selectedBlock);
    const componentToObj = sortableBlocks.map((component) => ({
      blockUUID: component.id,
      blockType: component.block.props.blockType,
      subData: component.block.props.subData,
    }));
    setWall(
      produce(wall, (draft) => {
        draft.blocks = componentToObj;
      }),
    );
  };

  // TODO : 에러핸들링
  if (error) {
    return <div>ERROR, {error.message}</div>;
  }

  const wallBgUrl = wall?.styleSetting?.backgroundSetting?.styleImgURL;
  const wallBgColor = wall?.styleSetting?.backgroundSetting?.solidColor;
  const wallBgGradation = wall?.styleSetting?.backgroundSetting?.gradation;

  return (
    <div
      className={`
      ${
        wallBgGradation &&
        'bg-gradient-to-t from-white to-[rgba(237, 248, 252, 0.20)]'
      }
      min-h-screen flex flex-col items-center bg-no-repeat bg-center bg-cover
      `}
      style={{
        backgroundImage: wallBgUrl ? `url(${wallBgUrl})` : '',
        backgroundColor: wallBgColor,
      }}
    >
      {contextHolder}
      <WallHeader
        tourPreviewRef={tourPreviewRef}
        tourMobilePreviewRef={tourMobilePreviewRef}
      />

      {/* TODO : 로딩 */}
      {loading ? (
        <div className="py-[106px]">loading...</div>
      ) : (
        <main
          className={`
          ${isEdit ? 'pb-[79px]' : 'pb-[24px]'}
          pt-[132px] sm:pt-[106px] sm:pb-[24px] flex-1 flex flex-col gap-[12px] sm:gap-[24px] px-[12px] w-full sm:px-0 max-w-[866px]
          `}
        >
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
              <Tour open={tourOpen} onClose={handleTourClose} steps={steps} />
              <ModalOpen />
              <AddBlockButton
                addBlockButtonRef={tourAddBlockButtonRef}
                setIsAddBlockModalOpen={setIsAddBlockModalOpen}
              />
              <AddBlockModal
                isAddBlockModalOpen={isAddBlockModalOpen}
                setIsAddBlockModalOpen={setIsAddBlockModalOpen}
              />
              <Customization styleSettingRef={tourStyleSettingRef} />
            </>
          )}
        </main>
      )}
    </div>
  );
};
