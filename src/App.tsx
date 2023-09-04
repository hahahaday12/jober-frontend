import koKR from "antd/locale/ko_KR";
import { ConfigProvider } from "antd";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Wall from "./pages/wall/Wall";
import Category from "./pages/category/Category";

// 함수형 컴포넌트 컨벤션??
export default function App() {
  const theme = {
    token: {
      colorPrimary: "#03bafc",
    },
  };
  return (
    <ConfigProvider theme={theme} locale={koKR}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="wall/:wallId" element={<Wall />} />
      </Routes>
    </ConfigProvider>
  );
}
