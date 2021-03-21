

<h3>git clone https://github.com/mariobajric1/dealogyV2.git</h3>
<h3>npm install</h3>
<h3>npm run dev</h3>

**lastly run http://localhost:3000/ in chrome

<h3 align="center">Dependencies</h3>

This project uses the following dependencies:

- `next.js` - v9.3 or above required for **API Routes** and new [**new data fetching method**](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering).
- `react` - v16.8 or above required for **react hooks**.
- `react-dom` - v16.8 or above.
- `swr` - required for state management
- `mongodb` - may be replaced by `mongoose`.
- `passport`, `passport-local` - required after for authentication
- `next-connect` - recommended if you want to use Express/Connect middleware and easier method routing.
- `express-session`, `connect-mongo` - required for session, may be replaced with other session libraries such as `cookie-session` or `next-iron-session`.
- `bcryptjs` - optional, may be replaced with any password-hashing library. `argon2` recommended.
- `validator` - optional but recommended.
- `multer` - may be replaced with any middleware that handles `multipart/form-data`

**for image/video hosting and email marketing**

- `cloudinary` - optional, **only if** you are using [Cloudinary](https://cloudinary.com) for image upload.
- `@sendgrid/mail` - optional, **only if** you are using [SendGrid](https://sendgrid.com/) to send emails.

<h3 align="center">Environmental variables</h3>

The environment variables [will be inlined during build time](https://nextjs.org/docs#build-time-configuration) and thus should not be used in front-end codebase.

Required environmental variables in this project include:

- `process.env.MONGODB_URI` The MongoDB Connection String (with credentials)
- `process.env.EMAIL_FROM` The email address to send your emails from.
- `process.env.DB_NAME` The name of the MongoDB database to be used.
- `process.env.WEB_URI` The *URL* of your web.
- `process.env.SESSION_SECRET` (only if you use `express-session`) The secret to be used in `express-session`.
- `process.env.CLOUDINARY_URL` (optional, Cloudinary **only**) Cloudinary environment variable for configuration. See [this](https://cloudinary.com/documentation/node_integration#configuration).
- `process.env.SENDGRID_API_KEY` (optional, SendGrid **only**) SendGrid API Key. See [this](https://sendgrid.com/docs/ui/account-and-settings/api-keys/).

<h3 align="center">Development</h3>

Start the development server by running `yarn dev` or `npm run dev`. The project supports using `.env`. Getting started by create a `.env` file with the above variables.

#### `.env`


In production, it is recommended to set the environment variables using the options provided by your cloud/hosting providers. **Do not use or commit `.env`**.


<h2 align="center">
  License
</h2>

<div align="center">
  
  [MIT](LICENSE)
  
</div>
