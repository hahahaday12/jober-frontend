import HomeProfile from './HomeProfile';
import HomeSpace from './HomeSpace';
import HomeRecentDocument from './HomeRecentDocument';
import useMemberInfo from '@/hooks/useMemberInfo';

export const Home = () => {
  const { memberInfo } = useMemberInfo();
  console.log(memberInfo);
  return (
    <div className="px-[24px] py-[22px] break-keep">
      <HomeProfile member={memberInfo?.member} />
      <HomeSpace space={memberInfo?.spaceWall} />
      <HomeRecentDocument />
    </div>
  );
};
