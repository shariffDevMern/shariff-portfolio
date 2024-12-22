import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


const actions = [
  {
    icon: <LinkedInIcon />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mukesh-sudhan',
  },
  {
    icon: <FacebookIcon />,
    name: 'Facebook',
    url: 'https://www.facebook.com/yourprofile',
  },
  {
    icon: <InstagramIcon />,
    name: 'Instagram',
    url: 'https://www.instagram.com/yourprofile',
  },
  {
    icon: <EmailIcon />,
    name: 'Email',
    url: 'mailto:mukeshsudhan359@gmail.com',
  },
];

export default function SocialMediaIcon() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleActionClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    
        <>
      <Backdrop open={open} />
      
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 40, right: 40 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleActionClick(action.url)}
          />
        ))}
      </SpeedDial>
      </>
  );
}
