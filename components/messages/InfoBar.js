import React, {  useState } from "react";
// import "./InfoBar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

// import axios from "./axios";
// import { useStateValue } from "./StateProvider";
import InfoBarNotification from "./InfoBarNotification";

// import InfoBarChat from "./InfoBarChat";

function InfoBar() {
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
                {`.InfoBar {
                	display: flex;
                	flex-direction: column;
                	flex: 0.12;
                }

                .InfoBar__header {
                	display: flex;
                	justify-content: space-between;
                	padding: 20px;
                	border-right: 1px solid lightgray;
                }

          

                
                .InfoBar__search {
                	display: flex;
                	align-items: center;
                	background-color: #f6f6f6;
                	height: 39px;
                	padding: 10px;
                }

                .InfoBar__searchContainer {
                	display: flex;
                	align-items: center;
                	background-color: white;
                	width: 100%;
                	height: 35px;
                	border-radius: 20px;
                }

                .InfoBar__searchContainer > .MuiSvgIcon-root {
                	color: gray;
                	padding: 10px;
                }

                .InfoBar__searchContainer > form > input {
                	border: none;
                	outline-width: 0;
                	margin-left: 10px;
                }

                .InfoBar__searchContainer > form > button {
                	display: none;
                }

                .InfoBar__chats {
                	flex: 1;
                	background-color: white;
                	overflow: scroll;
                }
                `}

            </style>

                <div className="InfoBar">
                	<div className="InfoBar__header">
                	
				
					    <IconButton style={{paddingLeft:10}}>
						    <MoreVertIcon />
					    </IconButton>
			    </div>


                <div className="InfoBar__search">
				    <div className="InfoBar__searchContainer">
					    <SearchOutlined />

					<form>


                        {/* 	value={input} */}
                        {/* 							onChange={(e) => setInput(e.target.value)}
 */}
						<input
						
							type="text"
							placeholder="search notifications"
							type="text"
						/>


                        {/* onClick={newRoom} */}
						<button  type="submit">
							Send Message
						</button>


					</form>
				</div>
			</div>

			<div className="InfoBar__chats">
				{/* {rooms.map((room) => (


                   
                     roomName={room.name} 

				))} */}
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>
                                <InfoBarNotification/>

			</div>
		</div>


        </>
	);
}

export default InfoBar;
