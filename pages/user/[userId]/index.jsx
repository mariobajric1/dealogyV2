import React from "react";
import Head from "next/head";
import Link from "next/link";
import Error from "next/error";
import middleware from "../../../middlewares/middleware";
import { useCurrentUser } from "../../../lib/hooks";
import Posts from "../../../components/post/posts";
import PostEditor from "../../../components/post/editor";
import { getUser } from "../../../lib/db";
import ProfileSidebar from '../../../components/profileComps/ProfileSidebar'
import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import profileStyles from '../../../styles/pageStyles/profileStyles.js'


export default function UserPage({ user }) {
	if (!user) return <Error statusCode={404} />;
	const { name, email, bio, profilePicture, company, number, ethAddress, qrCode, backgroundImg } = user || {};
	const [currentUser] = useCurrentUser();
	const isCurrentUser = currentUser?._id === user._id;


	return (
		<>

			<style jsx>
        	{profileStyles}
      		</style>
			

			<div className='profile__bodyTop'
			>
						<div className='profile__sidebar' style={{}}>
								<ProfileSidebar username={user?.name} id={user?._id}/>
						</div>

					<div className="userInfo"
					
					>
						Contact Me
						<p>{email}</p>
						<p>{number}</p>
						<p>{company}</p>
						<img src={qrCode} />

						{isCurrentUser ? (
									<Link href="/settings">
										<button type="button">Edit</button>
									</Link>
						) :
						(
							
										<button type="button">add connection</button>
									
						)
					}

							

					</div>
			</div>
			

			<div className='user__contentContainer'
			>
				{/* User Profile Info */}
				<div style={{ 
					boxShadow: 'rgba(0, 0, 0, 0.16) 8px 8px 16px 0px',
					borderRadius:12,
					display: "flex", 
					alignItems:'center',
					flexDirection: 'column', 
					backgroundImage: "url(" + backgroundImg + ")"}}>
					
							<img  src={profilePicture} width="256" height="256" alt={name} />

							<div
							style={{
								background:'white',
								width:'auto',
								borderRadius:12,
								padding: 7,
								margin:4,
								boxShadow: 'rgba(0, 0, 0, 0.16) 8px 8px 16px 0px',								
								textAlign:'center',
								lineHeight:'24px'
							}}>

								
										<h3 >{name} </h3>

										<h3>@{company}</h3>
										<p>{bio}</p>
										<p>{ethAddress}</p>

									

							</div>
							

							

						
						
					
				</div>
					{isCurrentUser ? <PostEditor /> : null}
					<Posts creatorId={user._id} />
			</div>


		</>
	);
}

export async function getServerSideProps(context) {
	await middleware.apply(context.req, context.res);
	const user = await getUser(context.req, context.params.userId);
	if (!user) context.res.statusCode = 404;
	return {
		props: {
			user,
		}, // will be passed to the page component as props
	};
}


// 				<Posts creatorId={user._id} />
