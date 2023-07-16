import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect } from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from 'react-redux';
import ButtonFieldInput from '../../../common/buttonField/ButtonFieldInput';
import DropDown from '../../../common/dropDown/DropDown';
import DatePickerMain from "../../../common/formfields/DatePickerMain"

const BorrowModal = (props) => {
    const allUsers = useSelector((state) => state.user.users)

    const userOptions = allUsers && allUsers?.length > 0 && allUsers?.filter((item) => item?.role === "user")?.map((item) => {
      return  {name: item?.name, value: item?._id}
    })

  return (
      <>
          <Dialog
              open={props.open}
              onClose={props.handleClose}
              // aria-labelledby='responsive-dialog-title'
              className={`!max-w-full !min-w-max h-auto m-0 `}
              onClick={props.handleClickOpen}
          >
            <form onSubmit={props.borrowFormik?.handleSubmit}>
              <DialogTitle
                  id='responsive-dialog-title'
                  className={props.titlecls}
              >
                  {props.title}
                  <CloseIcon
                      onClick={props.handleClose}
                      className={`cursor-pointer text-slate-500`}
                  />
              </DialogTitle>
              <DialogContent className={`px-3 w-[30rem]`}>
                  <div className={`flex flex-col justify-between`}>
                      <div className={`w-full py-4`}>
                          <DropDown
                              selectOption={userOptions}
                              DropDownCls={`h-11 text-sm font-[Roboto-Regular]`}
                              dropDownName='user'
                              extracls={`w-1/2 space-y-2`}
                              id='user'
                              size="small"
                              olabelcls={`!text-[#000000] !font-bold`}
                            //   olabel={"Select user"}
                              placeholder={"Select user"}
                              onChange={props.borrowFormik?.handleChange}
                              value={props.borrowFormik?.values.user}
                              error={
                                  props.borrowFormik?.touched?.user &&
                                  Boolean(props.borrowFormik?.errors?.user)
                              }
                              helperText={
                                  props.borrowFormik?.touched?.user &&
                                  props.borrowFormik?.errors?.user
                              }
                              clickEnter={props.borrowFormik?.handleSubmit}
                          />
                      </div>
                      <div className={`w-full`}>
                          <DatePickerMain
                              showIcon={true}
                              id='date'
                              name='date'
                              placeholderText="Select the date"
                              value={props.dateFilter}
                              onChange={props.handleDateFilter}
                              mainCls={`!flex !flex-row`}
                              datePickerCls={`h-[2.74em] w-full`}
                          />
                      </div>
                  </div>
              </DialogContent>
              <DialogActions >
                  <div className={`flex items-end justify-end mr-4 my-5 `}>
                      {/* <p className='text-[#ff3333] text-xs font-semibold mb-5 ml-5'>{props?.errorMsg ? props?.errorMsg : ''}</p> */}
                      <div className='flex items-center gap-3'>
                          <ButtonFieldInput
                              handleClick={props.handleClose}
                              extraTextCls={`!border !border-[#333333]  !rounded !capitalize !text-[#333333] !text-[16px] !font-semibold !py-1 !px-3`}
                              name={"cancel"}
                          />
                          <ButtonFieldInput
                              // loading={loader === true ? true : false}
                              extraTextCls={`!bg-[#083F88] !rounded !capitalize !text-white !text-[16px] !font-semibold !py-1 !px-3`}
                              name={"save"}
                          />
                      </div>

                  </div>
              </DialogActions>
              </form>
          </Dialog>
      </>
  )
}

export default BorrowModal