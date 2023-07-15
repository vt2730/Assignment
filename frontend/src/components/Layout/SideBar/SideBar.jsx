import React, { useEffect, useState } from 'react'
import Logout from "../../../Images/Logout.svg"
import logo from "../../../Images/Logo.png"
// import { useNavigate } from "react-router"
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import {sideBarData, sideBarAdmin} from "./SideBarData"
import style from './index.module.css'

const SideBar = () => {
    // const navigate = useNavigate();
    const [active, setActive] = useState('');
    const handleLogOut = () => {
        console.log('logout clicked *')
    }

    // const redirection = (name) => {
    //     switch (name) {
    //         case "Book Collection":
    //             navigate("/bookcollection");
    //             break;
    //         case "My Books":
    //             navigate("/mybooks");
    //             break;
    //         case "Book Details":
    //             navigate("/admin/bookdetails");
    //             break;
    //         case "Transaction":
    //             navigate("/admin/transaction");
    //             break;
    //         default:
    //             break;
    //     }
    // }
    const sideNavArray = sideBarData

  return (
    <Box className={`bg-[#0F256E] gap-12 h-full w-full flex flex-col justify-start truncate customBarCss `}>
            <div className='flex flex-col justify-around gap-10 '>
                    <div className='flex justify-center pt-8'>
                        {/*Logo Section */}
                        <img src={logo} alt="logo" className={`cursor-pointer ${style.logoUI}`} />
                    </div>
                {/*Menu List*/}
                <div className='flex flex-col justify-start gap-1 '>
                    {
                        sideNavArray && sideNavArray?.length > 0 && sideNavArray?.map((item, idx) => {
                            return (
                                <nav key={idx}
                                    className={`${active === item.name && style.selection} customCls `}
                                    // onClick={() => {
                                    //     redirection(item?.name);
                                    // }}
                                >
                                    <List>
                                        <ListItemButton sx={{ minHeight: "5px" }} >
                                            <ListItemIcon sx={{ minWidth: "34px" }}>
                                                <img src={item?.icon} alt='icon' height={18} width={18} />
                                            </ListItemIcon>
                                            <p className={`text-[15px] text-white`}> {item?.name} </p>
                                        </ListItemButton>
                                    </List>
                                </nav>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex items-center cursor-pointer px-5' onClick={handleLogOut}>
                <img src={Logout} alt="logout" />
                <p className='text-[#FFFFFF] pl-4 text-sm'>Logout</p>
            </div>
        </Box>
  )
}

export default SideBar