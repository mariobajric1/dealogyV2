// import nextConnect from 'next-connect';
// import multer from 'multer';
// // import { v2 as cloudinary } from 'cloudinary';
// import middleware from '../../../middlewares/middleware';

// const handler = nextConnect();



// handler.use(middleware);

// handler.get(async (req, res) => res.json({ user: extractUser(req) }));

// handler.put(async (req, res) => {
//   if (!req.user) {
//     req.status(401).end();
//     return;
//   }

//   const { name, bio, profilePicture } = req.body;
//   await req.db.collection('users').updateOne(
//     { _id: req.user._id },
//     {
//       $set: {
//         ...(name && { name }),
//         bio: bio || '',
//         ...(profilePicture && { profilePicture }),
//       },
//     },
//   );
//   res.json({ user: { name, bio, profilePicture } });
// });

// export const config = {
//   api: {
//     bodyParser: true,
//   },
// };

// export default handler;
