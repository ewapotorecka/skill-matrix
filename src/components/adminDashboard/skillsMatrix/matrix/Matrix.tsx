'use client';

import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';
import { Button, Drawer, Space, Table } from 'antd';
import { supabase } from '@/lib/initSupabase';
import EditForm from '../skillDetailed/editForm';

export const Matrix: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [skills, setSkills] = useState();
  const router = useRouter();

  const onClose = () => {
    setOpen(false);
  };
  const getSkills = async () => {
    let { data, error } = await supabase.from('skills').select('*');

    if (data) {
      // @ts-ignore
      setSkills(data);
    }
  };
  useEffect(() => {
    getSkills();
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <Button onClick={() => setOpen(true)} className="w-fit">
        Add new skill
      </Button>
      <Table
        dataSource={skills}
        pagination={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              router.push(`/admin/dashboard/skills-matrix/${record.id}`);
            },
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
      <Drawer
        title="Add new skill"
        width="80%"
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <EditForm onClose={onClose} onEdited={getSkills} variant="create" />
      </Drawer>
    </div>
  );
};
