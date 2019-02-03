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
  react: {
    id: 4,
    name: 'react',
  },
  go: {
    id: 5,
    name: 'go',
  },
  rust: {
    id: 6,
    name: 'rust',
  },
  swift: {
    id: 7,
    name: 'swift',
  },
};
