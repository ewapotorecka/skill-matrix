import EmployeeDetails from '@/components/adminDashboard/employees/Details';

interface pageProps {
  params: { id: string };
}

const EmployeePage: React.FC<pageProps> = async ({ params }) => {
  const { id } = params;

  return (
    <div className="p-4">
      <EmployeeDetails id={id} />
    </div>
  );
};
export default EmployeePage;
