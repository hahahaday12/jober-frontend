import { ConfigProvider } from 'antd';
import { Route, Routes } from 'react-router-dom';
import UIUX from '../UIUX';
import { Category, HomePage, WallAllPage, Space } from 'pages/index';

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2493FB',
        },
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/space/personal" element={<Space />} />
        <Route path="/category" element={<Category />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="wall/temp" element={<WallAllPage />} />
        <Route path="wall/:wallId" element={<WallAllPage />} />
      </Routes>
    </ConfigProvider>
  );
};
