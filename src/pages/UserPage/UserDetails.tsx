
import axios from "axios"
import { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import {useNavigate } from 'react-router-dom';

const UserDetails:React.FC = () => {
  const [user , setUser] = useState<Iuser>()
  const [isError, setError] = useState(false);
  const [error, setErrorMsg] = useState<string>();
  const navigate = useNavigate(); 
  //Reading the user param
  const { userid } = useParams();
  
  const deleteUserDetails = async () => {
   
    try{
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${userid}`
      );
      console.log("User Deleted ");
      console.log(response.data);
      navigate('/user');
    }catch (error : any) {
      console.log(error);
    }
  }

  const getUserDetails =async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userid}`
      );
      console.log(response.data);
      setUser(response.data);
    }catch(error : any){
      console.log(error);
      setError(true);
      setErrorMsg(error.toString());
      
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [])

  return isError ? 
  
    ( <div className='mt-5 alert alert-danger'>
      some Error occured! {error}
      </div>
    ): (
      <>
      <h1>User Details</h1>
      
      <div className="card">
        <div className="card-header">
          You are seeing details of User ID: 
        </div>
        <div className="card-body">
          <h5 className="card-title">{user?.name}</h5>
          <p className="card-text">E-Mail: {user?.email}</p>
          <p className="card-text">Phone: {user?.phone}</p>
  
          <div>
            <Link to={`/user/${user?.id}/edit`} className="btn btn-primary">
              Edit
            </Link>
            {"                                "}
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteUserModal"
            >
              Delete
            </button>
            {"                                "}
            <Link to="/user" className="btn btn-dark">
              Go Back
          </Link>
            <div
              className="modal fade"
              id="deleteUserModal"
              tabIndex={-1}
              aria-labelledby="deleteUserModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Delete User
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete the User?</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      No
                    </button>
                    <button type="button" className="btn btn-danger"  data-bs-dismiss="modal" onClick={deleteUserDetails} >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default UserDetails