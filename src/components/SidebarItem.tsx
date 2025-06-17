import { SidebarMenuItemType } from '@/types/sidebar-menu.type';

type SidebarItemProps = {
  item: SidebarMenuItemType;
};

/**
 * 사이드바 내부 메뉴 아이템 컴포넌트
 * @param item - 사이드바 메뉴 아이템 정보
 * @returns {JSX.Element}
 */
const SidebarItem = ({ item }: SidebarItemProps) => {
  return (
    <button className="flex w-full cursor-pointer justify-between px-6 py-4 hover:bg-blue-900 focus:outline-none">
      <span>{item.label}</span>
      <item.icon size={24} />
    </button>
  );
};

export default SidebarItem;
