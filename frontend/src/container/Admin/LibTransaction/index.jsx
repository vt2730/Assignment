import React, { useEffect } from 'react'
import LibraryTransaction from '../../../components/Admin/LibTransaction'
import SideBar from '../../../components/Layout/SideBar/SideBar'
import TwohalfLayout from '../../../components/Layout/TwohalfLayout'
import Headerlayout from '../../../common/Headerlayout'
import { ForLibTransaction } from './Hooks'

const LibraryTransactionMain = () => {
  const {getAllTransaction} = ForLibTransaction()

  useEffect(()=>{
    getAllTransaction()
  },[])
  return (
    <div className={`bg-[#F0F2F9] h-screen`}>
      <TwohalfLayout
          sidebarsection={<SideBar />}
          rendercomponent={<LibraryTransaction />}
          isHeader={true}

          commonheader={<Headerlayout
            name={"Transactions"}
            isbutton={false}
            addbutton={false}
          />}
        />
    </div>
  )
}

export default LibraryTransactionMain