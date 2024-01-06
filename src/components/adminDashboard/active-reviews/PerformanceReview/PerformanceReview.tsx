'use client';

import { supabase } from '@/lib/initSupabase';
import { Card, Descriptions, Select, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { SkillLevelDetails } from '@/interfaces/SkillsData';

const onChange = (key: string) => {
  console.log(key);
};

const ReviewContent = ({
  requiredSkills,
}: {
  requiredSkills: SkillLevelDetails[];
}) => {
  return (
    <Space direction="vertical" size="small">
      {requiredSkills?.map((skill: any) => {
        return (
          <Card className="max-w-[1200px]" key={skill.id}>
            <Descriptions layout="vertical">
              <Descriptions.Item label="Name">
                <Typography.Title level={5}>
                  {skill.main_skill_name}
                </Typography.Title>
              </Descriptions.Item>
              <Descriptions.Item label="Level">
                <Typography.Title level={5}>{skill.level}</Typography.Title>
              </Descriptions.Item>
              <Descriptions.Item label="Description">
                <Typography.Title level={5}>
                  {skill.description}
                </Typography.Title>
              </Descriptions.Item>
              <Descriptions.Item label="Examples">
                <Typography.Title level={5}>
                  <Markdown>{skill.examples}</Markdown>
                </Typography.Title>
              </Descriptions.Item>
              <Descriptions.Item label="Evaluation">
                <Select
                  placeholder="Select an option"
                  // onChange={onSelect}
                  options={[
                    { value: 'working towards' },
                    { value: 'meeting' },
                    { value: 'exceeding' },
                  ]}
                  style={{ width: 200 }}
                />
              </Descriptions.Item>
            </Descriptions>
          </Card>
        );
      })}
    </Space>
  );
};

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

          let { data: filteredSkills, error } = await supabase
            .from('skill_level_details')
            .select('*')
            // Filters
            .contains('positions', [employeeData.position]);

          setRequiredSkills(filteredSkills);
        }
      }
    }
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Self Review',
      children: <ReviewContent requiredSkills={requiredSkills} />,
    },
    {
      key: '2',
      label: 'Lead Review',
      children: <ReviewContent requiredSkills={requiredSkills} />,
    },
    {
      key: '3',
      label: 'Performance Review',
      children: <ReviewContent requiredSkills={requiredSkills} />,
    },
  ];

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
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Space>
  );
};

export default PerformanceReview;
