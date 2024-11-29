# Cornerstone Take Home Assignment

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Todo

- [x] Load csv into data store
- [x] Create /api/v1/diagnoses/summary endpoint
- [x] Add App bar to top of page
- [x] Add graphs for Summary component and hook up
- [ ] Add DiagnosisTable component with Data Grid
- [ ] Add searchStore method to data store
- [ ] Add pagination to DiagnosisTable
- [ ] Add filters to DiagnosisTable
- [ ] Turn on edit functionality for Data Grid
- [ ] Add updateStore method to data store
- [ ] Hook up Data Grid cell editing to data store
- [ ] Add flags for each row in data store
- [ ] Add column for flagging rows
