import { employees } from '@/mocks/employees';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface pageProps {
  params: { id: string };
}

const EmployeePage: React.FC<pageProps> = async ({ params }) => {
  const { id } = params;
  const employee = employees.find((employee) => employee.id === id);

  return (
    <Container className="p-4">
      <Box className="flex gap-4 items-end">
        <Typography variant="h4">{employee?.name}</Typography>
        <Typography variant="h6" className="uppercase">
          {employee?.position}
        </Typography>
      </Box>
    </Container>
  );
};
export default EmployeePage;
