import React from 'react';

import type { ArticleData, ArticleSection } from './types';

const ArticleSectionComponent: React.FC<{ section: ArticleSection }> = ({ section }) => {
  switch (section.type) {
    case 'paragraph':
      return <p className="indent-8 mb-4">{section.content}</p>;
    case 'image':
      return <img src={section.src} alt={section.alt ?? ''} className="rounded-xl shadow-md my-6 w-full" />;
    case 'heading':
      const Tag = `h${section.level}` as keyof JSX.IntrinsicElements;

      const headingStyles = {
        h1: 'text-xl font-medium mt-4 mb-2 text-gray-100',
        h2: 'text-lg font-medium mt-3 mb-1 text-gray-200',
        h3: 'text-base font-medium mt-2 mb-1 text-gray-300',
      };

      return <Tag className={headingStyles[`h${section.level}`] ?? ''}>{section.text}</Tag>;
    default:
      return null;
  }
};

type Props = {
  article: ArticleData;
};

export const Article: React.FC<Props> = ({ article }) => {
  return (
    <article className="prose max-w-2xl mx-auto p-4 text-lg leading-relaxed">
      <h1 className="text-3xl font-bold mb-4 text-white">{article.title}</h1>
      {article.createdDate && <p className="text-sm text-gray-500 mb-4">Published on: {article.createdDate}</p>}
      {article.sections.map((section, index) => (
        <ArticleSectionComponent key={index} section={section} />
      ))}
    </article>
  );
};
