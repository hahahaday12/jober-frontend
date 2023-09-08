import koKR from 'antd/locale/ko_KR';
import { ConfigProvider } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home/Home';
import WallPage from '@/pages/wall/WallPage';
import Category from '@/pages/category/Category';
import UIUX from './UIUX';

export default function App() {
  const theme = {
    token: {
      colorPrimary: '#2493FB',
    },
  };
  return (
    <ConfigProvider theme={theme} locale={koKR}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/category" element={<Category />} />
        <Route path="wall/:wallId" element={<WallPage />} />
      </Routes>
    </ConfigProvider>
  );
}
