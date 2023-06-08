Tech Stack:
NextJS - latest
Typescript - latest
Material UI - latest
React Testing Library
Jest
0 vulnerabilities

Some info about this repo:
This repo has been created from scratch uses latest nextjs
It has the new next js routing, I have used dynamic nested routing.
The app redirects from root page to /admin/users route
It has three routes users., user albums, and useralbum photos
Modular structure, common components are separate

If I would have provided with more time span than I would have worked on the following tasks:
I would have used HOC for render hijacking (for displaying the loading)
I would have created separate file for all the side effects like api calls
Improved test coverage
Performance optimization (pure components, memoization etc)
More refactoring
An image slider to display original size images one by one in dialog box
Simple layout with header and drawer is just for demonstration, there is a global layout then admin specific layout
On the photos listing page, although images are being lay loaded but we can use virtualized list for better performance
I would have wrapped next Image component in another because it increases maintainability. (the same can used for other such components)
A better readme.md  :)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
