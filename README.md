This project shows different ways of rendering apps :

- CSR : https://scale-demo-pokemon.vercel.app/csr
- SSR : https://scale-demo-pokemon.vercel.app/ssr
- SSG : https://scale-demo-pokemon.vercel.app/ssg
- ISR : https://scale-demo-pokemon.vercel.app/isr

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CSR

| Theme | Status |
|---|---|
| Scale | ![#0f0](https://via.placeholder.com/15/0f0/0f0.png)  Easy to scale |
| Performance | ![#ff7f00](https://via.placeholder.com/15/ff7f00/ff7f00.png) "Blank page" then render |
| SEO | ![#f00](https://via.placeholder.com/15/f00/f00.png) Not SEO friendly |
| Data integrity | ![#0f0](https://via.placeholder.com/15/0f0/0f0.png) Fresh data |

## SSR

| Theme | Status |
|---|---|
| Scale | ![#ff7f00](https://via.placeholder.com/15/ff7f00/ff7f00.png)  Harder to scale |
| Performance | ![#ff7f00](https://via.placeholder.com/15/ff7f00/ff7f00.png) Renders directly but waits for server |
| SEO | ![#0f0](https://via.placeholder.com/15/0f0/0f0.png) SEO compliant |
| Data integrity | ![#0f0](https://via.placeholder.com/15/0f0/0f0.png) Fresh data |

## SSG

| Theme | Status |
|---|---|
| Scale | ![#0f0](https://via.placeholder.com/15/0f0/0f0.png)  Easy to scale |
| Performance | ![#0f0](https://via.placeholder.com/15/0f0/0f0.png) Renders directly |
| SEO | ![#0f0](https://via.placeholder.com/15/0f0/0f0.png) SEO compliant |
| Data integrity | ![#f00](https://via.placeholder.com/15/f00/f00.png) Data retrieved once at build time |

## ISR

| Theme | Status |
|---|---|
| Scale | ![#0f0](https://via.placeholder.com/15/0f0/0f0.png)  Easy to scale |
| Performance | ![#0f0](https://via.placeholder.com/15/0f0/0f0.png) Renders directly |
| SEO | ![#0f0](https://via.placeholder.com/15/0f0/0f0.png) SEO compliant |
| Data integrity | ![#ff7f00](https://via.placeholder.com/15/ff7f00/ff7f00.png) Data retrieved at build time and refreshed periodically |