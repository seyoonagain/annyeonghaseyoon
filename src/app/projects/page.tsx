import { getAllProjects } from '@/lib/projectApi';
import Link from 'next/link';

const Portfolio = () => {
  const projects = getAllProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl">
      {projects
        .slice()
        .reverse()
        .map(({ description, slug, team, image, techStack }, index) => (
          <div key={slug} className="flex flex-col gap-4">
            <div>
              <span className="relative top-2 text-6xl md:text-7xl tracking-tightest font-extralight">
                {(projects.length - index).toString().padStart(3, '0')}
              </span>
              <Link
                href={`/projects/${slug}`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className={`flex flex-row sm:flex-col items-start gap-2 shrink-0 aspect-project px-4 py-1 border cursor-pointer`}
                aria-label={`Go to ${slug}: ${description}`}
              />
            </div>
            <div className="flex justify-between items-c grow w-full pt-1 pr-16 sm:pr-24 md:pr-14">
              <span className="text-xs">( {team} )</span>
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold text-lg sm:text-xl lg:text-2xl tracking-tighter">
                  {description}
                </span>
                <ul className="flex flex-col text-xs">
                  {techStack.map(tech => (
                    <li key={`${slug}-${tech}`} className="shrink-0 list-none">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
