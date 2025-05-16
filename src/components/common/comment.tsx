'use client';

import Giscus from '@giscus/react';

type Props = {
  loading?: 'eager' | 'lazy';
  reactionsEnabled?: '0' | '1';
};

export const Comment = ({ loading = 'lazy', reactionsEnabled = '1' }: Props) => {
  return (
    <Giscus
      id="comments"
      repo="seyoonagain/annyeonghaseyoon"
      repoId="R_kgDOOEVgXg"
      category="General"
      categoryId="DIC_kwDOOEVgXs4CqNUe"
      mapping="pathname"
      strict="0"
      reactionsEnabled={reactionsEnabled}
      emitMetadata="0"
      inputPosition="top"
      theme="light_tritanopia"
      lang="ko"
      loading={loading}
    />
  );
};
