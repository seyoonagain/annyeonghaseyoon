import { Project } from '@/interfaces/project';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const projectsDirectory = join(process.cwd(), '_projects');

export const getProjectSlugs = () => {
  return fs.readdirSync(projectsDirectory);
};

export const getProjectBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Project;
};

export const getAllProjects = (): Project[] => {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map(slug => getProjectBySlug(slug))
    .sort((project1, project2) => (project1.endedAt < project2.endedAt ? -1 : 1));
  return projects;
};
