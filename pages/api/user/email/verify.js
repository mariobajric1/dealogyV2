import crypto from 'crypto';
import sgMail from '@sendgrid/mail';
import nextConnect from 'next-connect';
import middleware from '../../../../middlewares/middleware';
import sendEmail from '../../../../utils/index.js';

sgMail.setApiKey("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");//"process.env.SENDGRID_API_KEY");

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  if (!req.user) { res.json(401).send('you need to be authenticated'); return; }
  const token = crypto.randomBytes(32).toString('hex');
  await req.db.collection('tokens').insertOne({
    userId: req.user._id,
    tokenId: token,
    createdAt: new Date(Date.now()),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24)
  });
  //console.log("Sending email to " + req.user.email )
  // const msg = {
  //   to: req.user.email,
  //   from: process.env.EMAIL_FROM,
  //   html: `
  //     <div>
  //       <p>Hello, ${req.user.name}</p>
  //       <p>Please follow <a href="${process.env.WEB_URI}/verify-email/${token}">this link</a> to confirm your email.</p>
  //     </div>
  //     `,
  // };
  const subject = "Verify your account for Dealogy.com";
  const to = req.user.email;
  const from = "j.weickert32@gmail.com";
  const link = "http://localhost:3000/api/user/email/verify?query="+token;
  console.log("5")
  const text = "Hi " + req.user.name + ", \n Please click on the link below to verify your account: \n  " + link + "\n If you did not request this, please ignore this email.";
  // let html = 'test email';
  console.log("6")
  const packed = {to, from, subject, text}
  console.log("sending email now")
  sendEmail(packed)
  console.log("return from sending email")
  res.end('ok');
});


handler.get(async (req, res) => {
  try {
    const { token } = req.query;
    const { value: tokenDoc } = await req.db
      .collection('tokens')
      .findOneAndDelete({ token });

    if (!tokenDoc) {
      res.status(401).json({
        ok: false,
        message: 'This link may have been expired.',
      });
      return;
    }

    await req.db
      .collection('users')
      .updateOne({ _id: tokenDoc.userId }, { $set: { emailVerified: true } });

    res.json({
      ok: true,
      message: 'Success! Thank you for verifying your email address. You may close this page.',
    });
  } catch (error) {
    res.json({
      ok: false,
      message: error.toString(),
    });
  }
});
// handler.get = async (req, res) => {
//   console.log(req.id);
//   if(!req.user.tokenId) return res.status(400).json({message: "We were unable to find a user for this token."});
//   console.log("Verifying user");
//   try {
//       // Find a matching token
//       const token = await fetch(`/tokens/${req.params.tokenId}`);

//       if (!token) return res.status(400).json({ message: 'We were unable to find a valid token. Your token my have expired.' });

//       // If we found a token, find a matching user
//       await fetch(`/user/${token.userId}`, (err, user) => {
//           if (!user) return res.status(400).json({ message: 'We were unable to find a user for this token.' });

//           if (user.isVerified) return res.status(400).json({ message: 'This user has already been verified.' });

//           // Verify and save the user
//           user.isVerified = true;
//           user.save(function (err) {
//               if (err) return res.status(500).json({message:err.message});

//               res.status(200).send("The account has been verified. Please log in.");
//           });
//       });
//   } catch (error) {
//       res.status(500).json({message: error.message})
//   }
// };

export default handler;

/*
// ===EMAIL VERIFICATION
// @route GET api/verify/:token
// @desc Verify token
// @access Public
handler.verify = async (req, res) => {
  if(!req.params.token) return res.status(400).json({message: "We were unable to find a user for this token."});

  try {
      // Find a matching token
      const token = await Token.findOne({ token: req.params.token });

      if (!token) return res.status(400).json({ message: 'We were unable to find a valid token. Your token my have expired.' });

      // If we found a token, find a matching user
      User.findOne({ _id: token.userId }, (err, user) => {
          if (!user) return res.status(400).json({ message: 'We were unable to find a user for this token.' });

          if (user.isVerified) return res.status(400).json({ message: 'This user has already been verified.' });

          // Verify and save the user
          user.isVerified = true;
          user.save(function (err) {
              if (err) return res.status(500).json({message:err.message});

              res.status(200).send("The account has been verified. Please log in.");
          });
      });
  } catch (error) {
      res.status(500).json({message: error.message})
  }
};

// @route POST api/resend
// @desc Resend Verification Token
// @access Public
handler.resendToken = async (req, res) => {
  try {
      const { email } = req.body;

      const user = await User.findOne({ email });

      if (!user) return res.status(401).json({ message: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});

      if (user.isVerified) return res.status(400).json({ message: 'This account has already been verified. Please log in.'});

      await sendVerificationEmail(user, req, res);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
};

async function sendVerificationEmail(user, req, res){
  try {
      const token = user.generateVerificationToken();

      // Save the verification token
      await token.save();

      let subject = "Account Verification Token";
      let to = user.email;
      let from = process.env.FROM_EMAIL; // Make sure to verify this email as a single-sender in SendGrid
      let link="http://"+req.headers.host+"/api/auth/verify/"+token.token;
      let html = `<p>Hi ${user.username}<p><br><p>Please click on the following <a href="${link}">link</a> to verify your account.</p> 
                <br><p>If you did not request this, please ignore this email.</p>`;

      await sendEmail({to, from, subject, html});

      res.status(200).json({message: 'A verification email has been sent to ' + user.email + '.'});
  }catch (error) {
      res.status(500).json({message: error.response})
  }
}
*/
