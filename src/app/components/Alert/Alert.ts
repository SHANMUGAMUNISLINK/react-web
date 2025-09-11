import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export const alert = {

    showSuccessMsg(msg: any = "Success") {
        toast.success(msg);
    },
    showErrorMsg(msg: any = "Something went wrong") {
        toast.error(msg);
    }
}