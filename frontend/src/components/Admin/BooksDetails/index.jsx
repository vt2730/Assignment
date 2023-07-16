import React, { useEffect } from 'react'
import edit from "../../../Images/Editicon.svg"
import deleteImg from "../../../Images/deleteicon.svg"
import styles from "./index.module.css"
import { useDispatch, useSelector } from 'react-redux'
import getLocalStorageData from '../../../utils/getLocalStorageData'

const BooksDetails = (props) => {
  const bookDetails = useSelector((state) => state.book.books)
  const role = getLocalStorageData('role')

  return (
    <div className={`w-full relative`}>
      <table className={`table-auto w-full border-colapse relative ${styles.Table_collapse}`}>
      <thead>
            <tr>
              <th className={`text-left text-[#212121]  text-[13px] font-semibold px-3`}>Book Name</th>
              <th className={`text-left text-[#212121] w-[14%] text-[13px] font-semibold`}>Author</th>
              <th className={`text-left text-[#212121]  text-[13px] font-semibold`}>availability</th>
              <th className={`text-left text-[#212121] w-[5%] text-[13px] font-semibold`}>Action</th>
            </tr>
          </thead>
          {
            bookDetails && bookDetails?.length > 0 &&
            bookDetails?.map((item, idx)=>{
              return(
                <tbody key={idx}>
                  <tr className={`h-12 bg-white`}>
                    <td className={`text-left text-[#252525] text-[13px] font-normal pl-4`}>{item?.name}</td>
                    <td className={`text-left text-[#252525] text-[13px] font-normal`}>{item?.author}</td>
                    <td className={`text-center text-[13px] font-normal pr-5`}>
                      <div className={`rounded-3xl w-[6rem] py-1 text-white capitalize ${item?.availability === false ? "bg-[#F44336]" : "bg-[#00C853]"}`}>
                      {item?.availability === true ? 'available' : 'unavailable'}
                      </div>
                    </td>
                    <td className={`text-right pr-3 `}>
                      <div className={role === 'admin' ? ` flex items-center justify-end gap-5 cursor-pointer` : `flex items-center justify-end gap-5 cursor-not-allowed`}>
                        {/* <p className='cursor-pointer' onClick={() => props.handleEditClick(item)}>
                          <img src={edit} alt="edit" />
                        </p> */}
                        <p onClick={() => props.handleDelte(item)}>
                          <img src={deleteImg} alt="delete" />
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              )
            })
          }
      </table>
    </div>
  )
}

export default BooksDetails