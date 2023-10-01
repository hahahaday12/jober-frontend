import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Button } from 'antd';
import { CategoryCard } from 'components/index';
import { CATEGORIES } from '@/data/constants/category';
import useMessage from 'antd/es/message/useMessage';
import { useWallStore } from '@/store';
import { DEFAULT_WALL } from '@/data/constants/blocks';

export const CategoryPage = () => {
  const { setWall, setIsEdit } = useWallStore();
  const [messageApi, contextHolder] = useMessage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  const addSpaceId = useMemo(() => crypto.randomUUID().replace(/-/g, ''), []);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCreateWall = async () => {
    if (!selectedCategory) {
      messageApi.error('카테고리를 선택해주세요.');
      return;
    }
    setWall({
      ...DEFAULT_WALL[selectedCategory],
      shareURL: addSpaceId,
      isPublic: true,
      category: selectedCategory,
      memberId: '1',
    });
    setIsEdit(true);
    navigate(`/wall/${addSpaceId}`, { state: { isNew: true } });
  };

  return (
    <div className="h-[calc(100vh-70px)] items-center flex flex-col justify-center text-lightBlack">
      {contextHolder}
      <div className="flex flex-col px-[24px]">
        <div>
          <div className="text-[20px] sm:text-[24px]">
            생성하기 원하는 페이지의
          </div>
          <div className="text-[24px] sm:text-[34px] font-bold mt-[10px]">
            카테고리를 선택 해주세요
          </div>
        </div>

        <ul className="sm:flex sm:items-center sm:gap-[20px] mt-[20px] sm:mt-[80px] flex-wrap grid grid-cols-2 gap-[8px] items-center">
          {CATEGORIES.map((category, index) => (
            <CategoryCard
              key={index}
              category={category.value}
              label={category.kor}
              imageSrc={category.src}
              onSelectCategory={handleSelectCategory}
              isSelected={category.value === selectedCategory}
            />
          ))}
          <Button
            className="db-16 text-gray88 rounded-full h-[49px] w-[119px] block sm:hidden mx-auto"
            onClick={handleCreateWall}
          >
            작성하기
          </Button>
        </ul>

        <Button
          className="dm-24 text-gray88 mt-[100px] rounded-full h-[65px] w-[158px] self-end hidden sm:block"
          onClick={handleCreateWall}
        >
          작성하기
        </Button>
      </div>
    </div>
  );
};
