import React from 'react'
import LibraryTransaction from '../../../components/Admin/LibTransaction'
import SideBar from '../../../components/Layout/SideBar/SideBar'
import TwohalfLayout from '../../../components/Layout/TwohalfLayout'
import Headerlayout from '../../../common/Headerlayout'

const LibraryTransactionMain = () => {
  return (
    <div>
      <TwohalfLayout
          sidebarsection={<SideBar />}
          rendercomponent={<LibraryTransaction />}
          isHeader={true}

          commonheader={<Headerlayout
            name={"Book Details"}
            isbutton={false}
            addbutton={false}
          />}
        />
    </div>
  )
}

export default LibraryTransactionMain