import React from "react";
import { useUser, useCurrentUser } from "../lib/hooks";
import Search from "../components/search/search";
import HomeFeed from "../components/post/homefeed";
import homePageStyles from '../styles/pageStyles/homePageStyles';


const Home = () => {
	const [user] = useCurrentUser();

	return (
		<>
			<style jsx>
				{homePageStyles}
			</style>


			<div style={{ marginBottom: "2rem" }}>
				
				<div className="home__inputContainer">
					<Search />
				</div>
				<HomeFeed />
			</div>
		</>
	);
};

export default Home;
