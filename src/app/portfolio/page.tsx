import { getAllProjects } from '@/lib/projectApi';
import Link from 'next/link';

const Portfolio = () => {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col-reverse sm:flex-row-reverse animate-bgColorShift">
      {projects.map(({ description, slug, team }, index) => (
        <Link
          href={`/portfolio/projects/${slug}`}
          key={slug}
          className="flex flex-col items-start gap-2 shrink-0 px-4 py-1 border border-x-0 not-first:border-b-0 sm:not-first:border-b bg-white hover:bg-transparent font-manrope cursor-pointer"
          aria-label={`Go to ${slug}: ${description}`}
        >
          <span className="text-6xl tracking-tightest font-extralight">
            {(index + 1).toString().padStart(3, '0')}
          </span>
          <div className="flex flex-col pt-1 tracking-tight">
            <span className="text-zinc-800">{description}</span>
            <span className="text-xs text-zinc-800">{team}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Portfolio;
