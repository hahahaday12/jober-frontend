import SpaceNavbar from './SpaceNavbar';
import SpaceContact from './SpaceContact';
import useMemberInfo from '@/hooks/useMemberInfo';

export default function SpacePage() {
  const { memberInfo } = useMemberInfo();
  return (
    <>
      <SpaceNavbar memberName={memberInfo?.member.memberName} />
      <SpaceContact />
    </>
  );
}
