import { Box } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box sx={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <Link href="/app/page1">Go to Page 1</Link>
    </Box>
  );
}
