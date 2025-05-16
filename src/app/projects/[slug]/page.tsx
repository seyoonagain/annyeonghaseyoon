import { Comment, Content, DateFormatter } from '@/components/common';
import { Link, TechStack } from '@/components/project';
import markdownToHtml from '@/lib/markdownToHtml';
import { getProjectBySlug } from '@/lib/projectApi';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

const Project = async ({ params }: Props) => {
  console.log('project page started');

  const slug = (await params).slug;
  console.log('got slug from params');
  const project = getProjectBySlug(slug);
  console.log('got project by slug');

  if (!project) return notFound();

  const { team, description, github, demo, techStack, startedAt, endedAt, image, content } =
    project;

  const contentHtml = await markdownToHtml(content);
  console.log('converted to html');

  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl h-full pt-6">
      <div>
        <div className="flex md:flex flex-col items-start sm:items-center sm:absolute sm:top-1 sm:left-1/2 sm:-translate-x-1/2">
          <div className="flex leading-5">
            <DateFormatter dateString={startedAt} />
            {'\xa0-\xa0'}
            <DateFormatter dateString={endedAt} />
          </div>
          <p className="hidden sm:block text-sm">( {team} )</p>
        </div>

        <div className="flex flex-col sm:absolute sm:top-1.5 sm:left-8 w-full">
          <h2 className="text-2xl lg:text-3xl tracking-tighter">{description}</h2>
          <p className="block sm:hidden text-sm">( {team} )</p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-0 sm:gap-2">
        <ul className="flex flex-wrap gap-2 w-fit mt-2 list-none">
          {techStack.map(tech => (
            <TechStack key={tech} tech={tech} />
          ))}
        </ul>

        <div className="flex gap-2">
          {[demo, github].map(link => (
            <Link key={link} link={link} />
          ))}
        </div>
      </div>

      <div className="w-full aspect-project relative sm:right-1">
        <div className="w-full h-full absolute top-1 sm:top-2 left-1 sm:left-2 bg-zinc-100 border"></div>
        <Image className="z-10 border bg-white object-cover" src={image} alt={slug} fill priority />
      </div>

      <Content html={contentHtml} />

      <hr className="mb-10" />
      <Comment />
    </div>
  );
};

export default Project;
