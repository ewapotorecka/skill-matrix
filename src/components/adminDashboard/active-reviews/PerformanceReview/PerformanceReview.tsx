'use client';

import { supabase } from '@/lib/initSupabase';
import { employees } from '@/mocks/employees';
import { Card, Descriptions, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';

const PerformanceReview = ({ id }: { id: string }) => {
  const [reviewData, setReviewData] = useState<any>(null);
  const [employeeData, setEmployeeData] = useState<any>(null);
  const [requiredSkills, setRequiredSkills] = useState<any>(null);

  const getReviewData = async () => {
    let { data: reviews, error } = await supabase
      .from('reviews')
      .select('*')
      // Filters
      .eq('id', id);

    if (reviews) {
      setReviewData(reviews[0]);

      let { data: employees, error } = await supabase
        .from('employees')
        .select('*')
        // Filters
        .eq('id', reviews[0].employee);

      if (employees) {
        const employeeData = employees[0];

        if (employeeData) {
          setEmployeeData(employeeData);
          let { data: skills, error } = await supabase
            .from('skills')
            .select('*');

          let filteredSkills = skills?.filter(
            (skill) =>
              skill.l1_positions?.includes(employeeData.position_short) ||
              skill.l2_positions?.includes(employeeData.position_short) ||
              skill.l3_positions?.includes(employeeData.position_short) ||
              skill.l4_positions?.includes(employeeData.position_short) ||
              skill.l5_positions?.includes(employeeData.position_short)
          );

          setRequiredSkills(filteredSkills);
        }
      }
    }
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <Space direction="vertical" size="large">
      <Typography.Title>Performance Review </Typography.Title>
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
        </Descriptions>
      </Card>
      <Typography.Title level={4}>Required Skills</Typography.Title>
      {requiredSkills?.map((skill: any) => {
        return (
          <Card className="max-w-[800px]" key={skill.id}>
            <Descriptions layout="vertical">
              <Descriptions.Item label="Name">
                <Typography.Title level={5}>{skill.name}</Typography.Title>
              </Descriptions.Item>
              <Descriptions.Item label="Description">
                <Typography.Title level={5}>
                  {skill.description}
                </Typography.Title>
              </Descriptions.Item>
            </Descriptions>
            {/* <Descriptions layout="vertical">
              <Descriptions.Item label="Name">
                <Typography.Title level={5}>{skill.name}</Typography.Title>
              </Descriptions.Item>
              <Descriptions.Item label="Description">
                <Typography.Title level={5}>
                  {skill.description}
                </Typography.Title>
              </Descriptions.Item>
            </Descriptions> */}
          </Card>
        );
      })}
    </Space>
  );
};

export default PerformanceReview;
