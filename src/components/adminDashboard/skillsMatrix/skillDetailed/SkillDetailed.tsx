'use client';

import { Button, Card, Descriptions, Drawer, Space, Tag } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Markdown from 'react-markdown';

import React, { useEffect, useState } from 'react';
import EditForm from './editForm';

import { supabase } from '@/lib/initSupabase';
import { TagRender } from '@/utils/tagRenderer';
import { getDepartmentColor } from '@/utils/getDepartmentColor';
import { getCategoryColor } from '@/utils/getCategoryColor';
import { SkillDetailedData, SkillLevelDetails } from '@/interfaces/SkillsData';

interface SkillDetailedProps {
  id: string;
}

export const SkillDetailed: React.FC<SkillDetailedProps> = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [skillData, setSkillData] = useState<SkillDetailedData>();
  const [L1, setL1] = useState<SkillLevelDetails>();
  const [L2, setL2] = useState<SkillLevelDetails>();
  const [L3, setL3] = useState<SkillLevelDetails>();
  const [L4, setL4] = useState<SkillLevelDetails>();
  const [L5, setL5] = useState<SkillLevelDetails>();

  const getSkill = async () => {
    let { data, error } = await supabase
      .from('skills')
      .select('*')
      .eq('id', id);

    if (data) {
      setSkillData(data[0]);
      let { data: skill_level1_details, error: error_l1 } = await supabase
        .from('skill_level_details')
        .select('*')
        .eq('id', data[0].L1);
      if (skill_level1_details) {
        setL1(skill_level1_details[0]);
      }
      let { data: skill_level2_details, error: error_l2 } = await supabase
        .from('skill_level_details')
        .select('*')
        .eq('id', data[0].L2);
      if (skill_level2_details) {
        setL2(skill_level2_details[0]);
      }
      let { data: skill_level3_details, error: error_l3 } = await supabase
        .from('skill_level_details')
        .select('*')
        .eq('id', data[0].L3);
      if (skill_level3_details) {
        setL3(skill_level3_details[0]);
      }
      let { data: skill_level4_details, error: error_l4 } = await supabase
        .from('skill_level_details')
        .select('*')
        .eq('id', data[0].L4);
      if (skill_level4_details) {
        setL4(skill_level4_details[0]);
      }
      let { data: skill_level5_details, error: error_l5 } = await supabase
        .from('skill_level_details')
        .select('*')
        .eq('id', data[0].L5);
      if (skill_level5_details) {
        setL5(skill_level5_details[0]);
      }
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getSkill();
  }, []);

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
                {L1?.description}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="example">
                <Markdown className="flex flex-col">{L1?.examples}</Markdown>
              </Descriptions.Item>
            </Descriptions>
          </Space>
          <Descriptions>
            <Descriptions.Item label="positions">
              <Space>
                {L1?.positions?.map((position) => {
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
                {L2?.description}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="example">
                <Markdown className="flex flex-col">{L2?.examples}</Markdown>
              </Descriptions.Item>
            </Descriptions>
          </Space>
          <Descriptions>
            <Descriptions.Item label="positions">
              <Space>
                {L2?.positions?.map((position) => {
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
                {L3?.description}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="example">
                <Markdown>{L3?.examples}</Markdown>
              </Descriptions.Item>
            </Descriptions>
          </Space>
          <Descriptions>
            <Descriptions.Item label="positions">
              <Space>
                {L3?.positions?.map((position) => {
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
                {L4?.description}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="example">
                <Markdown>{L4?.examples}</Markdown>
              </Descriptions.Item>
            </Descriptions>
          </Space>
          <Descriptions>
            <Descriptions.Item label="positions">
              <Space>
                {L4?.positions?.map((position) => {
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
                {L5?.description}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="example">
                <Markdown>{L5?.examples}</Markdown>
              </Descriptions.Item>
            </Descriptions>
          </Space>
          <Descriptions>
            <Descriptions.Item label="positions">
              <Space>
                {L5?.positions?.map((position) => {
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
          defaultData={{
            ...skillData,
            L1Details: L1,
            L2Details: L2,
            L3Details: L3,
            L4Details: L4,
            L5Details: L5,
          }}
          onClose={onClose}
          onEdited={getSkill}
        />
      </Drawer>
    </Card>
  );
};

export default SkillDetailed;
