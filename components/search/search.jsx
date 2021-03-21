import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

export default function search() {
	return (
		<>
			<style jsx>
				{`
					.search__input {
						display: flex;
						align-items: center;
						border: 5px solid black;
						height: 30;
						padding: 10px 20px;
						border-radius: 12px;
						width: 75vw;
						margin: 0 auto;
						margin-top: 40px;
						max-width: 560px;
						justify-content: center;
						box-shadow: rgba(0, 0, 0, 0.16) 8px 8px 16px 0px;
					}

					.search__input > input {
						flex: 1;
						padding: 10px 20px;
						font-size: medium;
						border: none;
						justify-content: center;
						color: black;
						
					}
					.search__input > input:focus {
						outline-width: 0;
					}

					.search__inputIcon {
						color: gray;
					}

					.search__buttons {
						margin-top: 25px;
						display: flex;
						justify-content: center;
					}
					.search__buttons > button {
						display: block;
						margin-bottom: 0.5rem;
						color: #fff;
						border-radius: 5px;
						border: none;
						background-color: #fff;
						cursor: pointer;
						transition: all 0.2s ease 0s;
						padding: 10px 25px;
						box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
					}

					.search__buttons button:hover {
						box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
						background-color: black;
						border: 1px solid black;
						color: aqua;
					}

					.search__buttonsHidden {
						display: none !important;
					}
				`}
			</style>
			<div>
				<form className="search">
					<div className="search__input">
						<SearchIcon className="search__inputIcon" />
						<input placeholder="Looking for something?" />
						<MicIcon />
					</div>

					<div className="search__buttons">
						<Button className="search__buttonsHidden" variant="outlined">
							Search Dealogy
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
