import React from 'react'
import Link from "next/link";
import ExploreSidebarRow from './ExploreSidebarRow'
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
       
    >

            {/* link each row to a page */}
            <Link href="/user/[userId]" as={`/user/${id}`}>
                <a>
                        <ExploreSidebarRow src='' title='My Profile' />
                </a>
            </Link>

            <ExploreSidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <ExploreSidebarRow Icon={PeopleIcon} title='Colleagues' />
            <ExploreSidebarRow Icon={PeopleIcon} title='My Clients' />
            <ExploreSidebarRow Icon={PeopleIcon} title='My Vendors' />

            <ExploreSidebarRow Icon={ChatIcon} title='Inbox' />
            <ExploreSidebarRow Icon={StorefrontIcon} title='Buyers' />
            <ExploreSidebarRow Icon={VideoLibraryIcon} title='Sellers' />
            <ExploreSidebarRow Icon={ExpandMoreOutlined} title='More' />
        </div>
    </>
    )
}

export default Sidebar
