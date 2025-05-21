'use client';

import { ProjectItem } from '@/components/project/projectItem';
import { Project } from '@/interfaces/project';

type Props = {
  projects: Project[];
};

export const ProjectList = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl">
      {projects
        .slice()
        .reverse()
        .map((project, index) => (
          <ProjectItem key={project.slug} project={project} number={projects.length - index} />
        ))}
    </div>
  );
};
