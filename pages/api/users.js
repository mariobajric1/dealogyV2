import nextConnect from 'next-connect';
import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/normalizeEmail';
import bcrypt from 'bcryptjs';
import { nanoid } from 'nanoid';
import middleware from '../../middlewares/middleware';
import { extractUser } from '../../lib/api-helpers';
import { redirect } from 'next/dist/next-server/server/api-utils';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  let number = 0;
  if (req.body.number){
    number = req.body.number;
  }
  const { name, password, company, dob } = req.body;
  const email = normalizeEmail(req.body.email);
  if (!isEmail(email)) {
    res.status(400).send('The email you entered is invalid.');
    return;
  }
  if (!password || !name || !company ) {
    res.status(400).send('Missing field(s)');
    return;
  }
  if (number.length != 10){
    res.status(400).send('Phone number invalid')
  }
  if ((await req.db.collection('users').countDocuments({ email })) > 0) {
    res.status(403).send('The email has already been used.');
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await req.db
    .collection('users')
    .insertOne({
      _id: nanoid(12),
      email,
      password: hashedPassword,
      name,
      company,
      number,
      emailVerified: false,
      bio: '',
      profilePicture: null,
      ethAddress,
      qrCode
      
    })
    .then(({ ops }) => ops[0]);
  req.logIn(user, (err) => {
    if (err) throw err;
    res.status(201).json({
      user: extractUser(req),
    });
  });
});

export default handler;
