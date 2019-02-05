import { Tag } from './app/models/tag.model';

export const API_ROOT = '/assets';

export const NAVIGATION_ROUTES = [
  { name: 'Articles', path: '/articles' },
  { name: 'Tags', path: '/tags' },
];

export const TAGS: { [name: string]: Tag } = {
  javascript: {
    id: 1,
    name: 'javascript',
  },
  ocaml: {
    id: 2,
    name: 'ocaml',
  },
  angular: {
    id: 3,
    name: 'angular',
  },
  fp: {
    id: 4,
    name: 'fp',
  },
  go: {
    id: 5,
    name: 'go',
  },
  rust: {
    id: 6,
    name: 'rust',
  },
  react: {
    id: 7,
    name: 'react',
  },
  swift: {
    id: 8,
    name: 'swift',
  },
};
