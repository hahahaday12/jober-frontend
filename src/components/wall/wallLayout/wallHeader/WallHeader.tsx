import { useWallStore } from '@/store';
import { WallHeaderActions } from 'components/index';
import WallHeaderUser from './WallHeaderUser';
import closeIcon from '@/assets/icons/close.svg';
import WallHeaderInput from './WallHeaderInput';
import { Icon } from '@/components/common';
import WallHeaderEditButtons from './WallHeaderSavigButtons';

type WallHeaderProps = {
  previewRef: React.MutableRefObject<null>;
};

export const WallHeader = ({ previewRef }: WallHeaderProps) => {
  const { isEdit, toggleEdit, isPreview } = useWallStore();

  const handleCancelSave = () => {
    location.reload();
    toggleEdit();
  };

  return (
    <header className="bg-white h-[72px] z-10 flex items-center fixed w-full ring-line ring-[2px]">
      <div className="w-[866px] mx-auto">
        {isPreview ? (
          <div className="flex gap-[73px] items-center">
            <WallHeaderUser />
            <WallHeaderInput />
            <WallHeaderEditButtons />
            <Icon
              src={closeIcon}
              className="absolute top-[21px] right-[30px] hover"
              onClick={handleCancelSave}
            />
          </div>
        ) : (
          <>
            {!isEdit && (
              <div className="flex items-center justify-between">
                <WallHeaderUser />
                <WallHeaderActions />
                <Icon
                  src={closeIcon}
                  className="absolute top-[21px] right-[30px] hover"
                />
              </div>
            )}

            {isEdit && (
              <div className="flex gap-[73px] items-center">
                <WallHeaderUser />
                <WallHeaderInput />
                <WallHeaderEditButtons previewRef={previewRef} />
                <Icon
                  src={closeIcon}
                  className="absolute top-[21px] right-[30px] hover"
                  onClick={handleCancelSave}
                />
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};
