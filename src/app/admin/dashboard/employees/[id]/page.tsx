import EmployeeDetails from '@/components/adminDashboard/employees/Details';
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
      <EmployeeDetails id={id} />
    </div>
  );
};
export default EmployeePage;
