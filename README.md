## Stack

- Next.js
- GraphQL
- Apollo
- TypeScript
- CSS Modules
- \*GitHub
- \*Vercel

## Running Locally

First, after clone the project locally, install the dependencies using:

```bash
npm install
```

Secondly, rename `.env.example` to `.env.local`.

Thirdly, run the development server locally using:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dev Notes

- GraphQL architecture is declared on `graphql` folder
- API Routes are declared on `pages/api/graphql` folder due to Next.js architecture for Serverless Functions
- Serverless GraphQL API is exposed on `/api/graphql` route
- The project was deployed on Vercel under [rg-jade.vercel.app](https://rg-jade.vercel.app/) URL for convenience
