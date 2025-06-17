'use client';

import { TabContext, useTabContext } from '@/hooks/use-tab-context';
import cn from '@/utils/cn';
import { ReactNode, useState } from 'react';

type TabsProps = {
  defaultValue: string;
  children: ReactNode;
  className: string;
  onValueChange?: (value: string) => void;
};

export const Tabs = ({ defaultValue, children, className = '', onValueChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultValue);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onValueChange?.(tab);
  };

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={className}>{children}</div>
    </TabContext.Provider>
  );
};
type TabListProps = {
  children: ReactNode;
  className: string;
};

export const TabList = ({ children, className = '' }: TabListProps) => {
  return (
    <div className={className} id="tab-list">
      {children}
    </div>
  );
};

type TabProps = {
  value: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClickHandler?: () => void;
};

export const Tab = ({
  value,
  children,
  className = '',
  disabled = false,
  onClickHandler,
}: TabProps) => {
  const { activeTab, setActiveTab } = useTabContext();
  const isActive = activeTab === value;

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(value);
      onClickHandler?.();
    }
  };
  const activeClass = isActive ? 'text-blue-600 border-blue-600' : '';

  return (
    <button
      id={`tab-${value}`}
      disabled={disabled}
      onClick={handleClick}
      className={cn(className, activeClass)}
      type="button"
    >
      {children}
    </button>
  );
};

type TabContentProps = {
  value: string;
  children: ReactNode;
  className: string;
};

export const TabContent = ({ children, value, className }: TabContentProps) => {
  const { activeTab } = useTabContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div className={className} id={`tab-${value}`}>
      {children}
    </div>
  );
};
