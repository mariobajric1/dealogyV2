import React from 'react'
import { Avatar } from '@material-ui/core'

const ProfileSidebarRow = ({ src, Icon, title }) => {
    return (

    <>
        <style jsx>
        { `
        .profile__sidebarRow {
            display: flex;
            align-items: center;
            padding: 10px;
            cursor: pointer;
        }
        
        .profile__sidebarRow:hover {
            background-color: lightgray;
            border-radius: 10px;
        }
        
        .profile__sidebarRow>p {
            margin-left: 20px;
            font-weight: 600;
        }
        
        .profile__sidebarRow>.MuiSvgIcon-root {
            font-size: xx-large;
            color: black;
        }`}
        </style>


        <div className='profile__sidebarRow' >
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <p>{title}</p>
        </div>
    </>
    )
}

export default ProfileSidebarRow