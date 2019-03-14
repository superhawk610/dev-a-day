import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { environment } from '../../environments/environment';

// map from `<meta>` names to their content
interface MetaDefinitions {
  [name: string]: string;
}

interface TwitterMetaDefinitions {
  site: string;
  title: string;
  description: string;
  image: number; // should just be the article `id`
}

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  prefix = 'dev-a-day';

  constructor(private titleService: Title, private metaService: Meta) {}

  setDocumentTitle(title: string) {
    if (title) {
      return this.titleService.setTitle(`${this.prefix} | ${title}`);
    }
    return this.titleService.setTitle(this.prefix);
  }

  setDocumentMeta(meta: MetaDefinitions, prefix = '') {
    this.metaService.addTags(
      Object.keys(meta).map(name => ({
        name: `${prefix}${name}`,
        content: meta[name].replace(/\r?\n?\s{2,}/g, ' '),
      })),
    );
  }

  setDocumentTwitterMeta(meta: TwitterMetaDefinitions) {
    const previewImage = `${String(meta.image).padStart(3, '0')}.png`;
    const imageUrl = `${
      environment.appBaseHref
    }/assets/previews/${previewImage}`;

    // set Twitter-specific tags
    this.setDocumentMeta(
      {
        ...meta,
        card: 'summary',
        image: imageUrl,
      },
      'twitter:',
    );

    // set OG tags
    this.setDocumentMeta(
      {
        type: 'summary',
        description: meta.description,
        title: meta.title,
        image: imageUrl,
      },
      'og:',
    );
  }
}
