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
    let { data: reviews, error } = await supabase.from('reviews').select('*');

    if (reviews) {
      reviews.forEach(async (review: any) => {
        let { data: employee, error } = await supabase
          .from('employees')
          .select('*')
          .eq('id', review.employee);

        if (employee) {
          review.first_name = employee[0].first_name;
          review.last_name = employee[0].last_name;
          review.position = employee[0].position;
        }
      });
      setReviewsData(reviews);
    }
  };

  useEffect(() => {
    getReviewsData();
  }, []);

  return <Table dataSource={reviewsData} columns={columns} />;
};

export default ReviewsTable;
