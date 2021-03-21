import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useCurrentUser } from '../lib/hooks';
//import { getPresignedUploadUrl, useS3Upload} from '../utils/aws'
import ImageUploader from '../components/imageUploader'
import S3 from "react-aws-s3"

const ProfileSection = () => {
  const [user, { mutate }] = useCurrentUser();
  const [isUpdating, setIsUpdating] = useState(false);
  const nameRef = useRef();
  const bioRef = useRef();
  const profilePictureRef = useRef();
  const qrCodeRef = useRef();
  const backgroundImgRef = useRef();

  const [msg, setMsg] = useState({ message: '', isError: false });

  useEffect(() => {
    nameRef.current.value = user.name;
    bioRef.current.value = user.bio;
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isUpdating) return;
    setIsUpdating(true);
    const user_name = nameRef.current.value;
    const user_bio = bioRef.current.value;
    const user_profilePicture = user.profilePicture;
    const user_qrCode = user.qrCode;
    const body = {name: user_name, bio: user_bio, profilePicture: user_profilePicture, qrCode: user_qrCode};
    const res = await fetch('/api/user', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userData = await res.json();
      mutate({
        user: {
          ...user,
          ...userData.user,
        },
      });
      setMsg({ message: 'Profile updated' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  };

  // const changeProfilePicture = async(event) => {
  //   let url = await getPresignedUploadUrl('dealogy-images', 'profile-pictures')
  //   console.log(url);
  //   const {getRootProps, getInputProps} = useS3Upload({
  //     url
  //   })
  // }

  const changeProfilePicture = async(event) => {
    event.preventDefault();
    let file = profilePictureRef.current.files[0];
    let newFileName = profilePictureRef.current.files[0].name;
    var url = "";

    const config = {
        bucketName: "weick", //process.env.BUCKET_NAME,
        dirName: "test", // (optional, for specifying a folder within your bucket)
        region: "us-east-2", //process.env.BUCKET_REGION,
        accessKeyId: "AKIAIKVDQBZEORL43I4A", //process.env.S3_KEY,
        secretAccessKey: "yM/GEghvlz6vLCEIbSo9WKt7Q6hGKo5fvLdiQc+0" //process.env.S3_SECRET
    };

    const ReactS3Client =  new S3(config);
    await ReactS3Client.uploadFile(file, newFileName).then(data => {
        console.log(data);

        url = data.location;
        console.log("image url: " + url);

        if (data.status === 204) {
            console.log("success");
        } else {
            console.log("fail");
        }
    });

    console.log("image url: " + url);

    const body = { profilePicture: url };
    const res = await fetch('/api/user/profilepicture', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: 'Profile picture updated' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  }

  const changeQrCode = async(event) => {
    event.preventDefault();
    let file = qrCodeRef.current.files[0];
    let newFileName = qrCodeRef.current.files[0].name;
    var url = "";
    const config = {
        bucketName: "weick", //process.env.BUCKET_NAME,
        dirName: "test", // (optional, for specifying a folder within your bucket)
        region: "us-east-2", //process.env.BUCKET_REGION,
        accessKeyId: "AKIAIKVDQBZEORL43I4A", //process.env.S3_KEY,
        secretAccessKey: "yM/GEghvlz6vLCEIbSo9WKt7Q6hGKo5fvLdiQc+0" //process.env.S3_SECRET
    };

    const ReactS3Client =  new S3(config);
    await ReactS3Client.uploadFile(file, newFileName).then(data => {
        console.log(data);

        url = data.location;
        console.log("image url: " + url);

        if (data.status === 204) {
            console.log("success");
        } else {
            console.log("fail");
        }
    });

    console.log("image url: " + url);

    const body = { qrCode: url };
    const res = await fetch('/api/user/qrCode', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: 'QR code updated' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  }

  const changeBackgroundImg = async(event) => {
    event.preventDefault();
    let file = backgroundImgRef.current.files[0];
    let newFileName = backgroundImgRef.current.files[0].name;
    var url = "";
    const config = {
        bucketName: "weick", //process.env.BUCKET_NAME,
        dirName: "test", // (optional, for specifying a folder within your bucket)
        region: "us-east-2", //process.env.BUCKET_REGION,
        accessKeyId: "AKIAIKVDQBZEORL43I4A", //process.env.S3_KEY,
        secretAccessKey: "yM/GEghvlz6vLCEIbSo9WKt7Q6hGKo5fvLdiQc+0" //process.env.S3_SECRET
    };

    const ReactS3Client =  new S3(config);
    await ReactS3Client.uploadFile(file, newFileName).then(data => {
        console.log(data);

        url = data.location;
        console.log("image url: " + url);

        if (data.status === 204) {
            console.log("success");
        } else {
            console.log("fail");
        }
    });

    console.log("image url: " + url);

    const body = { backgroundImg: url };
    const res = await fetch('/api/user/backgroundImg', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: 'Background Img updated' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  }


  const handleSubmitPasswordChange = async (e) => {
    e.preventDefault();
    const body = {
      oldPassword: e.currentTarget.oldPassword.value,
      newPassword: e.currentTarget.newPassword.value,
    };
    e.currentTarget.oldPassword.value = '';
    e.currentTarget.newPassword.value = '';

    const res = await fetch('/api/user/password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setMsg({ message: 'Password updated' });
    } else {
      setMsg({ message: await res.text(), isError: true });
    }
  };

  async function sendVerificationEmail(user, req, res) {
    const body = {user: user}
    await fetch('/api/user/email/verify', {
      method: 'POST'
    });
  }







  return (
    <>
      <h2>Edit Your Profile</h2>
      <section
      style={{width:500,
        marginTop: 36,
        margin: 'auto',
        height: 'fit-content',
	      display: 'flex',
	      flexDirection: 'column',
	      borderRadius: 5,
	      border: '1px solid lightgray',
	      padding: '20px',
        textAlign: 'left'
       }}>
        


        {msg.message ? <p style={{ color: msg.isError ? 'red' : '#0070f3', textAlign: 'center' }}>{msg.message}</p> : null}
        <div>
          
          {!user.emailVerified ? (
            <p>
              Your email has not been verified. 
              {/* eslint-disable-next-line */}
                <a style={{margin:'auto',paddingLeft: 4,color:'red'}} role="button" onClick={sendVerificationEmail}>
                  Send verification email
                </a>
            </p>
          ) : null}
          

        <form 
        onSubmit={handleSubmit}
        >

          <div >
            <label htmlFor="name"
            style={{fontWeight: 500,
              marginBottom: '20px'}}>
            Name
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              ref={nameRef}
            />
            </label>

            <label htmlFor="bio"
            style={{fontWeight: 500,
              marginBottom: '20px'}}>
            Bio
            <textarea
              id="bio"
              name="bio"
              type="text"
              placeholder="Bio"
              ref={bioRef}
            />
            </label>
          
          </div>
          
          <button disabled={isUpdating} type="submit">Save</button>

        </form>

        <form onSubmit={changeProfilePicture}>
          <div
           style={{
            padding: 10
           }}>
              <label htmlFor="avatar"
              style={{fontWeight: 500,
                marginBottom: '20px'}}>
              Profile Picture
                      <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      ref={profilePictureRef}
            />
          </label>
          </div>
          <button type="submit">Update</button>
        </form>


        <form onSubmit={changeQrCode}>
          <div
           style={{
            padding: 10
           }}>
              <label htmlFor="avatar"
              style={{fontWeight: 500,
                marginBottom: '20px'}}>
              QR Code
                      <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      ref={qrCodeRef}
            />
          </label>
          </div>
          <button type="submit">Update</button>
        </form>


        <form onSubmit={changeBackgroundImg}>
          <div
           style={{
            padding: 10
           }}>
              <label htmlFor="avatar"
              style={{fontWeight: 500,
                marginBottom: '20px'}}>
              Background Image
                      <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      ref={backgroundImgRef}
            />
          </label>
          </div>
          <button type="submit">Update</button>
        </form>


        <form onSubmit={handleSubmitPasswordChange}
        style={{
 
         }}>


          <div
           style={{
            padding: 10
           }}>
          <label htmlFor="oldpassword"
          style={{fontWeight: 500,
            marginBottom: '20px'}}>
            Old Password
            <input
            placeholder='required'
              type="password"
              name="oldPassword"
              id="oldpassword"
              required
            />
          </label>
          <label htmlFor="newpassword"
          style={{fontWeight: 500,
            marginBottom: '20px'}}>
            New Password
            <input
              type="password"
              name="newPassword"
              id="newpassword"
              required
            />
          </label>
          </div>
          <button type="submit">Change Password</button>
        </form>
       
       
        </div>

      </section>
    </>
  );
};

const SettingPage = () => {
  const [user] = useCurrentUser();

  if (!user) {
    return (
      <>
        <p>Please sign in</p>
      </>
    );
  }
  return (
    <>
      
      <ProfileSection />
    </>
  );
};

export default SettingPage;
