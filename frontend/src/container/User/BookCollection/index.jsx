import React from 'react'
import BooksCollection from '../../../components/User/BookCollection'
import TwohalfLayout from "../../../components/Layout/TwohalfLayout"
import SideBar from '../../../components/Layout/SideBar/SideBar'
import Headerlayout from "../../../common/Headerlayout"

const BooksCollectionMain = () => {
  return (
    <div className={`bg-[#F0F2F9] h-screen`}>
      {/* <BooksCollection/> */}
      <TwohalfLayout
        sidebarsection={<SideBar />}
        rendercomponent={<BooksCollection />}
        isHeader={true}

        commonheader={<Headerlayout
          name={"Book Collection"}
          isbutton={false}
          addbutton={false}
        />}
      />
    </div>
  )
}

export default BooksCollectionMain