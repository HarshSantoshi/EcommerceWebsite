import { React,useContext } from 'react';
import { LoginContext } from '../Context/contextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({deletedata,get}) => {

    const { account, setAccount } = useContext(LoginContext);
  const removedata = async (id) => {
    try {
        const res = await fetch(`/remove/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            console.log("error");
        } else { 
            console.log("user delete");
            setAccount(data);
            toast.success("Item Removed", {
                position: "top-center"
            });
            get();
        }
    } catch (error) {
        console.log(error);
    }

}
  return (
    <div className='add_remove_select' key={deletedata}>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <p style={{cursor:"pointer"}} onClick={()=>removedata(deletedata)}>Delete</p><span>|</span>
        <p className='forremovemedia'>Save Or Later</p><span>|</span>
        <p className='forremovemedia'>See More like this</p>
        <ToastContainer />
    </div>
  )
}

export default Option