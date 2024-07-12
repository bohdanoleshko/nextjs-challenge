import { Box, Button, Typography } from '@mui/material';
import { ReactNode, useMemo, useState } from 'react';

type Props = {
  children?: ReactNode;
};

export default function Counter({ children }: Props) {
  const [counterValue, setCounterValue] = useState(0);
  const result = useMemo(() => 100 / (counterValue % 4), [counterValue]);

  const decrement = () => {
    setCounterValue((prev) => prev - 1);
  };

  const increment = () => {
    setCounterValue((prev) => prev + 1);
  };

  return (
    <Box
      sx={{
        padding: '20px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}
      >
        Counter
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button variant="text" onClick={decrement}>
          -
        </Button>
        <Button variant="text" onClick={increment}>
          +
        </Button>
        <Typography>{counterValue}</Typography>
      </Box>
      <Typography>{`Formula Result: ${result.toFixed(2)}`}</Typography>

      {children}
    </Box>
  );
}
