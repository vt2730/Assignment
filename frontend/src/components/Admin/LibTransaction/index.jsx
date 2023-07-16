import React from 'react'
import styles from "./index.module.css"
import moment from "moment"
import { useDispatch, useSelector } from 'react-redux'

const LibraryTransaction = () => {
  const transactionDetails = useSelector((state) => state.transaction.transactionDetails)

  const transaction = [
    {
      name: "user 01",
      book: "harry Potter",
      author: "J.K Rowling",
      dueDate: new Date(),
      type: "borrow",
    },
    {
      name: "user 02",
      book: "Ice and fire",
      author: "christopher J",
      dueDate: new Date(),
      type: "return",
    },
  ]
  return (
    <div className={`w-full relative`}>
      <table className={`table-auto w-full border-colapse relative ${styles.Table_collapse}`}>
      <thead>
            <tr>
              <th className={`text-left text-[#212121] w-[20%]  text-[13px] font-semibold px-3`}>User Name</th>
              <th className={`text-left text-[#212121] w-[14%] text-[13px] font-semibold`}>Book Name</th>
              <th className={`text-left text-[#212121] w-[14%] text-[13px] font-semibold`}>Author Name</th>
              <th className={`text-left text-[#212121] w-[20%] text-[13px] font-semibold`}>Due Date</th>
              <th className={`text-left text-[#212121] w-[5%] text-[13px] font-semibold`}>Transaction Type</th>
            </tr>
          </thead>
          {
            transaction && transaction?.length > 0 &&
            transaction?.map((item, idx)=>{
              return(
                <tbody key={idx}>
                  <tr className={`h-12 bg-white`}>
                    <td className={`text-left text-[#252525] text-[13px] font-normal pl-4`}>{item?.name}</td>
                    <td className={`text-left text-[#252525] text-[13px] font-normal`}>{item?.book}</td>
                    <td className={`text-left text-[#252525] text-[13px] font-normal`}>{item?.author}</td>
                    <td className={`text-left text-[13px] font-normal pr-5`}>
                      {moment(item?.dueDate).format('LL')}
                    </td>
                    <td className={`text-center text-[13px] font-normal pr-5`}> 
                    <div className={`rounded-3xl w-[6rem] py-1 text-white capitalize ${item?.type === 'borrow' ? "bg-[#F44336]" : "bg-[#00C853]"}`}>
                      {item?.type}
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

export default LibraryTransaction