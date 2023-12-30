import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

const items = [
  {
    key: '1',
    label: 'Home',
    href: '/admin/dashboard',
  },
  {
    key: '2',
    label: 'Employees',
    href: '/admin/dashboard/employees',
  },
  {
    key: '3',
    label: 'Active Reviews',
    href: '/admin/dashboard/active-reviews',
  },
  {
    key: '4',
    label: 'Skills Matrix',
    href: '/admin/dashboard/skills-matrix',
  },
  {
    key: '5',
    label: 'Calendar',
    href: '/admin/dashboard/calendar',
  },
];

export const Nav: React.FC = () => {
  return (
    <Menu theme="dark" mode="horizontal" className="flex gap-4 justify-end">
      {items.map((item) => (
        <Link href={item.href} key={item.key}>
          {item.label}
        </Link>
      ))}
    </Menu>
  );
};

export default Nav;
