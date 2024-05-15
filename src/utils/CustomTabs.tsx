import { useState } from 'react';
import { Tab, Tabs, Toolbar, Stack, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { CustomTabsProps } from "@/components/types/types";

const CustomTabs = ({ tabs }: CustomTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleTabChange = (newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Toolbar
      sx={{
        backgroundColor: '#E1B15C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        '& .MuiTabs-root': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '5px' : '10px',
          marginBottom: '5px',
          color: 'white',
          padding: isMobile ? '10px' : '30px',
        },
        '& .MuiTabs-indicator': {
          height: 4,
          bottom: 0,
        },
        '& .MuiTab-root': {
          height: '40px',
          borderRadius: '20px',
          borderColor: 'white',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'white',
          width: isMobile ? '120px' : '200px',
          overflowWrap: 'break-word',
          borderBottom: '4px solid transparent',
        },
        '& .MuiTab-root.Mui-selected': {
          fontWeight: 800,
        },
      }}
    >
      <Stack direction={isMobile ? 'column' : 'row'} spacing={1}>
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => handleTabChange(newValue)}
          indicatorColor="primary"
          textColor="primary"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={t(tab.label)}
              component={Link}
              to={tab.path}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </Tabs>
        <LanguageSwitcher />
      </Stack>
    </Toolbar>
  );
};

export default CustomTabs;
