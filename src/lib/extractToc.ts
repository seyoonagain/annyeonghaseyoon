import { remark } from 'remark';
import { visit } from 'unist-util-visit';

type TocItem = {
  id: string;
  text: string;
  level: number;
};

const extractToc = async (markdown: string): Promise<TocItem[]> => {
  const items: TocItem[] = [];

  const tree = remark().parse(markdown);

  visit(tree, 'heading', node => {
    if (node.depth >= 2 && node.depth <= 4) {
      const text = node.children
        .filter(child => child.type === 'text')
        .map(child => child.value)
        .join('');

      const id = text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\uAC00-\uD7AF-]/g, '')
        .replace(/-+=→/g, '-')
        .replace(/^-|-$/g, '');

      items.push({ id, text, level: node.depth });
    }
  });

  return items;
};

export default extractToc;
