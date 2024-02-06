import { useSiteNavigation } from "../../hooks/useSiteNavigation";
import { NameLogo } from "../NameLogo";
import React, { HTMLAttributes } from "react";
import { LONELYSWORD_BLUE } from "../../Constants";
  
  interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
  }
  
//   const StyledTabs = styled((props: StyledTabsProps) => (
//     <Tabs
//       {...props}
//       TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//     />
//   ))({
//     '& .MuiTabs-indicator': {
//       display: 'flex',
//       justifyContent: 'center',
//       backgroundColor: 'transparent',
//     },
//     '& .MuiTabs-indicatorSpan': {
//       maxWidth: 40,
//       width: '100%',
//       backgroundColor: LONELYSWORD_BLUE,
//     },
//   });
  
  interface StyledTabProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    label: string;
  }
  
//   const StyledTab = styled((props: StyledTabProps) => (
//     <Tab disableRipple {...props} />
//   ))(({ theme }) => ({
//     textTransform: 'none',
//     fontFamily: ['"Noto Sans JP"', 'sans-serif'].join(', '),
//     fontWeight: theme.typography.fontWeightMedium,
//     fontSize: theme.typography.pxToRem(12),
//     color: 'black',
//     '&.Mui-selected': {
//       color: LONELYSWORD_BLUE,
//     },
//     '&.Mui-focusVisible': {
//       backgroundColor: 'rgba(100, 95, 228, 0.32)',
//     },
//   }));

  export default function DesktopNavigation() {
    const {
        navigateToHome,
        navigateToBio,
        navigateToMusic,
    } = useSiteNavigation();

    const [value, setValue] = React.useState(0);
    
    const onTabChange = (event: React.SyntheticEvent, value: number) => {
        setValue(value);
    }

    return (
        <nav className="flex flex-row items-center">
      {/* <Box sx={{ width: '100%' }}>
        <Box sx={{direction: 'ltr', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <NameLogo  className="cursor-pointer"/>
            <Box sx={{ p: 3 }} />
          <StyledTabs
            value={value}
            onChange={onTabChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="Home" onClick={navigateToHome}/>
            <StyledTab label="Music" onClick={navigateToMusic} />
            <StyledTab label="Bio" onClick={navigateToBio} />
          </StyledTabs>
          <Box sx={{ p: 3 }} />
        </Box>
      </Box> */}
    </nav>
    )
}