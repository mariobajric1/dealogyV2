import React, { useState } from "react";
// import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
// import axios from "./axios";
// import { useStateValue } from "./StateProvider";

function Chat() {
    // { messages }


	// const [room, dispatch] = useStateValue();

	// const [input, setInput] = useState("");

	// const sendMessage = async (e) => {
	// 	e.preventDefault();

	// 	if (room.room === "main") {
	// 		axios.post("/messages/new", {
	// 			message: input,
	// 			name: "demo app",
	// 			timestamp: "Just now",
	// 			received: false,
	// 			roomID: room.room,
	// 			//add room to message collection
	// 		});
	// 	} else {
	// 		axios.post("/messages/new", {
	// 			message: input,
	// 			name: "demo app",
	// 			timestamp: "Just now",
	// 			received: false,
	// 			roomID: room.room[0],
	// 		});
	// 	}

	// 	setInput("");
	// };
	return (

        <>
            <style jsx>

                {`

.chat {
	display: flex;
	flex-direction: column;
	flex: 0.75;
}

.chat__header {
	padding: 20px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid lightgray;
}

.chat__headerInfo {
	flex: 1;
	padding-left: 20px;
}

.chat__headerInfo > h3 {
	margin-bottom: 3px;
	font-weight: 500;
}

.chat__headerInfo > p {
	color: gray;
}

.chat__body {
	flex: 1;
    background: white;
	background-repeat: repeat;
	background-position: center;
	padding: 30px;
	overflow: scroll;
}

.chat__message {
	position: relative;
	font-size: 16px;
	padding: 10px;
	width: fit-content;
	border-radius: 10px;
	background-color: #ffffff;
	margin-bottom: 30px;
}

.chat__receiver {
	margin-left: auto;
	background-color: rgb(255, 220, 204);
}
.chat__timestamp {
	margin-left: 10px;
	font-size: xx-small;
}

.chat__name {
	position: absolute;
	top: -15px;
	font-weight: 800;
	font-size: xx-small;
}

.chat__footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 62px;
	border-top: 1px solid lightgray;
}

.chat__footer > form {
	flex: 1;
	display: flex;
}

.chat__footer > form > input {
	flex: 1;
	outline-width: 0;
	border-radius: 30px;
	padding: 10px;
	border: none;
}

.chat__footer > form > button {
	display: none;
}

.chat__footer > .MuiSvgIcon-root {
	padding: 10px;
	color: gray;
}

                
                `}

            </style>
		<div className="chat">
			<div className="chat__header ">
				<Avatar />
				<div className="chat__headerInfo">
					{/* <h3>{room.room}</h3> */}
					<p>Last seen...</p>
				</div>

				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>

					
				</div>
			</div>

			<div className="chat__body">
				{/* {messages
					.filter((message) => message.roomID == room.room)
					.map((message) => (
						<p
							className={`chat__message ${
								true && message.received && "chat__receiver"
							}`}
						>
							<span className="chat__name">{message.name}</span>
							{message.message} {message.received}
							<span className="chat__timestamp">{message.timestamp}</span>
						</p>
					))} */}
			</div>

			<div className="chat__footer">
				<form>


                    {/* 	value={input}
						onChange={(e) => setInput(e.target.value)} */}
					<input
					
						placeholder="sned a message"
						type="text"
					/>

                    {/* onClick={sendMessage}  */}
					<button type="submit">
						Send Message
					</button>
				</form>
				<MicIcon />
			</div>
		</div>

        </>
	);
}
export default Chat;
