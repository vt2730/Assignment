import React, { useEffect } from 'react'
import BooksDetails from '../../../components/Admin/BooksDetails'
import SideBar from '../../../components/Layout/SideBar/SideBar'
import Headerlayout from '../../../common/Headerlayout'
import TwohalfLayout from '../../../components/Layout/TwohalfLayout'
import { ForBookDetails } from './Hooks'
import BookForm from '../../../components/Admin/BooksDetails/BookForm'
import SnackBarComponent from '../../../common/snackBar/SnackBar'
import { ForLogin } from '../../Authentication/Login/Hooks'

const BooksDetailsMain = () => {
  const {handleOpenForm,
    formOpen,BookFormFormik,getAllBooks,handleDelte,messageClose,
    notification,handleFormClose,openBorrowModal,
    handleOpenModal,
    handleCloseModal,selectedBook,borrowFormik,handleDateFilter,
    dateFilter} = ForBookDetails();

    const {getAllUsers} = ForLogin()

  useEffect(()=>{
    getAllBooks();
  },[])

  useEffect(()=>{
    getAllUsers();
  },[])

  return (
    <div className={`bg-[#F0F2F9] h-screen`}>
      {!formOpen ?
        <TwohalfLayout
          sidebarsection={<SideBar />}
          rendercomponent={<BooksDetails handleDelte={handleDelte}
          openBorrowModal={openBorrowModal} selectedBook={selectedBook}
          handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} borrowFormik={borrowFormik}
          handleDateFilter={handleDateFilter} dateFilter={dateFilter}
          />}
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
          rendercomponent={<BookForm BookFormFormik={BookFormFormik} handleFormClose={handleFormClose}/>}
          isHeader={true}

          commonheader={<Headerlayout
            name={"Book Details"}
            isbutton={false}
            addbutton={false}
          />}
        />}

      <SnackBarComponent
        messageOpen={notification.open}
        messageClose={messageClose}
        notificationText={notification.message}
        subText={notification.subText}
        alertType={notification.alertType}
        borderClass={notification.borderClass}
      />
    </div>
  )
}

export default BooksDetailsMain