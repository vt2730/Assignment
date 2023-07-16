import React from 'react'
import ButtonFieldInput from '../buttonField/ButtonFieldInput';
import getLocalStorageData from '../../utils/getLocalStorageData';

const Headerlayout = (props) => {
    const role = getLocalStorageData('role')

    return (
        <div className={`flex w-full justify-between items-center`} >
            <div className={`flex gap-5 items-center h-fit w-[13em]`}>
                <div className={`${props.headerNameCls} font-bold text-2xl `} >
                    {props.name}
                </div>
            </div>

            <div className="flex space-x-3 items-center">
                {props.addbutton ? (
                    <ButtonFieldInput
                        name={props.buttonname}
                        type="submit"
                        variant="contained"
                        disabled={role === 'admin' ? false : true}
                        handleClick={props.handleClick}
                        buttonextracls={role === 'admin' ? `!bg-[#083F88] w-24 !capitalize !rounded-lg` : `!bg-gray w-24 !capitalize !rounded-lg`}
                    />
                )
                    :
                    null}
            </div>


        </div>
    )
}

export default Headerlayout;