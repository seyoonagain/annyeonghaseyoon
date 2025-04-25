export const hasNoHeader = (pathname: string) =>
  pathname.includes('posts') || pathname.includes('projects');
