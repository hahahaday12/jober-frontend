import { Button } from 'antd';
import WallHeaderEditButtons from './WallHeaderSavigButtons';
import { useWallStore } from '@/store';

type MobileFixedFooterProps = {
  tourMobilePreviewRef?: React.MutableRefObject<null>;
};

export default function MobileFixedFooter({
  tourMobilePreviewRef,
}: MobileFixedFooterProps) {
  const { toggleEdit, getWall } = useWallStore();
  const handleCancelSave = () => {
    getWall();
    toggleEdit();
  };

  return (
    <footer className="sm:hidden fixed bottom-0 h-[55px] ring-line ring-[2px] bg-white left-0 w-full flex items-center justify-between px-[28px]">
      <Button danger onClick={handleCancelSave}>
        취소
      </Button>
      <WallHeaderEditButtons footer tourPreviewRef={tourMobilePreviewRef} />
    </footer>
  );
}
