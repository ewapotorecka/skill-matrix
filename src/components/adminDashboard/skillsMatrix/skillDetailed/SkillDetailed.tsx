'use client';

import {
  Button,
  Card,
  Col,
  Descriptions,
  Drawer,
  Form,
  Input,
  List,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
const { Option } = Select;

import React, { useState } from 'react';

interface SkillDetailedData {
  id: string;
  name: string;
  description: string;
  category: string;
  levels: {
    id: string;
    level: string;
    description: string;
    examples: string[];
  }[];
}

interface SkillDetailedProps {
  data: SkillDetailedData;
}

export const SkillDetailed: React.FC<SkillDetailedProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const { name, description, levels } = data;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <Card
      title={name}
      extra={
        <Button onClick={showDrawer}>
          <EditOutlined />
        </Button>
      }
    >
      <Space size="middle" direction="vertical">
        <Descriptions>
          <Descriptions.Item label="Description">
            {description}
          </Descriptions.Item>
        </Descriptions>

        <Descriptions>
          <Descriptions.Item label="Category">
            <Tag color="magenta">{data.category}</Tag>
          </Descriptions.Item>
        </Descriptions>
        <Space className="flex flex-col items-start gap-4">
          {levels.map((level) => {
            return (
              <Space
                key={level.id}
                className="flex flex-col items-start justify-center"
              >
                <Descriptions>
                  <Descriptions.Item label={level.level}>
                    {level.description}
                  </Descriptions.Item>
                </Descriptions>
                <List
                  dataSource={level.examples}
                  renderItem={(item) => (
                    <List.Item>
                      <Typography.Text>{item}</Typography.Text>
                    </List.Item>
                  )}
                />
              </Space>
            );
          })}
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
            <Button onClick={onClose}>Save</Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
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
                rules={[
                  { required: true, message: 'Please select a category' },
                ]}
              >
                <Select placeholder="Please select a category">
                  <Option value="engineering">engineering</Option>
                  <Option value="leadership">leadership</Option>
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
                name="l1-description"
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
                name="l1-examples"
                label="L1 Examples"
                rules={[
                  {
                    required: true,
                    message: 'Please enter L1 examples',
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Please enter L1 examples"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="l2-description"
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
                name="l2-examples"
                label="L2 Examples"
                rules={[
                  {
                    required: true,
                    message: 'Please enter L2 examples',
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Please enter L2 examples"
                />
              </Form.Item>
            </Col>
          </Row>{' '}
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="l3-description"
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
                name="l3-examples"
                label="L3 Examples"
                rules={[
                  {
                    required: true,
                    message: 'Please enter L3 examples',
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Please enter L3 examples"
                />
              </Form.Item>
            </Col>
          </Row>{' '}
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="l4-description"
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
                name="l4-examples"
                label="L4 Examples"
                rules={[
                  {
                    required: true,
                    message: 'Please enter L4 examples',
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Please enter L4 examples"
                />
              </Form.Item>
            </Col>
          </Row>{' '}
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="l5-description"
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
                name="l5-examples"
                label="L5 Examples"
                rules={[
                  {
                    required: true,
                    message: 'Please enter L5 examples',
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Please enter L5 examples"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </Card>
  );
};

export default SkillDetailed;
