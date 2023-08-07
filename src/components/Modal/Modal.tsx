import React from "react";
import {GrFormClose} from "react-icons/gr"
import { idText } from "typescript";

type ModalInput = {
    isVisible: boolean;
    onClose: any;
    title: any;
}

type test = {
    target: any;
    id: any;
}


const Modal = (props: ModalInput) => {
    const {isVisible, onClose, title} = props;

    if(!isVisible) return null;

    const handleClose = (e: any) => {

        if(e.target.id === "wrapper"){
            onClose();
        } 
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50" onClick={e => handleClose(e)}>
            <div className="w-[60vw]">
                <div className="bg-white p-2 rounded relative">
                    <GrFormClose size={30} className="absolute right-0 top-0 cursor-pointer" onClick={() => onClose()}/>
                    {title}
                </div>
            </div>
        </div>
    );
}

export default Modal;