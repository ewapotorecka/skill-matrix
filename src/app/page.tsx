import { Button } from 'antd';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100vh] min-w-[100vw]">
      <Link href="/admin/dashboard">
        <Button>Admin</Button>
      </Link>
    </div>
  );
}
