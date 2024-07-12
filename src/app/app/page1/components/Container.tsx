import { Box } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <Box
      sx={{
        height: '100vh',
        paddingX: '20px',
        paddingY: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {children}
    </Box>
  );
}
