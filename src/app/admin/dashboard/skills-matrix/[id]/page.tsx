import SkillDetailed from '@/components/adminDashboard/skillsMatrix/skillDetailed';

interface pageProps {
  params: { id: string };
}

const EmployeePage: React.FC<pageProps> = async ({ params }) => {
  const { id } = params;

  return <div className="p-4">{id && <SkillDetailed id={id} />}</div>;
};
export default EmployeePage;
