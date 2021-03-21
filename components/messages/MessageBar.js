import React, {  useState } from "react";
// import "./MessageBar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
// import axios from "./axios";
// import { useStateValue } from "./StateProvider";
import MessageBarChat from "./MessageBarChat";

// import MessageBarChat from "./MessageBarChat";

function MessageBar({username , id , profilePicture, company }) {
    // { rooms }



	// const [input, setInput] = useState("");
	// const [room, dispatch] = useStateValue();
	// const [chatRooms, setChatRooms] = useState([]);

	// const newRoom = async (e) => {
	// 	e.preventDefault();

	// 	axios.get("/rooms/sync").then((response) => {
	// 		setChatRooms(
	// 			response.data.map((rooms) => {
	// 				return rooms.name;
	// 			})
	// 		);
	// 		console.log(chatRooms);
	// 	});

	// 	axios.post("/rooms/new", {
	// 		name: input,

	// 		//add room to message collection
	// 	});
	// 	setInput("");
	// 	dispatch({
	// 		type: "CHANGE_ROOM",
	// 		room: input,
	// 	});
	// };

	return (


        <>

            <style jsx>
                {`.MessageBar {
                	display: flex;
                	flex-direction: column;
                	flex: 0.25;
                }

                .MessageBar__header {
					display: flex;
                	justify-content: space-between;
                	padding: 20px;
                	border-right: 1px solid lightgray;
                }

                .MessageBar__headerRight {

                }

               
                .MessageBar__search {
                	display: flex;
                	align-items: center;
                	background-color: #f6f6f6;
                	height: 39px;
                	padding: 10px;
                }

                .MessageBar__searchContainer {
                	display: flex;
                	align-items: center;
                	background-color: white;
                	width: 100%;
                	height: 35px;
                	border-radius: 20px;
                }

                .MessageBar__searchContainer > .MuiSvgIcon-root {
                	color: gray;
                	padding: 10px;
                }

                .MessageBar__searchContainer > form > input {
                	border: none;
                	outline-width: 0;
                	margin-left: 10px;
                }

                .MessageBar__searchContainer > form > button {
                	display: none;
                }

                .MessageBar__chats {
                	flex: 1;
                	background-color: white;
                	overflow: scroll;
                }
                `}

            </style>

                <div className="MessageBar">
                	<div className="MessageBar__header">
                			<Avatar style={{height:80, width:80}}src={profilePicture} variant="square"/>
							{/* <h3>@{company}</h3> */}
                            {/* <h3>{username}{id}</h3> */}
				        <div className="MessageBar__headerRight">

							   
					     <IconButton >
						    <ChatIcon />
					    </IconButton>
				    </div>
			    </div>


                <div className="MessageBar__search">
				    <div className="MessageBar__searchContainer">
					    <SearchOutlined />

					<form>


                        {/* 	value={input} */}
                        {/* 							onChange={(e) => setInput(e.target.value)}
 */}
						<input
						
							type="text"
							placeholder="start a chat"
							type="text"
						/>


                        {/* onClick={newRoom} */}
						<button  type="submit">
							Send Message
						</button>


					</form>
				</div>
			</div>

			<div className="MessageBar__chats">
				{/* {rooms.map((room) => (


                   
                     roomName={room.name} 

				))} */}

                <MessageBarChat/>
			</div>
		</div>


        </>
	);
}

export default MessageBar;
