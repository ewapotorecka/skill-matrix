'use client';

import {
  Button,
  Card,
  Descriptions,
  Drawer,
  List,
  Space,
  Tag,
  Typography,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';

import React, { useEffect, useState } from 'react';
import EditForm from './editForm';
import { SkillDetailedData } from '@/mocks/skills';
import { supabase } from '@/lib/initSupabase';

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
            <Tag color="magenta">{skillData?.category}</Tag>
          </Descriptions.Item>
        </Descriptions>
        <Space className="flex flex-col items-start gap-4">
          <Space className="flex flex-col items-start justify-center">
            <Descriptions>
              <Descriptions.Item label="L1">
                {skillData?.l1_description}
              </Descriptions.Item>
            </Descriptions>
            {/* <List
              dataSource={level.examples}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>{item}</Typography.Text>
                </List.Item>
              )}
            /> */}
          </Space>
          <Space className="flex flex-col items-start justify-center">
            <Descriptions>
              <Descriptions.Item label="L2">
                {skillData?.l2_description}
              </Descriptions.Item>
            </Descriptions>
            {/* <List
              dataSource={level.examples}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>{item}</Typography.Text>
                </List.Item>
              )}
            /> */}
          </Space>
          <Space className="flex flex-col items-start justify-center">
            <Descriptions>
              <Descriptions.Item label="L3">
                {skillData?.l3_description}
              </Descriptions.Item>
            </Descriptions>
            {/* <List
              dataSource={level.examples}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>{item}</Typography.Text>
                </List.Item>
              )}
            /> */}
          </Space>
          <Space className="flex flex-col items-start justify-center">
            <Descriptions>
              <Descriptions.Item label="L4">
                {skillData?.l4_description}
              </Descriptions.Item>
            </Descriptions>
            {/* <List
              dataSource={level.examples}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>{item}</Typography.Text>
                </List.Item>
              )}
            /> */}
          </Space>
          <Space className="flex flex-col items-start justify-center">
            <Descriptions>
              <Descriptions.Item label="L5">
                {skillData?.l5_description}
              </Descriptions.Item>
            </Descriptions>
            {/* <List
              dataSource={level.examples}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>{item}</Typography.Text>
                </List.Item>
              )}
            /> */}
          </Space>
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
