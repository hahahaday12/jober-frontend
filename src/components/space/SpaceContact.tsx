import { Icon } from '../common';
import circleArrowRightIcon from '@/assets/icons/space/circle-arrow-right.svg';
import zoominIcon from '@/assets/icons/categories/zoom-in.svg';
import { Button, Input, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import addIcon from '@/assets/icons/space/add.svg';
import arrowdownIcon from '@/assets/icons/space/arrowdown.svg';
import polygonIcon from '@/assets/icons/space/polygon.svg';
import lineIcon from '@/assets/icons/space/line.svg';
//import userIcon from '@/assets/icons/user.svg';
import userIcon from '@/assets/icons/user.svg';
import { useWallStore } from '@/store';
import { useEffect } from 'react';

export default function SpaceContact({ space }: { spcae: any }) {
  const navigate = useNavigate();
  const { setIsEdit } = useWallStore();
  const handleNextStep = () => {
    // if (space.length > 0) {
    //   navigate(`/wall/${space[0].addSpaceId}`);
    // }
    navigate(`/category`);
    setIsEdit(true);
  };
  console.log(space);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = fetch('');
  //   };
  // }, []);

  return (
    <div className="bg-sky min-h-screen pl-[24px] pt-[70px]">
      <div className="bg-white px-[24px] py-[22px] rounded-tl-[24px] rounded-bl-[24px] min-h-[calc(100vh-99px)] ">
        {/* 공유페이지 생성, 검색 */}
        <div className="flex items-center justify-between border-lightBlack border-solid border-b-[1px] pb-[15px] mb-[15px]">
          <div
            className="flex items-center gap-[3px] hover"
            onClick={handleNextStep}
          >
            <div className="w-[100px] dm-16">공유페이지 생성</div>
            <Icon src={circleArrowRightIcon} />
          </div>
          <div className="flex items-center gap-2">
            <Input className="border-none" />
            <Icon src={zoominIcon} className="hover" />
          </div>
        </div>
        {/* 버튼3개 */}
        <div className="flex gap-[6px]">
          <Button type="primary" shape="round" className="dm-14">
            전체
          </Button>
          <Button shape="round" className="border-blue text-blue dm-14">
            연락처 추가
          </Button>
          <Button danger shape="round" className="dm-14">
            삭제
          </Button>
        </div>
        <div className="flex gap-[12px] border-line border-solid border-b-[1px] pb-[12px] mt-[18px]">
          <div className="flex items-center hover gap-[12px]">
            <p className="text-gray88 dm-16">태그 전체</p>
            <Icon src={arrowdownIcon} />
          </div>
          <Icon src={lineIcon} />
          <div className="flex items-center hover gap-[12px]">
            <p className="text-gray88 dm-16">필터 추가</p>
            <Icon src={addIcon} />
          </div>
        </div>
        <div className="flex gap-[12px] border-line border-solid border-b-[1px] pb-[12px] mt-[12px]">
          <div className="flex items-center gap-[13px]">
            <Checkbox />
            <p className="text-gray88 dm-16">이름</p>
            <Icon src={polygonIcon} />
          </div>
          <div className="flex items-center gap-[4px]">
            <p className="text-gray88 dm-16">휴대전화</p>
            <Icon src={arrowdownIcon} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[12px] border-line border-solid border-b-[1px] pb-[18px] mt-[18px]">
            <Checkbox />
            <div className="flex justify-center items-center w-[28px] h-[28px] bg-lightGray rounded-full">
              <Icon src={userIcon} className="w-[18px] h-[18px]" />
            </div>
            <span className="dm-16">{123}</span>
            <p className="text-gray88 dm-16">010-1234-5678</p>
            <Icon src={arrowdownIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
