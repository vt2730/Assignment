import React from 'react'
import ButtonFieldInput from '../../../common/buttonField/ButtonFieldInput'
import TextFieldInput from "../../../common/formfields/TextFieldInput"
import DropDown from  "../../../common/dropDown/DropDown"

const BookForm = (props) => {

    const selectStatus = [
        {name: 'Available', value: 'available'},
        {name: 'Unavailable', value: 'unavailable'}
    ]
    return (
        <div className={`w-full`}>
            <form onSubmit={props.BookFormFormik?.handleSubmit}>
                <div className={`bg-white flex flex-col  p-5 w-full h-fit rounded`}>
                    <div className={`flex flex-col justify-between`}>
                        <div className={`w-1/2`}>
                            <TextFieldInput
                                lableCls={`text-[#000000] text-[12px] font-semibold`}
                                label='Book Name'
                                id={"name"}
                                extracls={`space-y-2`}
                                textinputname={"name"}
                                placeholder={"Enter Name"}
                                onChange={props.BookFormFormik?.handleChange}
                                onBlur={props.BookFormFormik?.handleBlur}
                                value={props.BookFormFormik?.values.name}
                                error={
                                    props.BookFormFormik?.touched.name &&
                                    Boolean(props.BookFormFormik?.errors.name)
                                }
                                helperText={
                                    props.BookFormFormik?.touched.name && props.BookFormFormik?.errors.name
                                }
                                clickEnter={props.BookFormFormik?.handleSubmit}
                                disabled={!props?.reportingIdDetails && props?.editUserFormData ? true : false}

                            />
                        </div>
                        <div className={`w-1/2`}>
                            <TextFieldInput
                                lableCls={`text-[#000000] text-[12px] font-semibold`}
                                label='Author Name'
                                id={"author"}
                                extracls={`space-y-2`}
                                textinputname={"author"}
                                placeholder={"Enter author name"}
                                onChange={props.BookFormFormik?.handleChange}
                                onBlur={props.BookFormFormik?.handleBlur}
                                value={props.BookFormFormik?.values.author}
                                error={
                                    props.BookFormFormik?.touched.author &&
                                    Boolean(props.BookFormFormik?.errors.author)
                                }
                                helperText={
                                    props.BookFormFormik?.touched.author && props.BookFormFormik?.errors.author
                                }
                                clickEnter={props.BookFormFormik?.handleSubmit}
                                disabled={!props?.reportingIdDetails && props?.editUserFormData ? true : false}

                            />
                        </div>
                        <div className={`w-1/2`}>
                            <DropDown
                                selectOption={selectStatus}
                                DropDownCls={`h-11 text-sm font-[Roboto-Regular]`}
                                dropDownName='status'
                                extracls={`w-1/2 space-y-2`}
                                id='status'
                                size="small"
                                olabelcls={`!text-[#000000] !font-bold`}
                                olabel={"Book Status"}
                                placeholder={"Select Status"}
                                onChange={props.BookFormFormik?.handleChange}
                                value={props.BookFormFormik?.values.status}
                                error={
                                    props.BookFormFormik?.touched?.status &&
                                    Boolean(props.BookFormFormik?.errors?.status)
                                }
                                helperText={
                                    props.BookFormFormik?.touched?.status &&
                                    props.BookFormFormik?.errors?.status
                                }
                                clickEnter={props.BookFormFormik?.handleSubmit}
                            />
                        </div>
                    </div>

                    <div className={`flex items-end justify-end mr-4 my-5 `}>
                        {/* <p className='text-[#ff3333] text-xs font-semibold mb-5 ml-5'>{props?.errorMsg ? props?.errorMsg : ''}</p> */}
                        <div className='flex items-center gap-3'>
                            <ButtonFieldInput
                                handleClick={() => {
                                    props?.handleFormClose();
                                    props.BookFormFormik?.resetForm()
                                }}
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
                </div>
            </form>
        </div>
    )
}

export default BookForm