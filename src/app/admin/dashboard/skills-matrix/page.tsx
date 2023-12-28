import Table from '@/components/employees/Table';
import Matrix from '@/components/skillsMatrix/matrix';
import React from 'react';

const SkillsMatrix: React.FC = () => {
  return (
    <div className="p-8">
      {' '}
      <Matrix />
    </div>
  );
};

export default SkillsMatrix;
