import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'antd';
import { CategoryCard } from 'components/index';
import { CATEGORIES } from '@/data/constants/category';

export const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCreateWall = () => {
    navigate(`/wall/${crypto.randomUUID().replace(/-/g, '')}`);
  };

  return (
    <div className="h-[calc(100vh-70px)] items-center flex flex-col justify-center text-lightBlack">
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
