import nextConnect from 'next-connect';
import multer from 'multer';
// import { v2 as cloudinary } from 'cloudinary';
import middleware from '../../../middlewares/middleware';
import { extractUser } from '../../../lib/api-helpers';

const upload = multer({ dest: '/tmp' });
const handler = nextConnect();

/* eslint-disable camelcase */
// const {
//   hostname: cloud_name,
//   username: api_key,
//   password: api_secret,
// } = new URL(process.env.CLOUDINARY_URL);

// cloudinary.config({
//   cloud_name,
//   api_key,
//   api_secret,
// });

handler.use(middleware);

handler.get(async (req, res) => res.json({ user: extractUser(req) }));

handler.put(async (req, res) => {
  if (!req.user) {
    req.status(401).end();
    return;
  }
//   let profilePicture;
//   if (req.file) {
//     const image = await cloudinary.uploader.upload(req.file.path, {
//       width: 512,
//       height: 512,
//       crop: 'fill',
//     });
//     profilePicture = image.secure_url;
//   }
  const { name, bio, profilePicture, qrCode } = req.body;
  await req.db.collection('users').updateOne(
    { _id: req.user._id },
    {
      $set: {
        ...(name && { name }),
        bio: bio || '',
        ...(profilePicture && { profilePicture }),
        ...(qrCode && {qrCode})
      },
    },
  );
  res.json({ user: { name, bio, profilePicture,qrCode } });
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default handler;
