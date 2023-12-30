import React, { useEffect, useState } from 'react';

import { Button, Col, Form, Input, Row, Select, Typography } from 'antd';
import { SkillDetailedData } from '@/mocks/skills';
import { supabase } from '@/lib/initSupabase';

const { Option } = Select;

interface EditFormProps {
  defaultData?: SkillDetailedData;
  variant?: 'create' | 'edit';
  onClose: () => void;
  onEdited: () => void;
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

  const updateSkill = async (formData: SkillDetailedData) => {
    const { data, error } = await supabase
      .from('skills')
      .update(formData)
      .eq('id', defaultData?.id)
      .select();

    if (data) {
      onClose();
      onEdited();
    }
  };
  const createSkill = async (formData: SkillDetailedData) => {
    const { data, error } = await supabase
      .from('skills')
      .insert([formData])
      .select();

    if (data) {
      onClose();
      onEdited();
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Form
        layout="vertical"
        initialValues={defaultData}
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
              <Select placeholder="Please select a category">
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
              <Input.TextArea rows={4} placeholder="Please enter L1 examples" />
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
              <Input.TextArea rows={4} placeholder="Please enter L2 examples" />
            </Form.Item>
          </Col>
        </Row>{' '}
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
              <Input.TextArea rows={4} placeholder="Please enter L3 examples" />
            </Form.Item>
          </Col>
        </Row>{' '}
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
              <Input.TextArea rows={4} placeholder="Please enter L4 examples" />
            </Form.Item>
          </Col>
        </Row>{' '}
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
              <Input.TextArea rows={4} placeholder="Please enter L5 examples" />
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
