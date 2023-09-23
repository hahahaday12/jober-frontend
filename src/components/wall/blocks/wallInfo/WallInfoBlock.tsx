import { Input } from 'antd';
import { ProfileImage } from './ProfileImage';
import { useWallStore } from '@/store';
import { produce } from 'immer';
import { BackgroundImage, BlockContainer } from '..';
import { wallInfoBlockType } from '@/types/wall';
import { Icon } from '@/components/common';
import heartOutlinedIcon from '@/assets/icons/heart-outlined.svg';
import heartFilledIcon from '@/assets/icons/heart-filled.svg';

type WallInfoBlockProps = {
  wallInfoRef: React.MutableRefObject<null>;
};

export const WallInfoBlock = ({ wallInfoRef }: WallInfoBlockProps) => {
  const { wall, setWall, isEdit } = useWallStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWall(
      produce(wall, (draft) => {
        draft.wallInfoBlock[name as keyof wallInfoBlockType] = value;
      }),
    );
  };

  return (
    <BlockContainer blockName="wallInfoBlock">
      <div ref={wallInfoRef}>
        <BackgroundImage />
        <div className="relative flex gap-[24px] px-[24px] py-[26px] items-center">
          {/* TODO : 구독 기능 */}
          {!isEdit && (
            <div className="absolute top-[26px] right-[26px]">
              <Icon src={heartFilledIcon} className="hover" />
              <Icon src={heartOutlinedIcon} className="hover" />
            </div>
          )}

          <ProfileImage />
          <div className="flex flex-col flex-1">
            {isEdit ? (
              <>
                <Input
                  onChange={handleChange}
                  name="wallInfoTitle"
                  value={wall.wallInfoBlock?.wallInfoTitle}
                  placeholder="페이지명"
                  className="h-[58px] db-24 rounded-br-none rounded-bl-none"
                />
                <Input
                  onChange={handleChange}
                  name="wallInfoDescription"
                  value={wall.wallInfoBlock?.wallInfoDescription}
                  placeholder="페이지설명"
                  className="h-[58px] dm-16 rounded-tr-none rounded-tl-none"
                />
              </>
            ) : (
              <div className="space-y-[10px]">
                <p className="db-24 py-[5px] px-[16px]">
                  {wall.wallInfoBlock?.wallInfoTitle || '페이지명'}
                </p>
                <p className="dm-16 py-[3px] px-[16px]">
                  {wall.wallInfoBlock?.wallInfoDescription || '페이지설명'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </BlockContainer>
  );
};
