import React from 'react'
import { Avatar } from '@material-ui/core'

const ExploreSidebarRow = ({ src, Icon, title }) => {
    return (

    <>
        <style jsx>
        { `
        .explore__sidebarRow {
            display: flex;
            align-items: center;
            padding: 10px;
            cursor: pointer;
        }
        
        .explore__sidebarRow:hover {
            background-color: lightgray;
            border-radius: 10px;
        }
        
        .explore__sidebarRow>p {
            margin-left: 20px;
            font-weight: 600;
        }
        
        .explore__sidebarRow>.MuiSvgIcon-root {
            font-size: xx-large;
            color: black;
        }`}
        </style>


        <div className='explore__sidebarRow' >
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <p>{title}</p>
        </div>
    </>
    )
}

export default ExploreSidebarRow