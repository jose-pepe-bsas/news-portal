# Technical documentation of the 'news portal'

## US

1. As reader, i want to browse through recent or tagged news posts to pick one for me to read and either entertain me or learn something.
  - Reader MUST NOT be able to use creator features
2. As creator, i want to check creator team's input box for inputs and news to inspire me and then write a post about some on it.
3. As creator, i want to delete an article i've written.
  - Creator MUST NOT be able to delete a post he does'nt own.
4. As reader/creator, i want to publish comments in a post
5. As creator, i want to save in the creator team's draft a post i'm writing for me or any other creator to keep working on it in the future.

## Required software features


1. CMS
2. User log/sign
3. User roles
4. Creator's panel
5. Content searching

## Stack


- Node
  - Since it is technically easier for me to get a minimal version of something for a web user to start testing and validating the business idea.
- Strapi
  - Scaffolding that facilitates the early delivery of a minimal version for the interested party to evaluate a more tangible product than the initial project that he sketched for me.
  - Headless CMS: Given the open possibility of giving the system a consumption by a mobile application, then by use srappi we can take advantage of a headless system to avoid compatibility problems between devices and between user interface applications.
- JS
  - There are several useful tools that use the JS platform for web development. Also, if this were to grow, then it would be easier for me to get other developers on the project.
- Next.js
  - Seo Optimization
  - SSR options, allowing faster first-view loading
- Web Components
  - allows to template the well known news site content types (since they are handled by categories) and standardizes the navigation for the user saving me duplication of presentation code.
- n8n
  - Provides useful ia agents to capture inputs for redaction team.


## Arch

Use web client-server arch style, incorporing SPA web app arch style.

## Directory System

. **Project root**
├── docs **Where static docs lives in**
│   ├── docs
│   ├── mkdocs.yml
│   └── site
├── news_portal **Strappi Scaffolding boilerplates**
│   ├── config
│   ├── database
│   ├── dist
│   ├── favicon.png
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   ├── README.md
│   ├── src
│   ├── tsconfig.json
│   └── types
├── node_modules
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
└── README.md **Root project documentation GIThub aimed**

13 directories, 10 files
