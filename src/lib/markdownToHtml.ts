import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';

const markdownToHtml = async (markdown: string): Promise<string> => {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: 'everforest-light',
      onVisitLine(node) {
        node.properties.className = ['line'];
      },
      onVisitHighlightedLine(node) {
        node.properties.className?.push('highlighted');
      },
    })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
};

export default markdownToHtml;
