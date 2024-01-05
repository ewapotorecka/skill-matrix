import PerformanceReview from '@/components/adminDashboard/active-reviews/PerformanceReview';

import React from 'react';

interface pageProps {
  params: { id: string };
}
const ReviewPage: React.FC<pageProps> = async ({ params }) => {
  const { id } = params;

  return (
    <div className="p-8">
      <PerformanceReview id={id} />
    </div>
  );
};

export default ReviewPage;
