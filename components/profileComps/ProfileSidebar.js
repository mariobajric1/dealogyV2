import React from 'react'
import Link from "next/link";
import ProfileSidebarRow from './ProfileSidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'


const Sidebar = ({username, id}) => {

    return (       
    <>
        <div className='sidebar'
        style={{boxShadow: 'rgba(0, 0, 0, 0.16) 8px 8px 16px 0px',	
        borderRadius: '12px',
        margin: 12,
        marginTop:28,
        padding:12,
        paddingRight:48,
        
							
    }}>

            {/* link each row to a page */}
            <Link href="/">
                <a>
                        <ProfileSidebarRow src='' title="Home" />
                </a>
            </Link>

            <ProfileSidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <ProfileSidebarRow Icon={PeopleIcon} title='Colleagues' />
            <ProfileSidebarRow Icon={PeopleIcon} title='My Clients' />
            <ProfileSidebarRow Icon={PeopleIcon} title='My Vendors' />

            <ProfileSidebarRow Icon={ChatIcon} title='Inbox' />
            <ProfileSidebarRow Icon={StorefrontIcon} title='Buyers' />
            <ProfileSidebarRow Icon={VideoLibraryIcon} title='Sellers' />
            <ProfileSidebarRow Icon={ExpandMoreOutlined} title='More' />
        </div>
    </>
    )
}

export default Sidebar
