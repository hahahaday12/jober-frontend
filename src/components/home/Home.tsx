import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
// import setting from '@/assets/icons/home/setting-2.png';
// import ellipse from '@/assets/icons/home/Ellipse 91.svg';
// import ellipse2 from '@/assets/icons/home/Ellipse 29.svg';

import HomeProfile from './HomeProfile';
import HomeSpace from './HomeSpace';
import HomeRecentDocument from './HomeRecentDocument';
// import gallery from '@/assets/icons/home/gallery.svg';

export const Home = () => {
  return (
    <div className="px-[24px] py-[22px] break-keep">
      <HomeProfile />
      <HomeSpace />
      <HomeRecentDocument />
    </div>
  );
};
