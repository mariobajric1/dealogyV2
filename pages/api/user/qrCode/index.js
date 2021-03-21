import nextConnect from 'next-connect';
import middleware from '../../../../middlewares/middleware';

const handler = nextConnect();
handler.use(middleware);

handler.put(async (req, res) => {
    const { qrCode } = req.body;

    await req.db
        .collection('users')
        .updateOne({ _id: req.user._id }, { $set: { qrCode } });
    res.end('ok');
});

export default handler;
