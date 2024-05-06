
import axios, { AxiosResponse } from "axios";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

const AddUser: React.FC = () => {

    const [isSubmit, setSubmit] = useState(false);
    const [isSaved, setSaved] = useState(false);
    const [isError, setError] = useState(false);
    const { register, handleSubmit } = useForm<Iuser>();

    // on submit form
    const handleAddUser = (formData: Iuser) => {
        //collect data from the form and make it as  object
        //send form data to rest api

        /*
        How to make Rest APT calls from the component?
         1. Rest API Endpoint "https://jsonplaceholder.typicode.com/users"
         2. http Method
         3. Rest API Client? 
                a. fetch api of Native JS
                b. axios [npm i axios] (Recommended) 
    
        */
        console.log(formData);
        axios.post("https://jsonplaceholder.typicode.com/users", formData)
            .then((res: AxiosResponse<Iuser>) => {
                console.log(res);
                setSaved(true);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            })
            .finally(() => {
                setSubmit(false);
            })

    };

    return (
        <div className="row">
            <h1 className="text-center">
                Add User
            </h1>

            <form
                className="col-md-6 offset-md-3"
                onSubmit={handleSubmit(handleAddUser)}
            >
                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label" htmlFor="nameInput">
                        Name
                    </label>
                    <div className="col-sm-10">
                        {/* An input form element whose value is controlled by React in this way is called a “controlled component”.*/}
                        <input
                            type="text"
                            {...register('name')}
                            className="form-control"
                            placeholder="Enter Name"
                        />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
                        Phone
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            {...register('phone')}
                            className="form-control"
                            placeholder="Enter Phone"
                        />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="emailInput" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            {...register('email')}
                            className="form-control"
                            placeholder="Enter Email"
                        />
                    </div>
                </div>


                {
                    isSaved ? (<div className="alert alert-success">Saved Successfully</div>) : null
                }
                {
                    isError ? (
                        <div className="alert alert-danger">
                            Some Error Occurred. Try again later!
                        </div>) : null
                }



                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">
                            {
                                isSubmit ? "Submitting..." : "Submit" 
                            }
                        </button>
                        {" "}
                        <Link to="/user" className="btn btn-dark">
                            Go Back
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddUser