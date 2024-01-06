import { supabase } from '@/lib/initSupabase';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    className: 'font-bold text-xs',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
    className: 'font-bold text-xs',
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
    className: 'font-bold text-xs',
  },
  {
    title: '',
    key: 'action',
    render: (_text: any, record: any) => (
      <Link href={`/admin/dashboard/active-reviews/${record.id}`}>
        <ArrowRightOutlined />
      </Link>
    ),
  },
];

const ReviewsTable = () => {
  const [reviewsData, setReviewsData] = useState<any>();

  const getReviewsData = async () => {
    let { data: reviews, error: reviewsError } = await supabase
      .from('reviews')
      .select('*');

    if (reviews) {
      const employeeDataPromises = reviews.map((review) =>
        supabase
          .from('employees')
          .select('*')
          .eq('id', review.employee)
          .then(({ data: employee }) => {
            if (employee) {
              return {
                ...review,
                first_name: employee[0].first_name,
                last_name: employee[0].last_name,
                position: employee[0].position,
              };
            }
            return null;
          })
      );

      const reviewsWithEmployeeData = (
        await Promise.all(employeeDataPromises)
      ).filter((review) => review !== null);

      setReviewsData(reviewsWithEmployeeData);
    }
  };

  useEffect(() => {
    getReviewsData();
  }, []);

  return <Table dataSource={reviewsData} columns={columns} />;
};

export default ReviewsTable;
