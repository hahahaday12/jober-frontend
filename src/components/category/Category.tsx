import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'antd';
import career from '@/assets/icons/categories/career.png';
import private1 from '@/assets/icons/categories/private.png';
import event from '@/assets/icons/categories/event.png';
import enterprise from '@/assets/icons/categories/enterprise.png';
import basic from '@/assets/icons/categories/basic.png';
import { CategoryCard } from 'components/index';

const categories = [
  { category: '취업/이직', imageSrc: career },
  { category: '개인/소개', imageSrc: private1 },
  { category: '이벤트/일상', imageSrc: event },
  { category: '기업/근로양식', imageSrc: enterprise },
  { category: '기본 템플릿', imageSrc: basic },
];

export const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>();
  const navigate = useNavigate();
  const uuid = uuidv4().replace(/-/g, '');

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCreateWall = () => {
    if (selectedCategory) {
      navigate(`/wall/${uuid}`, { state: { category: selectedCategory } });
    } else {
      console.error('카테고리를 선택하세요.');
    }
  };

  return (
    <div>
      <div className=" h-[calc(100vh-70px)] items-center flex flex-col justify-center">
        <div>
          <div className=" ">
            <div className="dm-24">생성하기 원하는 페이지의</div>
            <div className="db-34 mt-[3px]">카테고리를 선택 해주세요</div>
          </div>
          <div className="flex items-center gap-12 mt-[80px]">
            {categories.map((categoryItem, index) => (
              <CategoryCard
                key={index}
                category={categoryItem.category}
                imageSrc={categoryItem.imageSrc}
                onSelectCategory={handleSelectCategory}
                isSelected={categoryItem.category === selectedCategory}
              />
            ))}
          </div>
          <div className="mt-[100px] flex justify-end ml-auto">
            <Button
              className="w-[165px] h-[65px] rounded-4xl right-0 dm-24 text-gray88"
              onClick={handleCreateWall}
            >
              작성하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
