import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BuildIcon from '@mui/icons-material/Build';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Paper } from '@mui/material';
import animations from './animations';


export default function LabelBottomNavigation(props) {
    const {value,handleChange} = props

  return (
    <Paper elevation={12} sx={{...animations.slideDown,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
    <BottomNavigation sx={{ width: '100%',borderBottomLeftRadius:10,borderBottomRightRadius:10}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Technical"
        value="technical"
        icon={<BuildIcon />}
      />
      <BottomNavigationAction
        label="Non-Technical"
        value="non-technical"
        icon={<ManageAccountsIcon />}
      />

    </BottomNavigation>
    </Paper>
  );
}
