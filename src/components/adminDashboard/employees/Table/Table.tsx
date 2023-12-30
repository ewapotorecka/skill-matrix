'use client';

import * as React from 'react';

import { employees } from '@/mocks/employees';
import Link from 'next/link';

import { Table } from 'antd';

import { ArrowRightOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    className: 'font-bold text-xs',
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
    className: 'font-bold text-xs',
  },
  {
    title: '',
    key: 'action',
    render: (_text: any, record: any) => (
      <Link href={`/admin/dashboard/employees/${record.id}`}>
        <ArrowRightOutlined />
      </Link>
    ),
  },
];

export default function BasicTable() {
  return <Table dataSource={employees} columns={columns} />;
}
