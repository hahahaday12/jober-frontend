import HomeProfile from './HomeProfile';
import HomeSpace from './HomeSpace';
import HomeRecentDocument from './HomeRecentDocument';
import useMemberInfo from '@/hooks/useMemberInfo';

export const Home = () => {
  const { memberInfo } = useMemberInfo();

  return (
    <div className="px-[24px] py-[22px] break-keep">
      <HomeProfile member={memberInfo?.member} />
      <HomeSpace memberName={memberInfo?.member.memberName} />
      <HomeRecentDocument />
    </div>
  );
};
