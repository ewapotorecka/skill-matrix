'use client';

import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';
import { Button, Card, Drawer, Select, Space, Table, Typography } from 'antd';
import { supabase } from '@/lib/initSupabase';
import EditForm from '../skillDetailed/editForm';

export const Matrix: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [skills, setSkills] = useState();
  const [categories, setCategories] = useState<{ name: string }[]>();
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>();
  const router = useRouter();

  const onClose = () => {
    setOpen(false);
  };
  const getSkills = async (categoryFilter?: string) => {
    if (categoryFilter) {
      let { data, error } = await supabase
        .from('skills')
        .select('*')
        .eq('category', categoryFilter);

      if (data) {
        // @ts-ignore
        setSkills(data);
      }
    } else {
      let { data, error } = await supabase.from('skills').select('*');

      if (data) {
        // @ts-ignore
        setSkills(data);
      }
    }
  };
  const getCategories = async () => {
    let { data: categories, error } = await supabase
      .from('skill_categories')
      .select('*');

    if (categories) {
      setCategories(categories);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getSkills(categoryFilter);
  }, [categoryFilter]);
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <Space>
          <Typography.Text className="font-bold text-sm">
            FILTERS
          </Typography.Text>
          <Select
            className="min-w-[140px]"
            placeholder="Category"
            allowClear
            onChange={(option) =>
              setCategoryFilter(
                categories ? categories[option - 1]?.name : undefined
              )
            }
          >
            {categories?.map((category: any) => (
              <Select.Option key={category.id} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
          <Button onClick={() => setOpen(true)} className="w-fit ml-24">
            Add new skill
          </Button>
        </Space>
      </Card>

      <Table
        dataSource={skills}
        pagination={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              router.push(`/admin/dashboard/skills-matrix/${record.id}`);
            },
            style: {
              cursor: 'pointer',
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
