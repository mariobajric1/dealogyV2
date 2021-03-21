import {useDropzone} from 'react-dropzone';
import AWS from 'aws-sdk';
import config from 'dotenv';

config.config();

aws.config.update({
  region: 'us-east-1', // Put your aws region here
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
})

const S3_BUCKET = process.env.BUCKET_NAME
// Now lets export this function so we can call it from somewhere else
exports.sign_s3 = (req,res) => {
  const s3 = new aws.S3();  // Create a new instance of S3
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
// Set up the payload of what we are sending to the S3 api
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: 'public-read'
  };
// Make a request to the S3 API to get a signed URL which we can use to upload our file
s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      res.json({success: false, error: err})
    }
    // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved. 
const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    // Send it all back
    res.json({success:true, data:{returnData}});
  });
}

// var s3 = new AWS.S3({
//     endpoint: "http://dealogy-images.s3-website-us-east-1.amazonaws.com",
//     accessKeyId: process.env.S3_KEY,
//     secretAccessKey: process.env.S3_SECRET,
//     region: "us-east-1",
//     apiVersion: "2012-10-17"
//   })
  

// export async function getPresignedUploadUrl(bucket, directory) {
//     console.log("reached")
//     const key = `${directory}`;
//     const url = await s3
//       .getSignedUrl('putObject', {
//         Bucket: bucket,
//         Key: key,
//         ContentType: 'image/*',
//         Expires: 300,
//       })
//     return url;
//   }

//   export function useS3Upload({
//     presignedUploadUrl,
//     onUploadStart,
//     onUploadReady,
//     onError,
//   }) {
//     async function handleDrop([pendingImage]) {
//       // Let the caller know that a file has been selected and a fetch is beginning.
//       onUploadStart();
  
//       // Upload the image to our pre-signed URL.
//       const response = await fetch(
//         new Request(presignedUploadUrl, {
//           method: 'PUT',
//           body: pendingImage,
//           headers: new Headers({
//             'Content-Type': 'image/*',
//           }),
//         }),
//       );
//       if (response.status !== 200) {
//         // The upload failed, so let's notify the caller.
//         onError();
//         return;
//       }
//       // Let the caller know that the upload is done, so that it can send the URL
//       // to the backend again, persisting it to the database.
//       onUploadReady();
//     }
  
//     return useDropzone({
//       accept: 'image/*',
//       disabled: typeof presignedUploadUrl !== 'string',
//       handleDrop,
//     });
//   }