import { ProjectList } from '@/components/project/projectList';
import { getAllProjects } from '@/lib/projectApi';

const Portfolio = () => {
  const projects = getAllProjects();

  return <ProjectList projects={projects} />;
};

export default Portfolio;
