import React, { useState } from "react";
// import "./MessageBarChat.css";
import { Avatar, Button } from "@material-ui/core";
// import { useStateValue } from "./StateProvider";

function MessageBarChat() {
    // { roomName }



	// const [room, dispatch] = useStateValue();

	// const [currentRoom, setCurrentRoom] = useState(room.room);

	// const changeRoom = (e) => {
	// 	setCurrentRoom(roomName);
	// 	dispatch({
	// 		type: "CHANGE_ROOM",
	// 		room: currentRoom,
	// 	});
	// };

	return (
        <>
        <style jsx>

            {`.MessageBarChat {
	display: flex;
	padding: 20px;
	cursor: pointer;
	border-bottom: 1px solid #f6f6f6;
	cursor: pointer;
}

.MessageBarChat > form > button {
	display: none;
}

.MessageBarChat:hover {
	background-color: #ebebeb;
}

.MessageBarChat__info > h2 {
	font-size: 17px;
	margin-bottom: 8px;
}

.MessageBarChat__info {
	margin-left: 15px;
}
`}
        </style>





        {/* // onClick={changeRoom}  */}
		<div className="MessageBarChat">
			<form>
				<button></button>
				<div className="MessageBarChat__info">
					{/* <h2>{roomName}</h2> */}
                    <h2>Room Name</h2>
				</div>
			</form>
		</div>

        </>
	);
}
export default MessageBarChat;
