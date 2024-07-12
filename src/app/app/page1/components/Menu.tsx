import { Box, Typography } from '@mui/material';

export default function Menu() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        backgroundColor: '#f0f8ff',
      }}
    >
      <Typography>Menu</Typography>
    </Box>
  );
}
