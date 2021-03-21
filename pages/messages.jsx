import React, {useEffect, useState}from 'react'
import { useCurrentUser } from "../lib/hooks";
import InfoBar from "../components/messages/InfoBar";
import MessageBar from "../components/messages/MessageBar";
import Chat from "../components/messages/Chat";
import messageStyles from '../styles/pageStyles/messageStyles.js'


const messages =  () => {

    const [user] = useCurrentUser();
    // const [messages, setMessages] = useState([]);
    // const [rooms, setRooms] = useState([]);
  
    // //messages
  
    // useEffect(() => {
    //   axios.get("/messages/sync").then((response) => {
    //     setMessages(response.data);
    //   });
    // }, []);
    // useEffect(() => {
    //   axios.get("/rooms/sync").then((response) => {
    //     setRooms(response.data);
    //   });
    // }, []);
  
    // useEffect(() => {
    //   const pusher = new Pusher("", {
    //     cluster: "us2",
    //   });
  
    //   const channel = pusher.subscribe("messages");
    //   channel.bind("inserted", (newMessage) => {
    //     setMessages([...messages, newMessage]);
    //   });
  
    //   return () => {
    //     channel.unbind_all();
    //     channel.unsubscribe();
    //   };
    // }, [messages]);
  
    // //rooms
  
    // useEffect(() => {
    //   const pusher = new Pusher("", {
    //     cluster: "us2",
    //   });
  
    //   const channel = pusher.subscribe("rooms");
    //   channel.bind("inserted", (newRoom) => {
    //     setRooms([...rooms, newRoom]);
    //   });
  
    //   return () => {
    //     channel.unbind_all();
    //     channel.unsubscribe();
    //   };
    // }, [rooms]);
  
    return (



      <>

      <style jsx >


        {` 

          
          
          .message__body {
            display: flex;
            flex:1;
            background-color: inherit;
            margin: atux;
            height: 77vh;
            width: 100%;
            box-shadow: rgba(0, 0, 0, 0.06) 8px 8px 16px 0px, #ffffff -8px -8px 16px 0px;
          }


          .message__body:hover {
            box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.35);


          }
            `}
         
       
      </style>
      <div className="messageContainer">
        <div className="message__body">
          {/* <Router>
            <Switch> */}

          <MessageBar  username={user?.name} id={user?._id} profilePicture={user?.profilePicture} company={user?.company}/>
          {/* <Route path="/rooms/:roomI"> rooms={rooms}*/}
          <Chat />
          <InfoBar />

          {/* messages={messages}  */}
          {/* </Route>
              <Route path="/"> */}
          {/* <Chat messages={messages} /> */}
          {/* </Route>
            </Switch>
          </Router> */}
        </div>
      </div>
      </>
    );
  }

export default messages
