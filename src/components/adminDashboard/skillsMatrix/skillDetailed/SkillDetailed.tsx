'use client';

import { Button, Card, Descriptions, Drawer, Space, Tag } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Markdown from 'react-markdown';

import React, { useEffect, useState } from 'react';
import EditForm from './editForm';
import { SkillDetailedData } from '@/mocks/skills';
import { supabase } from '@/lib/initSupabase';
import { TagRender } from '@/utils/tagRenderer';
import { getDepartmentColor } from '@/utils/getDepartmentColor';
import { getCategoryColor } from '@/utils/getCategoryColor';

interface SkillDetailedProps {
  id: string;
}

export const SkillDetailed: React.FC<SkillDetailedProps> = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [skillData, setSkillData] = useState<SkillDetailedData>();

  const getSkill = async () => {
    let { data, error } = await supabase
      .from('skills')
      .select('*')
      .eq('id', id);

    if (data) {
      console.log('data', data);
      setSkillData(data[0]);
    }
  };

  useEffect(() => {
    getSkill();
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Card
      title={skillData?.name}
      extra={
        <Button onClick={showDrawer}>
          <EditOutlined />
        </Button>
      }
    >
      <Space size="middle" direction="vertical">
        <Descriptions>
          <Descriptions.Item label="Description">
            {skillData?.description}
          </Descriptions.Item>
        </Descriptions>

        <Descriptions>
          <Descriptions.Item label="Category">
            <Tag color={getCategoryColor(skillData?.category)}>
              {skillData?.category}
            </Tag>
          </Descriptions.Item>
        </Descriptions>
        <Space className="flex flex-col items-start gap-4">
          <Space className="flex flex-col items-start justify-center">
            <Descriptions>
              <Descriptions.Item label="L1">
                {skillData?.l1_description}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="example">
                <Markdown className="flex flex-col">
                  {skillData?.l1_examples}
                </Markdown>
              </Descriptions.Item>
            </Descriptions>
          </Space>
          <Descriptions>
            <Descriptions.Item label="positions">
              <Space>
                {skillData?.l1_positions?.map((position) => {
                  const positionToRender = {
                    value: position,
                    color: getDepartmentColor(position),
                  };
                  return TagRender(positionToRender);
                })}
              </Space>
            </Descriptions.Item>
          </Descriptions>

          <Space className="flex flex-col items-start justify-center">
            <Descriptions>
              <Descriptions.Item label="L2">
                {skillData?.l2_description}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="example">
                <Markdown className="flex flex-col">
                  {skillData?.l2_examples}
                </Markdown>
              </Descriptions.Item>
            </Descriptions>
          </Space>
          <Descriptions>
            <Descriptions.Item label="positions">
              <Space>
                {skillData?.l2_positions?.map((position) => {
                  const positionToRender = {
                    value: position,
                    color: getDepartmentColor(position),
                  };
                  return TagRender(positionToRender);
                })}
              </Space>
            </Descriptions.Item>
          </Descriptions>
          <Space className="flex flex-col items-start justify-center">
            <Descriptions>
              <Descriptions.Item label="L3">
                {skillData?.l3_description}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="example">
                <Markdown>{skillData?.l3_examples}</Markdown>
              </Descriptions.Item>
            </Descriptions>
          </Space>
          <Descriptions>
            <Descriptions.Item label="positions">
              <Space>
                {skillData?.l3_positions?.map((position) => {
                  const positionToRender = {
                    value: position,
                    color: getDepartmentColor(position),
                  };
                  return TagRender(positionToRender);
                })}
              </Space>
            </Descriptions.Item>
          </Descriptions>
          <Space className="flex flex-col items-start justify-center">
            <Descriptions>
              <Descriptions.Item label="L4">
                {skillData?.l4_description}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="example">
                <Markdown>{skillData?.l4_examples}</Markdown>
              </Descriptions.Item>
            </Descriptions>
          </Space>
          <Descriptions>
            <Descriptions.Item label="positions">
              <Space>
                {skillData?.l4_positions?.map((position) => {
                  const positionToRender = {
                    value: position,
                    color: getDepartmentColor(position),
                  };
                  return TagRender(positionToRender);
                })}
              </Space>
            </Descriptions.Item>
          </Descriptions>
          <Space className="flex flex-col items-start justify-center">
            <Descriptions>
              <Descriptions.Item label="L5">
                {skillData?.l5_description}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="example">
                <Markdown>{skillData?.l5_examples}</Markdown>
              </Descriptions.Item>
            </Descriptions>
          </Space>
          <Descriptions>
            <Descriptions.Item label="positions">
              <Space>
                {skillData?.l5_positions?.map((position) => {
                  const positionToRender = {
                    value: position,
                    color: getDepartmentColor(position),
                  };
                  return TagRender(positionToRender);
                })}
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Space>
      </Space>
      <Drawer
        title="Edit"
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
        <EditForm
          defaultData={skillData}
          onClose={onClose}
          onEdited={getSkill}
        />
      </Drawer>
    </Card>
  );
};

export default SkillDetailed;
