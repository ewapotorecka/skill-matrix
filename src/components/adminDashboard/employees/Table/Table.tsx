'use client';

import * as React from 'react';

import { employees } from '@/mocks/employees';
import Link from 'next/link';

import { Table } from 'antd';

import { ArrowRightOutlined } from '@ant-design/icons';
import { supabase } from '@/lib/initSupabase';
import { useEffect, useState } from 'react';
import { EmployeeData } from '@/interfaces/EmployeeData';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    className: 'font-bold text-xs',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
    className: 'font-bold text-xs',
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
    className: 'font-bold text-xs',
  },
  {
    title: 'Next review',
    dataIndex: 'next_review',
    key: 'next_review',
    className: 'font-bold text-xs',
  },
  {
    title: '',
    key: 'action',
    render: (_text: any, record: EmployeeData) => (
      <Link href={`/admin/dashboard/employees/${record.id}`}>
        <ArrowRightOutlined />
      </Link>
    ),
  },
];

export default function BasicTable() {
  const [employeesData, setEmplopoyeesData] = useState<EmployeeData[]>();
  const getEmployees = async () => {
    let { data, error } = await supabase.from('employees').select('*');

    if (data) {
      setEmplopoyeesData(data);
    }
    console.log(data);
  };

  useEffect(() => {
    getEmployees();
  }, []);
  return <Table dataSource={employeesData} columns={columns} />;
}
