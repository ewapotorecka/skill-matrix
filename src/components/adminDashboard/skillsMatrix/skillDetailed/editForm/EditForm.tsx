import React, { useCallback, useEffect, useState } from 'react';

import { Button, Col, Form, Input, Row, Select, Typography } from 'antd';

import { supabase } from '@/lib/initSupabase';
import { TagRender } from '@/utils/tagRenderer';
import 'easymde/dist/easymde.min.css';
import dynamic from 'next/dynamic';
import { SkillDetailedData } from '@/interfaces/SkillsData';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

const positionsData = [
  { value: 'JFE' },
  { value: 'JBE' },
  { value: 'JDO' },
  { value: 'JFS' },
  { value: 'MFE' },
  { value: 'MBE' },
  { value: 'MDO' },
  { value: 'MFS' },
  { value: 'SFE' },
  { value: 'SBE' },
  { value: 'SDO' },
  { value: 'SFS' },
];
const skillCategories = [
  { value: 'engineering' },
  { value: 'technical' },
  { value: 'soft-skills' },
  { value: 'leadership' },
];

const { Option } = Select;

interface EditFormProps {
  defaultData?: SkillDetailedData;
  variant?: 'create' | 'edit';
  onClose: () => void;
  onEdited: () => void;
}

interface SkillsFormData {
  name: string;
  category: string;
  description: string;
  l1_description: string;
  l1_examples: string;
  l1_positions: string[];
  l2_description: string;
  l2_examples: string;
  l2_positions: string[];
  l3_description: string;
  l3_examples: string;
  l3_positions: string[];
  l4_description: string;
  l4_examples: string;
  l4_positions: string[];
  l5_description: string;
  l5_examples: string;
  l5_positions: string[];
}
const EditForm: React.FC<EditFormProps> = ({
  defaultData,
  variant = 'edit',
  onClose,
  onEdited,
}) => {
  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = async () => {
    let { data, error } = await supabase.from('skill_categories').select('*');
    if (data) {
      setCategories(data.map((category) => category.name));
    }
  };

  const updateSkill = async (formData: SkillsFormData) => {
    const { data: L1data, error: L1error } = await supabase
      .from('skill_level_details')
      .update({
        description: formData.l1_description,
        examples: formData.l1_examples,
        positions: formData.l1_positions,
      })
      .eq('id', defaultData?.L1)
      .select();
    const { data: L2data, error: L2error } = await supabase
      .from('skill_level_details')
      .update({
        description: formData.l2_description,
        examples: formData.l2_examples,
        positions: formData.l2_positions,
      })
      .eq('id', defaultData?.L2)
      .select();
    const { data: L3data, error: L3error } = await supabase
      .from('skill_level_details')
      .update({
        description: formData.l3_description,
        examples: formData.l3_examples,
        positions: formData.l3_positions,
      })
      .eq('id', defaultData?.L3)
      .select();

    const { data: L4data, error: L4error } = await supabase
      .from('skill_level_details')
      .update({
        description: formData.l4_description,
        examples: formData.l4_examples,
        positions: formData.l4_positions,
      })
      .eq('id', defaultData?.L4)
      .select();

    const { data: L5data, error: L5error } = await supabase
      .from('skill_level_details')
      .update({
        description: formData.l5_description,
        examples: formData.l5_examples,
        positions: formData.l5_positions,
      })
      .eq('id', defaultData?.L5)
      .select();

    if (L1data && L2data && L3data && L4data && L5data) {
      const { data: skillData, error: skillError } = await supabase
        .from('skills')
        .update({
          name: formData.name,
          description: formData.description,
          category: formData.category,
          L1: L1data[0]?.id,
          L2: L2data[0]?.id,
          L3: L3data[0]?.id,
          L4: L4data[0]?.id,
          L5: L5data[0]?.id,
        })
        .eq('id', defaultData?.id)
        .select();

      if (skillData) {
        onClose();
        onEdited();
      }
    }
  };
  const createSkill = async (formData: SkillsFormData) => {
    let createdSkillData;
    const { data: skillData, error: skillError } = await supabase
      .from('skills')
      .insert({
        name: formData.name,
        description: formData.description,
        category: formData.category,
      })
      .select();

    if (skillData) {
      createdSkillData = skillData[0];
      const { data: L1data, error: L1error } = await supabase
        .from('skill_level_details')
        .insert({
          description: formData.l1_description,
          examples: formData.l1_examples,
          positions: formData.l1_positions,
          main_skill_name: formData.name,
          level: 'L1',
        })

        .select();

      const { data: L2data, error: L2error } = await supabase
        .from('skill_level_details')
        .insert({
          description: formData.l2_description,
          examples: formData.l2_examples,
          positions: formData.l2_positions,
          main_skill_name: formData.name,
          level: 'L2',
        })

        .select();
      const { data: L3data, error: L3error } = await supabase
        .from('skill_level_details')
        .insert({
          description: formData.l3_description,
          examples: formData.l3_examples,
          positions: formData.l3_positions,
          main_skill_name: formData.name,
          level: 'L3',
        })

        .select();

      const { data: L4data, error: L4error } = await supabase
        .from('skill_level_details')
        .insert({
          description: formData.l4_description,
          examples: formData.l4_examples,
          positions: formData.l4_positions,
          main_skill_name: formData.name,
          level: 'L4',
        })

        .select();

      const { data: L5data, error: L5error } = await supabase
        .from('skill_level_details')
        .insert({
          description: formData.l5_description,
          examples: formData.l5_examples,
          positions: formData.l5_positions,
          main_skill_name: formData.name,
          level: 'L5',
        })

        .select();

      if (L1data && L2data && L3data && L4data && L5data) {
        const { data: skillData, error: skillError } = await supabase
          .from('skills')
          .update({
            name: formData.name,
            description: formData.description,
            category: formData.category,
            L1: L1data[0]?.id,
            L2: L2data[0]?.id,
            L3: L3data[0]?.id,
            L4: L4data[0]?.id,
            L5: L5data[0]?.id,
          })
          .eq('id', createdSkillData?.id)
          .select();

        if (skillData) {
          onClose();
          onEdited();
        }
      }
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Form
        layout="vertical"
        initialValues={{
          ...defaultData,
          l1_description: defaultData?.L1Details?.description,
          l1_examples: defaultData?.L1Details?.examples,
          l1_positions: defaultData?.L1Details?.positions,
          l2_description: defaultData?.L2Details?.description,
          l2_examples: defaultData?.L2Details?.examples,
          l2_positions: defaultData?.L2Details?.positions,
          l3_description: defaultData?.L3Details?.description,
          l3_examples: defaultData?.L3Details?.examples,
          l3_positions: defaultData?.L3Details?.positions,
          l4_description: defaultData?.L4Details?.description,
          l4_examples: defaultData?.L4Details?.examples,
          l4_positions: defaultData?.L4Details?.positions,
          l5_description: defaultData?.L5Details?.description,
          l5_examples: defaultData?.L5Details?.examples,
          l5_positions: defaultData?.L5Details?.positions,
        }}
        onFinish={(data) => {
          variant === 'create' ? createSkill(data) : updateSkill(data);
        }}
        onFinishFailed={(error) => {
          console.log(error);
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Skill Name"
              rules={[{ required: true, message: 'Please enter skill name' }]}
            >
              <Input placeholder="Please enter skill name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true, message: 'Please select a category' }]}
            >
              <Select
                placeholder="Please select a category"
                options={skillCategories}
              >
                {categories.map((category) => (
                  <Option value={category} key={category}>
                    {category}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: 'Please enter skill description',
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Please enter skill description"
              />
            </Form.Item>
          </Col>
        </Row>
        <Typography.Text className="font-bold">Levels:</Typography.Text>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="l1_description"
              label="L1 Description"
              rules={[
                {
                  required: true,
                  message: 'Please enter L1 description',
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Please enter L1 description"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="l1_examples"
              label="L1 Examples"
              rules={[
                {
                  required: true,
                  message: 'Please enter L1 examples',
                },
              ]}
            >
              <SimpleMDE />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="l1_positions" label="L1 Positions">
              <Select
                mode="multiple"
                tagRender={TagRender}
                style={{ width: '100%' }}
                options={positionsData}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="l2_description"
              label="L2 Description"
              rules={[
                {
                  required: true,
                  message: 'Please enter L2 description',
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Please enter L2 description"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="l2_examples"
              label="L2 Examples"
              rules={[
                {
                  required: true,
                  message: 'Please enter L2 examples',
                },
              ]}
            >
              <SimpleMDE />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="l2_positions" label="L2 Positions">
              <Select
                mode="multiple"
                tagRender={TagRender}
                style={{ width: '100%' }}
                options={positionsData}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="l3_description"
              label="L3 Description"
              rules={[
                {
                  required: true,
                  message: 'Please enter L3 description',
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Please enter L3 description"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="l3_examples"
              label="L3 Examples"
              rules={[
                {
                  required: true,
                  message: 'Please enter L3 examples',
                },
              ]}
            >
              <SimpleMDE />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="l3_positions" label="L3 Positions">
              <Select
                mode="multiple"
                tagRender={TagRender}
                style={{ width: '100%' }}
                options={positionsData}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="l4_description"
              label="L4 Description"
              rules={[
                {
                  required: true,
                  message: 'Please enter L4 description',
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Please enter L4 description"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="l4_examples"
              label="L4 Examples"
              rules={[
                {
                  required: true,
                  message: 'Please enter L4 examples',
                },
              ]}
            >
              <SimpleMDE />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="l4_positions" label="L4 Positions">
              <Select
                mode="multiple"
                tagRender={TagRender}
                style={{ width: '100%' }}
                options={positionsData}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="l5_description"
              label="L5 Description"
              rules={[
                {
                  required: true,
                  message: 'Please enter L5 description',
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Please enter L5 description"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="l5_examples"
              label="L5 Examples"
              rules={[
                {
                  required: true,
                  message: 'Please enter L5 examples',
                },
              ]}
            >
              <SimpleMDE />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="l5_positions" label="L5 Positions">
              <Select
                mode="multiple"
                tagRender={TagRender}
                style={{ width: '100%' }}
                options={positionsData}
              />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditForm;
