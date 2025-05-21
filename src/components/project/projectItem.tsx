import { Project } from '@/interfaces/project';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  project: Project;
  number: number;
};

export const ProjectItem = ({
  project: { description, slug, team, image, techStack },
  number,
}: Props) => {
  return (
    <div key={slug} className="flex flex-col gap-4">
      <div>
        <span className="relative top-2 text-6xl md:text-7xl tracking-tightest font-extralight">
          {number.toString().padStart(3, '0')}
        </span>
        <Link
          href={`/projects/${slug}`}
          className={`flex flex-row sm:flex-col items-start gap-2 shrink-0 relative aspect-project px-4 py-1 border cursor-pointer`}
          aria-label={`Go to ${slug}: ${description}`}
        >
          <Image
            src={image}
            alt={`${slug} preview`}
            fill
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 640px"
            priority
          />
        </Link>
      </div>
      <div className="flex justify-between items-c grow w-full pt-1 pr-16 sm:pr-24 md:pr-14">
        <span className="text-xs">( {team} )</span>
        <div className="flex flex-col items-start gap-2">
          <span className="font-medium text-lg sm:text-xl lg:text-2xl tracking-tighter">
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
  );
};
