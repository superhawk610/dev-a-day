import { Router } from 'express';

import { articles } from './articles';

export const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.json({ message: 'Houston, we have liftoff.' });
});

apiRouter.get('/articles', (req, res) => {
  res.json(articles.map(article => ({
    ...article,
    // reduce response size by hiding body
    body: undefined,
  })));
});

apiRouter.get('/articles/:slug', (req, res) => {
  const { slug } = req.params;
  const article = articles.find(a => a.slug === slug);
  if (article) return res.json(article);
  res.status(404).json({ error: 'Article not found :(' });
});
