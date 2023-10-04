import { USER_NAME } from '@/data/constants/common';
import { Icon } from '../common';
import hamburgerIcon from '@/assets/icons/space/hamburger.svg';
import mobileDropdownIcon from '@/assets/icons/mobile-dropdown.svg';
import darkBellICon from '@/assets/icons/space/dark-bell.svg';
import userIcon from '@/assets/icons/user.svg';
import { Menu } from 'antd';
import { useState, useEffect, useRef } from 'react';
// import userMenuIcon from '@/assets/icons/space/userMenuIcon.svg';
// import folderMenuIcon from '@/assets/icons/space/folderMenuIcon.svg';
// import categoryMenuIcon from '@/assets/icons/space/categoryMenuIcon.svg';

export default function SpaceNavbar({ memberName }: { memberName?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-[70px] bg-sky px-[24px] fixed w-full flex items-center justify-between">
      <Icon src={hamburgerIcon} className="hover" onClick={handleMenuClick} />
      <div className="flex items-center gap-[4px]">
        <span className="db-20">{memberName}</span>
        <Icon src={mobileDropdownIcon} className="hover" />
      </div>
      <div className="flex gap-[8px]">
        <div className="flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full">
          <Icon src={darkBellICon} className="" />
        </div>
        <div className="flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full">
          <Icon src={userIcon} />
        </div>
      </div>
      {/* 햄버거 메뉴 */}
      {isMenuOpen && (
        <div ref={menuRef}>
          <Menu mode="inline" className="w-[296px] bg-sky fixed top-0 left-0">
            <Menu.SubMenu key="sub1" title="연락처">
              <Menu.Item key="1">전체</Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="sub2" title="문서 보관함">
              <Menu.Item key="2">전체 문서</Menu.Item>
              <Menu.Item key="3">수신함</Menu.Item>
              <Menu.Item key="4">발신함</Menu.Item>
              <Menu.Item key="5">보관 문서</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub3" title="관리 및 문의">
              <Menu.Item key="6">스페이스 정보 관리</Menu.Item>
              <Menu.Item key="7">초대 및 권한 설정</Menu.Item>
              <Menu.Item key="8">전자문서 환경설정</Menu.Item>
              <Menu.Item key="9">시스템 사용문의</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item>문서 템플릿 모음</Menu.Item>
            <Menu.Item>요금제 업그레이드</Menu.Item>
          </Menu>
        </div>
      )}
    </header>
  );
}
