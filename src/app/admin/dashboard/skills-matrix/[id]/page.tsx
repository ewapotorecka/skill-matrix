import SkillDetailed from '@/components/adminDashboard/skillsMatrix/skillDetailed';
import { skills } from '@/mocks/skills';

interface pageProps {
  params: { id: string };
}

const EmployeePage: React.FC<pageProps> = async ({ params }) => {
  const { id } = params;
  const skill = skills.find((skill) => skill.id === id);

  return <div className="p-4">{skill && <SkillDetailed data={skill} />}</div>;
};
export default EmployeePage;
