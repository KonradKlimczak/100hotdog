export type ArticleSection =
  | {
      type: 'paragraph';
      content: string;
    }
  | {
      type: 'image';
      src: string;
      alt?: string;
    }
  | {
      type: 'heading';
      level: 1 | 2 | 3;
      text: string;
    }
  | {
      type: 'link';
      href: string;
      text: string;
      target?: string;
    };

export type ArticleData = {
  title: string;
  createdDate?: string;

  sections: ArticleSection[];
};
