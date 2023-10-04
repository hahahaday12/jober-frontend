import SpaceNavbar from './SpaceNavbar';
import SpaceContact from './SpaceContact';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export type Space = {
  addSpaceId: number;
  spaceType: 'personal' | 'organization';
  spaceTitle: string;
};

export default function SpacePage() {
  const { state: space } = useLocation();
  console.log(space);

  return (
    <>
      <SpaceNavbar spaceTitle={space.spaceTitle} />
      <SpaceContact space={space} />
    </>
  );
}
