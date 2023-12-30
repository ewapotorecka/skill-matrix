'use client';

import { useRouter } from 'next/navigation';

import React from 'react';
import { Table } from 'antd';
import { skills } from '@/mocks/skills';

export const Matrix: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <Table
        dataSource={skills}
        pagination={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              router.push(`/admin/dashboard/skills-matrix/${record.id}`);
            },
            onDoubleClick: (event) => {}, // double click row
            onContextMenu: (event) => {}, // right button click row
            onMouseEnter: (event) => {}, // mouse enter row
            onMouseLeave: (event) => {}, // mouse leave row
          };
        }}
      >
        <Table.Column title="NAME" dataIndex="name" key="name" />
        <Table.Column
          title="DESCRIPTION"
          dataIndex="description"
          key="description"
        />
        <Table.Column title="CATEGORY" dataIndex="category" key="category" />
      </Table>
    </div>
  );
};
