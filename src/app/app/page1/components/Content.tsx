'use client';

import { Box } from '@mui/material';
import Counter from './Counter';

export default function Content() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <Counter>
        <Counter>
          <Counter />
        </Counter>
      </Counter>
    </Box>
  );
}
