import { Button } from 'antd';
import WallHeaderEditButtons from './WallHeaderSavigButtons';
import { useWallStore } from '@/store';

export default function MobileFixedFooter() {
  const { toggleEdit } = useWallStore();
  const handleCancelSave = () => {
    location.reload();
    toggleEdit();
  };

  return (
    <footer className="sm:hidden fixed bottom-0 h-[55px] ring-line ring-[2px] bg-white left-0 w-full flex items-center justify-between px-[28px]">
      <Button danger onClick={handleCancelSave}>
        취소
      </Button>
      <WallHeaderEditButtons footer />
    </footer>
  );
}
