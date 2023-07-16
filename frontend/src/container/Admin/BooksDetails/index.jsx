import React, { useEffect } from 'react'
import BooksDetails from '../../../components/Admin/BooksDetails'
import SideBar from '../../../components/Layout/SideBar/SideBar'
import Headerlayout from '../../../common/Headerlayout'
import TwohalfLayout from '../../../components/Layout/TwohalfLayout'
import { ForBookDetails } from './Hooks'
import BookForm from '../../../components/Admin/BooksDetails/BookForm'

const BooksDetailsMain = () => {
  const {handleOpenForm,
    formOpen,BookFormFormik,getAllBooks,handleDelte} = ForBookDetails();

  useEffect(()=>{
    getAllBooks();
  },[])

  return (
    <div className={`bg-[#F0F2F9] h-screen`}>
      {!formOpen ?
        <TwohalfLayout
          sidebarsection={<SideBar />}
          rendercomponent={<BooksDetails handleDelte={handleDelte}/>}
          isHeader={true}

          commonheader={<Headerlayout
            name={"Book Details"}
            isbutton={false}
            addbutton={true}
            buttonname="Add Book"
            handleClick={handleOpenForm}
          />}
        />
        :
        <TwohalfLayout
          sidebarsection={<SideBar />}
          rendercomponent={<BookForm BookFormFormik={BookFormFormik}/>}
          isHeader={true}

          commonheader={<Headerlayout
            name={"Book Details"}
            isbutton={false}
            addbutton={false}
          />}
        />}
    </div>
  )
}

export default BooksDetailsMain