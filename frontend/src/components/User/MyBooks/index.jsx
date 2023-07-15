import React from 'react'
import styles from '../BookCollection/index.module.css'
import ButtonFieldInput from "../../../common/buttonField/ButtonFieldInput"


const MyBooks = () => {
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
                    <td className={`text-left text-[#252525] text-[13px] font-normal`}>{item?.status}</td>
                    <td className={``}>
                      <ButtonFieldInput
                        name="Borrow"
                        variant="contained"
                        buttonextracls={`!bg-blue-900 !rounded-lg !capitalize`}
                        // handleClick={}
                      />
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

export default MyBooks