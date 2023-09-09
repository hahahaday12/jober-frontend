import koKR from 'antd/locale/ko_KR';
import { ConfigProvider } from 'antd';
import { Route, Routes } from 'react-router-dom';
import UIUX from '../UIUX';
import { CategoryPage, HomePage, WallAllPage } from 'pages/index';

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2493FB',
        },
        components: {
          Button: {
            borderRadius: 2,
          },
          Input: {
            borderRadius: 9,
          },
        },
      }}
      locale={koKR}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="wall/:wallId" element={<WallAllPage />} />
      </Routes>
    </ConfigProvider>
  );
};
