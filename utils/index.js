import sgMail from '@sendgrid/mail';

sgMail.setApiKey("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");//.process.env.SENDGRID_API_KEY);

export default async function sendEmail(mailOptions) {
    return new Promise((resolve, reject) => {
        sgMail.send(mailOptions, (error, result) => {
            console.log(error)
            if (error) return reject(error);
            return resolve(result);
        });
    });
}

