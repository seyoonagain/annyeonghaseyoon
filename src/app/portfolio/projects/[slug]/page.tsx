import { Content, DateFormatter } from '@/components/common';
import { Link } from '@/components/project';
import markdownToHtml from '@/lib/markdownToHtml';
import { getProjectBySlug } from '@/lib/projectApi';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { TechStack } from '../../../../components/project/techStack';

type Props = {
  params: Promise<{ slug: string }>;
};

const Project = async ({ params }: Props) => {
  const slug = (await params).slug;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  const { team, description, github, demo, techStack, startedAt, endedAt, image } = project;

  const content = await markdownToHtml(project.content);

  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl h-full pt-6">
      <div className="flex flex-col">
        <div className="flex">
          <DateFormatter dateString={startedAt} />
          {'\xa0~\xa0'}
          <DateFormatter dateString={endedAt} />
        </div>
        <div className="flex flex-col w-full font-gothicA1 tracking-tightest">
          <h2 className="text-3xl">{description}</h2>
          <p>( {team} )</p>
        </div>
      </div>

      <div className="flex gap-8">
        <section className="flex flex-col tracking-tight">
          <h3 className="font-manrope font-semibold">TECH STACKS</h3>
          <ul className="flex flex-col list-none">
            {techStack.map(tech => (
              <TechStack key={tech} tech={tech} />
            ))}
          </ul>
        </section>

        <section className="flex flex-col tracking-tight">
          <h3 className="font-manrope font-semibold">LINKS</h3>
          <div className="flex flex-col">
            {[demo, github].map(link => (
              <Link key={link} link={link} />
            ))}
          </div>
        </section>
      </div>

      <div className="w-full aspect-project relative right-0 sm:right-1">
        <div className="w-full h-full absolute top-1 sm:top-2 left-1 sm:left-2 bg-zinc-100 border"></div>
        <Image className="z-10 border bg-white object-cover" src={image} alt={slug} fill priority />
      </div>

      <Content html={content} />
    </div>
  );
};

export default Project;
