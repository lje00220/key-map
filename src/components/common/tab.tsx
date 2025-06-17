'use client';

import { TabContext } from '@/hooks/use-tab-context';
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

const Tab = () => {
  return <div>Tab</div>;
};

export default Tab;
