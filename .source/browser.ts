// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
} & {
  DocData: {
    about: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
    blog: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
    changelog: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
    education: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
    experience: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
    featuredApps: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
    privacy: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
    projects: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
    webApps: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
  }
}>();
const browserCollections = {
  about: create.doc("about", {"about.mdx": () => import("../features/about/content/about.mdx?collection=about"), "web-apps/full-stack-blog-app.mdx": () => import("../features/about/content/web-apps/full-stack-blog-app.mdx?collection=about"), "web-apps/portfolio-website-v1.mdx": () => import("../features/about/content/web-apps/portfolio-website-v1.mdx?collection=about"), "web-apps/portfolio-website-v2.mdx": () => import("../features/about/content/web-apps/portfolio-website-v2.mdx?collection=about"), "web-apps/portfolio-website-v3.mdx": () => import("../features/about/content/web-apps/portfolio-website-v3.mdx?collection=about"), }),
  blog: create.doc("blog", {"activate-top-oauth-providers-inapp.mdx": () => import("../features/blog/content/activate-top-oauth-providers-inapp.mdx?collection=blog"), }),
  changelog: create.doc("changelog", {}),
  education: create.doc("education", {"education.mdx": () => import("../features/education/content/education.mdx?collection=education"), }),
  experience: create.doc("experience", {"experience.mdx": () => import("../features/experience/content/experience.mdx?collection=experience"), }),
  featuredApps: create.doc("featuredApps", {}),
  privacy: create.doc("privacy", {"privacy.mdx": () => import("../features/privacy/content/privacy.mdx?collection=privacy"), }),
  projects: create.doc("projects", {}),
  webApps: create.doc("webApps", {"full-stack-blog-app.mdx": () => import("../features/about/content/web-apps/full-stack-blog-app.mdx?collection=webApps"), "portfolio-website-v1.mdx": () => import("../features/about/content/web-apps/portfolio-website-v1.mdx?collection=webApps"), "portfolio-website-v2.mdx": () => import("../features/about/content/web-apps/portfolio-website-v2.mdx?collection=webApps"), "portfolio-website-v3.mdx": () => import("../features/about/content/web-apps/portfolio-website-v3.mdx?collection=webApps"), }),
};
export default browserCollections;