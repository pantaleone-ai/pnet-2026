// @ts-nocheck
import * as __fd_glob_12 from "../features/about/content/web-apps/portfolio-website-v3.mdx?collection=about"
import * as __fd_glob_11 from "../features/about/content/web-apps/portfolio-website-v2.mdx?collection=about"
import * as __fd_glob_10 from "../features/about/content/web-apps/portfolio-website-v1.mdx?collection=about"
import * as __fd_glob_9 from "../features/about/content/web-apps/full-stack-blog-app.mdx?collection=about"
import * as __fd_glob_8 from "../features/about/content/about.mdx?collection=about"
import * as __fd_glob_7 from "../features/about/content/web-apps/portfolio-website-v3.mdx?collection=webApps"
import * as __fd_glob_6 from "../features/about/content/web-apps/portfolio-website-v2.mdx?collection=webApps"
import * as __fd_glob_5 from "../features/about/content/web-apps/portfolio-website-v1.mdx?collection=webApps"
import * as __fd_glob_4 from "../features/about/content/web-apps/full-stack-blog-app.mdx?collection=webApps"
import * as __fd_glob_3 from "../features/privacy/content/privacy.mdx?collection=privacy"
import * as __fd_glob_2 from "../features/experience/content/experience.mdx?collection=experience"
import * as __fd_glob_1 from "../features/education/content/education.mdx?collection=education"
import * as __fd_glob_0 from "../features/blog/content/activate-top-oauth-providers-inapp.mdx?collection=blog"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
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
}>({"doc":{"passthroughs":["extractedReferences","lastModified"]}});

export const about = await create.docs("about", "features/about/content", {}, {"about.mdx": __fd_glob_8, "web-apps/full-stack-blog-app.mdx": __fd_glob_9, "web-apps/portfolio-website-v1.mdx": __fd_glob_10, "web-apps/portfolio-website-v2.mdx": __fd_glob_11, "web-apps/portfolio-website-v3.mdx": __fd_glob_12, });

export const blog = await create.docs("blog", "features/blog/content", {}, {"activate-top-oauth-providers-inapp.mdx": __fd_glob_0, });

export const changelog = await create.docs("changelog", "features/changelog/content", {}, {});

export const education = await create.docs("education", "features/education/content", {}, {"education.mdx": __fd_glob_1, });

export const experience = await create.docs("experience", "features/experience/content", {}, {"experience.mdx": __fd_glob_2, });

export const featuredApps = await create.docs("featuredApps", "features/home/content/featured-apps", {}, {});

export const privacy = await create.docs("privacy", "features/privacy/content", {}, {"privacy.mdx": __fd_glob_3, });

export const projects = await create.docs("projects", "features/projects/content", {}, {});

export const webApps = await create.docs("webApps", "features/about/content/web-apps", {}, {"full-stack-blog-app.mdx": __fd_glob_4, "portfolio-website-v1.mdx": __fd_glob_5, "portfolio-website-v2.mdx": __fd_glob_6, "portfolio-website-v3.mdx": __fd_glob_7, });