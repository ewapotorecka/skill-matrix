import { Box, Button, CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100vh] min-w-[100vw]">
      <Link href="/admin/dashboard">
        <Button variant="outlined">Admin</Button>
      </Link>
    </div>
  );
}
