
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const UserPage: React.FC = () => {

    /*
    How to make Rest APT calls from the component?
     1. Rest API Endpoint "https://jsonplaceholder.typicode.com/users"
     2. http Method
     3. Rest API Client? 
            a. fetch api of Native JS
            b. axios [npm i axios] (Recommended) 

    */
    const [users, setUser] = useState<Iuser[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);


    useEffect(() => {
        /*
        1) Will called after the initial rendering 
        2) Ideal place to make api calls
        3) Will not called after sate updates
        */
        axios
            .get<Iuser[]>("https://jsonplaceholder.typicode.com/users")
            .then((res: AxiosResponse<Iuser[]>) => {
                console.log(res);
                setUser(res.data);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);
    return (
        <>
            <div className="my-3">
                <div className="position-relative p-3 text-center text-muted bg-body border border-dashed rounded-5">
                    <h1 className="text-body-emphasis">User Management App</h1>
                    <p className="col-lg-6 mx-auto mb-4">
                        User Management App: Simplifying user administration and access control.
                    </p>
                    <Link className="btn btn-primary px-5 mb-5" to="add">
                        Add User
                    </Link>
                </div>
            </div>


            <div className="row">
                <h2>List Users</h2>
                {
                    isLoading ? (<div className='text-center'>
                        <div className='spinner-border text-success' role='status'>
                        </div>
                        <p>Please wait</p>
                    </div>) : null
                }

                {
                    isError ? (
                        <div className='alert alert-danger'>
                        some Error occured! Try again later!
                        </div>
                    ):null
                }




                {
                    users.map((user: Iuser) => {
                        return (
                            <div className="col-md-3 mt-3" key={user.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{user.name}</h5>
                                        <p className="card-text" >Email: {user.email}</p>
                                        <p className="card-text">Phone: {user.phone}</p>
                                        <Link to={`/user/${user.id}`}>View details</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>


        </>
    )
}

export default UserPage