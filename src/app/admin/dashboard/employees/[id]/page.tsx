import { employees } from '@/mocks/employees';
import { Typography } from 'antd';

interface pageProps {
  params: { id: string };
}

const EmployeePage: React.FC<pageProps> = async ({ params }) => {
  const { id } = params;
  const employee = employees.find((employee) => employee.id === id);

  return (
    <div className="p-4">
      <div className="flex gap-4 items-end">
        {/* <Typography.Title level={4}>{employee?.name}</Typography.Title>
        <Typography.Title level={5} className="uppercase">
          {employee?.position}
        </Typography.Title> */}
      </div>
    </div>
  );
};
export default EmployeePage;
