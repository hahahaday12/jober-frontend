import { Icon } from '../common';
import circleArrowRightIcon from '@/assets/icons/space/circle-arrow-right.svg';
import zoominIcon from '@/assets/icons/categories/zoom-in.svg';
import { Button, Input, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import addIcon from '@/assets/icons/space/add.svg';
import arrowdownIcon from '@/assets/icons/space/arrowdown.svg';
import polygonIcon from '@/assets/icons/space/polygon.svg';
import lineIcon from '@/assets/icons/space/line.svg';
import userIcon from '@/assets/icons/user.svg';
import { useEffect, useState } from 'react';
import { getSpace } from '@/api/space';
import TempSaveModal from './TempSaveModal';

type MemberInfo = {
  member: {
    memberId: number;
    memberName: string;
    memberProfileImageUrl: null;
    memberShip: string;
  };
  spaceWall: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    organization: any;
    // TODO
    personal: { spaceId: number; spaceType: string; spaceTitle: string }[];
  };
};

export default function SpaceContact({
  memberInfo,
}: {
  memberInfo: MemberInfo | null;
}) {
  const hasSpace = memberInfo && memberInfo?.spaceWall.personal.length > 0;
  const navigate = useNavigate();
  const [spaceWallId, setSpaceWallId] = useState<number | undefined>();
  const [isTempModalOpen, setIsTempModalOpen] = useState(false);

  const handleNextStep = async () => {
    // TODO
    if (!hasSpace) {
      navigate(`/wall/${spaceWallId}`);
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/wall-temporary/storage/${
          memberInfo?.member.memberId as number
        }/${memberInfo?.spaceWall.personal[0].spaceId as number}`,
      );
      if (response.ok) {
        navigate(`/category`);
        return;
      }
      setIsTempModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      console.log(memberInfo?.member.memberId);
      try {
        const response = await getSpace(
          memberInfo?.member.memberId as number,
          memberInfo?.spaceWall.personal[0].spaceId as number,
          memberInfo?.spaceWall.personal[0].spaceType as string,
        );
        setSpaceWallId(response.data.spaceWallId);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [memberInfo?.member.memberId, memberInfo?.spaceWall.personal]);

  return (
    <div className="bg-sky min-h-screen pl-[24px] pt-[70px]">
      <TempSaveModal
        spaceWallId={spaceWallId}
        isTempModalOpen={isTempModalOpen}
        setIsTempModalOpen={setIsTempModalOpen}
        memberInfo={memberInfo}
      />
      <div className="bg-white px-[24px] py-[22px] rounded-tl-[24px] rounded-bl-[24px] min-h-[calc(100vh-99px)] ">
        {/* 공유페이지 생성, 검색 */}
        <div className="flex items-center justify-between border-lightBlack border-solid border-b-[1px] pb-[15px] mb-[15px]">
          <div
            className="flex items-center gap-[3px] hover ring-2 ring-blue ring-offset-2"
            onClick={handleNextStep}
          >
            <div className="dm-16">
              {!hasSpace ? '공유페이지 이동' : '공유페이지 생성'}
            </div>
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
