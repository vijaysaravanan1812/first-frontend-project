import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastPage = (Message: string) => {

  const notify = () => {
    // toast("Default Notification !");
    toast.success(Message, {
      position: "top-center"
    });
  }
    return (
      <>
        <button onClick={notify}>Notify</button>;
        <ToastContainer />
      </>
    );
  }

  export default ToastPage;