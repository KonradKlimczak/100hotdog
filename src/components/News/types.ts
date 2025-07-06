export type ArticleSection =
  | {
      type: 'paragraph';
      content: string;
      flat?: boolean;
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
    }
  | {
      type: 'list';
      items: string[];
      ordered?: boolean;
    };

export type ArticleData = {
  title: string;
  createdDate?: string;

  sections: ArticleSection[];
};
