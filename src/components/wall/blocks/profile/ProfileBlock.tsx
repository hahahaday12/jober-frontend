import { Input, Typography } from 'antd';
import { ProfileImage } from './ProfileImage';
import { useWallStore } from '@/store';
import { produce } from 'immer';
import { BackgroundImage, BlockContainer } from 'components/index';

export const ProfileBlock = () => {
  const { wall, setWall, isEdit } = useWallStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWall(
      produce(wall, (draft) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (draft as any)[name] = value;
      }),
    );
  };

  return (
    <BlockContainer blockName="profileBlock">
      <div className="h-[483px]">
        <BackgroundImage isEdit={isEdit} />
        <div className="flex gap-[24px] px-[24px] py-[26px] items-center ">
          <ProfileImage />
          <div className="flex flex-col flex-1">
            {isEdit ? (
              <>
                <Input
                  onChange={handleChange}
                  name="pageTitle"
                  value={wall.pageTitle}
                  placeholder="이름"
                  className="h-[58px] text-2xl db-24 rounded-br-none rounded-bl-none"
                />
                <Input
                  onChange={handleChange}
                  name="pageDescription"
                  value={wall.pageDescription}
                  placeholder="소개란"
                  className="h-[58px] dm-16 text-gray88 rounded-tr-none rounded-tl-none"
                />
              </>
            ) : (
              <>
                <Typography className="h-[58px] px-[12px] db-24  flex items-center">
                  {wall.pageTitle || '페이지명'}
                </Typography>
                <Typography className="h-[58px] px-[12px] dm-16  rounded-tr-none rounded-tl-none flex items-center text-gray88">
                  {wall.pageDescription || '페이지설명'}
                </Typography>
              </>
            )}
          </div>
        </div>
      </div>
    </BlockContainer>
  );
};
