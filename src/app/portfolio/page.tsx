import { getAllProjects } from '@/lib/projectApi';
import Link from 'next/link';

const Portfolio = () => {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col-reverse sm:flex-row-reverse justify-center w-full sm:max-w-2xl animate-bgColorShift">
      {projects.map(({ description, slug, team }, index) => (
        <Link
          href={`/portfolio/projects/${slug}`}
          key={slug}
          className="flex flex-row sm:flex-col items-start gap-2 shrink-0 relative w-full sm:w-1/3 h-24 sm:h-80 px-4 py-1 border border-x-0 sm:border-x sm:border-y-0 not-first:border-b-0 sm:not-first:border-r-0 bg-white hover:bg-transparent cursor-pointer"
          aria-label={`Go to ${slug}: ${description}`}
        >
          <span className="w-full max-w-52 text-6xl sm:text-7xl tracking-tightest font-extralight">
            {(index + 1).toString().padStart(3, '0')}
          </span>

          <div className="flex flex-col items-end justify-end grow absolute sm:static bottom-1 right-4 w-full pt-1">
            <span className="text-xs text-zinc-800">( {team} )</span>
            <span className="font-semibold text-base sm:text-xl text-zinc-800 tracking-tighter">
              {description}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Portfolio;
