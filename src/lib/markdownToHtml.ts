import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';
import { transformerNotationDiff } from '@shikijs/transformers';

const markdownToHtml = async (markdown: string): Promise<string> => {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeShiki, {
      theme: 'everforest-light',
      inline: 'tailing-curly-colon',
      transformers: [transformerNotationDiff()],
    })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
};

export default markdownToHtml;
