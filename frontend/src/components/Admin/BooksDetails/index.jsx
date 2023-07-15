import React from 'react'
import edit from "../../../Images/Editicon.svg"
import deleteImg from "../../../Images/deleteicon.svg"
import styles from "./index.module.css"

const BooksDetails = (props) => {
  const booksArr = [
    {
      name: "Harry Pooter",
      author: "J.K. Rowling",
      status: "available"
    },
    {
      name: "Ice and Fire",
      author: "Christopher H",
      status: "unavailable"
    }
  ];
  return (
    <div className={`w-full relative`}>
      <table className={`table-auto w-full border-colapse relative ${styles.Table_collapse}`}>
      <thead>
            <tr>
              <th className={`text-left text-[#212121]  text-[13px] font-semibold px-3`}>Book Name</th>
              <th className={`text-left text-[#212121] w-[14%] text-[13px] font-semibold`}>Author</th>
              <th className={`text-left text-[#212121]  text-[13px] font-semibold`}>availability</th>
              <th className={`text-left text-[#212121] w-[13%] text-[13px] font-semibold`}>Action</th>
            </tr>
          </thead>
          {
            booksArr && booksArr?.length > 0 &&
            booksArr?.map((item, idx)=>{
              return(
                <tbody key={idx}>
                  <tr className={`h-12 bg-white`}>
                    <td className={`text-left text-[#252525] text-[13px] font-normal pl-4`}>{item?.name}</td>
                    <td className={`text-left text-[#252525] text-[13px] font-normal`}>{item?.author}</td>
                    <td className={`text-center text-[13px] font-normal pr-5`}>
                      <div className={`rounded-3xl w-[6rem] py-1 text-white capitalize ${item?.status === 'available' ? "bg-[#F44336]" : "bg-[#00C853]"}`}>
                      {item?.status}
                      </div>
                    </td>
                    <td className={`text-right pr-3 `}>
                      <div className={` flex items-center justify-end gap-5`}>
                        <p className='cursor-pointer' onClick={() => props.handleEditClick(item)}>
                          <img src={edit} alt="edit" />
                        </p>
                        <p className='cursor-pointer' onClick={() => props.handleDelte(item)}>
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