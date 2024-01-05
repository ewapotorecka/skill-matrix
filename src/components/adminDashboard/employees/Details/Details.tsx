'use client';

import { EmployeeData } from '@/interfaces/EmployeeData';
import { supabase } from '@/lib/initSupabase';
import {
  BookOutlined,
  HistoryOutlined,
  StockOutlined,
} from '@ant-design/icons';
import { Button, Card, Descriptions, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const EmployeeDetails: React.FC<{ id: string }> = ({ id }) => {
  const [employeeData, setEmplopoyeesData] = useState<EmployeeData>();

  console.log(employeeData);

  const getEmployeeDetails = async () => {
    let { data, error } = await supabase
      .from('employees')
      .select('*')
      .eq('id', id);
    if (data) {
      setEmplopoyeesData(data[0]);
    }
  };

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  return (
    <Card className="max-w-[800px]">
      <Descriptions layout="vertical">
        <Descriptions.Item label="Name">
          <Typography.Title level={5}>{`${employeeData?.first_name ?? ''} ${
            employeeData?.last_name ?? ''
          }`}</Typography.Title>
        </Descriptions.Item>
        <Descriptions.Item label="Position">
          <Typography.Title level={5}>
            {employeeData?.position ?? ''}
          </Typography.Title>
        </Descriptions.Item>
        <Descriptions.Item label="Next review">
          <Typography.Title level={5}>
            {employeeData?.next_review ?? ''}
          </Typography.Title>
        </Descriptions.Item>
      </Descriptions>
      <Space size="middle">
        <Button type="primary">
          <div className="flex content-center gap-2">
            Start review
            <BookOutlined />
          </div>
        </Button>
        <Button>
          <div className="flex content-center gap-2">
            Last review
            <HistoryOutlined />
          </div>
        </Button>
        <Button>
          <div className="flex content-center gap-2">
            Development plan
            <StockOutlined />
          </div>
        </Button>
      </Space>
    </Card>
  );
};

export default EmployeeDetails;
