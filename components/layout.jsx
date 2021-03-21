import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useCurrentUser } from "../lib/hooks";
import globalStyles from '../styles/globalStyles.js'


const Layout = ({ children }) => {
	const [user, { mutate }] = useCurrentUser();
	const handleLogout = async () => {
		await fetch("/api/auth", {
			method: "DELETE",
		});
		mutate(null);
	};
	return (
		<>

			<style jsx global>
        		{globalStyles}
      		</style>
			
			<Head>
				<title>Dealogy</title>
				<meta
					key="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta
					name="description"
					content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
				/>
				<meta property="og:title" content="Dealogy" />
				<meta
					property="og:description"
					content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
				/>
				<meta property="og:image" content="/DealogyLogo.png" />
			</Head>

			<header>
				<nav
				style={{
					boxShadow: 'rgba(0, 0, 0, 0.16) 8px 8px 16px 0px',
					borderRadius: 24,
					backgroundAttachment: 'scroll'}}>
					<Link href="/">
						<a>
							{/* need image for logo */}
							<h1 className='logo'>Dealogy</h1>
						</a>
					</Link>


					<div className='navRight'
					style={{ padding:32}}>
						{!user ? (
							<>
								<Link href="/login">
									<a>Sign in</a>
								</Link>
								<Link href="/signup">
									<a>Sign up</a>
								</Link>
							</>
							) : (
							<>
								<Link href="/explore">
									<a>Explore</a>
								</Link>
								<Link href="/buyers">
									<a>Buyers</a>
								</Link>
								<Link href="/sellers">
									<a>Sellers</a>
								</Link>
								<Link href="/user/[userId]" as={`/user/${user._id}`}>
									<a>My Profile</a>
								</Link>
								<Link href="/messages">
									<a>Messages</a>
								</Link>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a tabIndex={0} role="button" onClick={handleLogout}>
									Logout
								</a>
							</>
						)}
						</div>
					</nav>
				</header>

			<main>{children}</main>
			<footer></footer>
		</>
	);
};

export default Layout