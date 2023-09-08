import { Outlet } from 'react-router-dom';
import Header from '@/pages/wall/WallHeader';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
