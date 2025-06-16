import { RiNotionFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';
import { FaFigma } from 'react-icons/fa';
import { PiMicrosoftExcelLogoDuotone } from 'react-icons/pi';
import { FaWindows } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa';
import SidebarItem from './SidebarItem';
import { SidebarMenuItemType } from '@/types/sidebar-menu.type';

const MENU_ITEMS: SidebarMenuItemType[] = [
  { label: 'Notion', icon: RiNotionFill },
  { label: 'VS Code', icon: VscVscode },
  { label: 'Figma', icon: FaFigma },
  { label: 'Excel', icon: PiMicrosoftExcelLogoDuotone },
  { label: 'Windows', icon: FaWindows },
  { label: 'Mac OS', icon: FaApple },
];

/**
 * 사이드바 컴포넌트
 * @returns {JSX.Element}
 */
const Sidebar = () => {
  return (
    <div className="flex w-64 flex-shrink-0 flex-col bg-blue-800 text-white shadow-lg">
      {/* 사이드바 헤더 영역 */}
      <div className="flex items-center justify-center p-4">
        <h2 className="text-2xl font-bold">프로그램</h2>
      </div>

      {/* 사이드바 컨텐츠 영역 */}
      <div className="flex-1 space-y-2 overflow-scroll">
        {MENU_ITEMS.map((item, idx) => (
          <SidebarItem key={idx} item={item} />
        ))}
      </div>

      {/* 사이드바 푸터 영역 */}
      <div className="m-4 rounded-lg bg-blue-700 p-4">
        <h3 className="mb-2 text-lg">키맵</h3>
        <p className="text-sm font-light">자주 쓰는 단축키를 익혀 작업 효율을 높여보세요!</p>
      </div>
    </div>
  );
};

export default Sidebar;
