## 🚨 Tutorial

This repository contains the corresponding tutorial available on our YouTube channel, <a href="https://www.youtube.com/@CodeScrapperOfficial/videos" target="_blank"><b>Code Scrapper</b></a>.

## <a name="introduction">🤖 Introduction</a>

Our Car rental is a streamlined project management tool designed to enhance productivity and team collaboration. It offers intuitive free map location, stripe integration and smtp email send capabilities to adapt to various workflows. Ideal for individuals and teams looking for an efficient way to online order car for rent and pay.

## <a name="tech-stack">Tech Stack</a>

- Next.js
- MongoDB
- Mongoose
- free map location
- stripe
- SMTP
- Shadcn
- Tailwind Css

## <a name="quick-start">Integration and Installation Process</a>

Follow these steps to set up the project locally on your device.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

**Clone this Project**

```bash
git clone https://github.com/CodeScrapper1/car-rental-app.git
cd car-rental-app
```

**Installation**

Install dependencies using yarn:

```bash
yarn
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
STRIPE_SECRET_KEY=""
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_DATABASE_URL=""


NEXT_PUBLIC_SMTP_HOST=smtp.gmail.com
NEXT_PUBLIC_SMTP_PORT=465
NEXT_PUBLIC_SMTP_SERVICE=gmail
NEXT_PUBLIC_SMTP_MAIL=
NEXT_PUBLIC_SMTP_EMAIL=
NEXT_PUBLIC_SMTP_PASSWORD=
```

**Running the Project using yarn**

```bash
yarn run dev
```
