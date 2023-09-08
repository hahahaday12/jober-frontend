import { Input, Typography } from 'antd';
import ProfileImage from './ProfileImage';
import { useWallStore } from '@/store';
import { produce } from 'immer';
import {BackgroundImage, BlockContainer} from  'components/index'

export const ProfileBlock = () => {
  const { wall, setWall, isEdit } = useWallStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWall(
      produce(wall, (draft) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (draft as any)[name] = value;
        // draft[name as keyof Wall] = value; 안되는 이유 질문
      }),
    );
  };

  return (
    <BlockContainer blockName="profileBlock">
      <div className="h-[483px]">
        <BackgroundImage isEdit={isEdit} />
        <div className="flex px-4 py-6 items-center gap-2">
          <ProfileImage isEdit={isEdit} />
          <div className="flex flex-col flex-1">
            {isEdit ? (
              <>
                <Input
                  onChange={handleChange}
                  name="pageTitle"
                  value={wall.pageTitle}
                  placeholder="이름"
                  className="h-[58px] text-2xl font-bold rounded-br-none rounded-bl-none placeholder:text-black"
                />
                <Input
                  onChange={handleChange}
                  name="pageDescription"
                  value={wall.pageDescription}
                  placeholder="소개란"
                  className="h-[58px] rounded-tr-none rounded-tl-none"
                />
              </>
            ) : (
              <>
                <Typography className="h-[58px] text-2xl font-bold rounded-br-none rounded-bl-none placeholder:text-black">
                  {wall.pageTitle}
                </Typography>
                <Typography className="h-[58px] rounded-tr-none rounded-tl-none">
                  {wall.pageDescription}
                </Typography>
              </>
            )}
          </div>
        </div>
      </div>
    </BlockContainer>
  );
}
