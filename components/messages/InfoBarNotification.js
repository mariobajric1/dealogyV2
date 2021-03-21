import React, { useState } from "react";
// import "./InfoBarNotification.css";
import { Avatar, Button } from "@material-ui/core";
// import { useStateValue } from "./StateProvider";

function InfoBarNotification() {
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

            {`.InfoBarNotification {
	display: flex;
	padding: 1px;
	cursor: pointer;
	border-bottom: 1px solid #f6f6f6;
	cursor: pointer;
}

.InfoBarNotification > form > button {
	display: none;
}

.InfoBarNotification:hover {
	background-color: #ebebeb;
}

.InfoBarNotification__info > h1 {
	font-size: 17px;
	margin-bottom: 8px;
}

.InfoBarNotification__info {
	margin-left: 15px;
}
`}
        </style>





        {/* // onClick={changeRoom}  */}
		<div className="InfoBarNotification">
			<form>
				<button></button>
				<div className="InfoBarNotification__info">
					{/* <h1>{roomName}</h1> */}
                    <h1>Notification</h1>
				</div>
			</form>
		</div>

        </>
	);
}
export default InfoBarNotification;
