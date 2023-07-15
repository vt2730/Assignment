import React from 'react'
import TwohalfLayout from "../../../components/Layout/TwohalfLayout"
import SideBar from '../../../components/Layout/SideBar/SideBar'
import Headerlayout from "../../../common/Headerlayout"
import MyBooks from '../../../components/User/MyBooks'

const MyBooksMain = () => {
  return (
    <div className={`bg-[#F0F2F9] h-screen`}>
      <TwohalfLayout
        sidebarsection={<SideBar />}
        rendercomponent={<MyBooks/>}
        isHeader={true}

        commonheader={<Headerlayout
          name={"My Books"}
          isbutton={false}
          addbutton={false}
        />}
      />
    </div>
  )
}

export default MyBooksMain