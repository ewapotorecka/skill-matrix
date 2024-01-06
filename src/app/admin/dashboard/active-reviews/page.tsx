'use client';

import ReviewsTable from '@/components/adminDashboard/active-reviews/ReviewsTable';
import { supabase } from '@/lib/initSupabase';
import { Button, Modal, Select, Space } from 'antd';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState<
    { label: string; value: number }[]
  >([]);
  const [selectedEmployee, setSelectedEmployee] = useState<number>();
  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (!selectedEmployee) {
      return;
    }

    const { data, error } = await supabase
      .from('reviews')
      .insert([{ employee: selectedEmployee }])
      .select();

    if (data) {
      router.push(`/admin/dashboard/active-reviews/${data[0].id}`);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const getEmployees = async () => {
    let { data: employees, error } = await supabase
      .from('employees')
      .select('*');

    if (employees) {
      setEmployees(
        employees?.map((employee) => ({
          label: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        }))
      );
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="p-8">
      <Space direction="vertical" className="w-full" size="large">
        <Button onClick={showModal}>New review</Button>
        <ReviewsTable />
      </Space>
      <Modal
        title="New review"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space className="py-4">
          <p>Select Employee</p>
          <Select
            options={employees}
            className="w-[200px]"
            value={selectedEmployee}
            onChange={(value) => setSelectedEmployee(value)}
          />
        </Space>
      </Modal>
    </div>
  );
}
