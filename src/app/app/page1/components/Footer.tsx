import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        backgroundColor: '#faebd7',
      }}
    >
      <Typography>Footer</Typography>
    </Box>
  );
}
