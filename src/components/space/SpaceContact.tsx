import { Icon } from '../common';
import circleArrowRightIcon from '@/assets/icons/space/circle-arrow-right.svg';
import zoominIcon from '@/assets/icons/categories/zoom-in.svg';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Space } from './SpacePage';
import { useWallStore } from '@/store';

export default function SpaceContact({ space }: { space: Space[] }) {
  const navigate = useNavigate();
  const { setIsEdit } = useWallStore();
  const handleNextStep = () => {
    // if (space.length > 0) {
    //   navigate(`/wall/${space[0].addSpaceId}`);
    // }
    navigate(`/category`);
    setIsEdit(true);
  };

  return (
    <div className="bg-sky min-h-screen pl-[24px] pt-[70px]">
      <div className="bg-white px-[24px] py-[22px] rounded-tl-[24px] rounded-bl-[24px] min-h-[calc(100vh-99px)] ">
        {/* 공유페이지 생성, 검색 */}
        <div className="flex items-center justify-between border-lightBlack border-solid border-b-[1px] pb-[15px] mb-[15px]">
          <div
            className="flex items-center gap-[3px] hover"
            onClick={handleNextStep}
          >
            <span>
              {space.length > 0 ? '공유페이지 이동' : '공유페이지 생성'}
            </span>
            <Icon src={circleArrowRightIcon} />
          </div>
          <div className="flex items-center gap-2">
            <Input className="w-60 border-none" />
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
      </div>
    </div>
  );
}
