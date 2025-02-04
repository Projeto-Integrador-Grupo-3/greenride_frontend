import { useEffect } from "react";
import FormCorrida from "../formcorrida/FormCorrida";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}


function ModalCorrida({ isOpen, onClose }: ModalProps) {
    // Close the modal when clicking outside of the modal content
    useEffect(() => {
        if (isOpen) {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    onClose();
                }
            };


            document.addEventListener("keydown", handleEscape);


            return () => {
                document.removeEventListener("keydown", handleEscape);
            };
        }
    }, [isOpen, onClose]);


    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 opacity-100 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-md transition-transform transform opacity-100 scale-100">
                <div className="flex justify-center items-center">
                    <h1 className="text-2xl text-center ">


                        Planeje sua próxima viajem


                    </h1>


                    <button
                        onClick={onClose}
                        className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 focus:outline-none "
                    >
                        &times;
                    </button>


                </div>
                <FormCorrida />


                <button
                    onClick={onClose}
                    className="rounded font-semibold text-black bg-[#CDCEBE] hover:bg-[#95A65F]
                    w-9/12 py-2 my-3 mx-auto flex justify-center">
                    Cancelar
                </button>
            </div>
        </div>
    );
}


export default ModalCorrida;
