import SpaceNavbar from './SpaceNavbar';
import SpaceContact from './SpaceContact';
import { useLocation } from 'react-router-dom';

export type Space = {
  addSpaceId: number;
  spaceType: 'personal' | 'organization';
  spaceTitle: string;
};

export default function SpacePage() {
  const { state } = useLocation();
  const space: Space[] = state;

  return (
    <>
      <SpaceNavbar spaceTitle={space[0].spaceTitle} />
      <SpaceContact space={space} />
    </>
  );
}
