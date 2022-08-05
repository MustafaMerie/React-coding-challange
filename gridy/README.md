<!-- ABOUT THE PROJECT -->
## About The Project

Gridy is a fully responsive, beautifully designed and simple NextJS app that allows viewing and interacting with a grid of photos from Unsplash API.

### Project Status
This project is Completed as v1. Displaying a grid of photos with the ability of infinite scrolling, using a lazy-load strategy to fetch additional images as the user scrolls. Also, the user has the ability to see the full photo in a full width with more information about it by clicking on the photo.


### Built With
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

### Project Screen Shot(s)
![Screenshot](https://i.ibb.co/KGBsncw/Screen-Shot-2022-08-05-at-8-22-33-PM.png)

![Screenshot](https://i.ibb.co/Ns19ryj/Screen-Shot-2022-08-05-at-8-23-00-PM.png)



### Getting Started

First, make sure that you are in the root directory, then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**NOTE:** The project requires ACCESS KEY for Unsplash API in order to run.  You can implement your own access key by creating `.env` file in the root folder, then implement the access key under the name of  `NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY`.

> NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY=BOPdHe**************************

<!-- MARKDOWN LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

