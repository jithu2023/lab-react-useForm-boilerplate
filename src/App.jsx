import { useForm } from "react-hook-form";
import { useState } from "react";
import './App.css'

function Forms() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = data => {
        console.log(data);
        setIsSubmitted(true);
    };


    return (
      <div className="main">

            <form onSubmit={handleSubmit(onSubmit)}>

            {isSubmitted && !Object.keys(errors).length && (
                <div className="pop"><p className="registered-heading">Registered Successfully</p></div>
            )}

                <h2 className="head">Registration Form</h2>

                <label htmlFor="firstname">Firstname</label>
                <input {...register('firstname', {
                    required: 'This Field is required',
                    minLength: { value: 4, message: 'Minimum 4 characters are required' },
                    maxLength: { value: 20, message: 'Maximum length is 20 characters' }
                })} placeholder="Enter your First Name" id="firstname" />
                <br />
                {errors.firstname && <span>{errors.firstname.message}</span>}

                <label htmlFor="lastname">Lastname</label>
                <input {...register('secondname', {
                    required: 'This Field is required',
                    minLength: { value: 4, message: 'Minimum 4 characters are required' },
                    maxLength: { value: 20, message: 'Maximum length is 20 characters' }
                })} placeholder="Enter your Second Name" id="lastname" />
                <br />
                {errors.secondname && <span>{errors.secondname.message}</span>}

                <label htmlFor="email">Email</label>
                <input {...register('email', {
                    required: 'This Field is required',
                    pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,message:'Invalid email'},
                    minLength: { value: 4, message: 'Minimum 4 characters are required' },
                    maxLength: { value: 30, message: 'Maximum length is 20 characters' }
                })} placeholder="Enter your Email address" id="email" />
                <br />
                {errors.email && <span>{errors.email.message}</span>}


                <label htmlFor="password">Password</label>
                <input {...register('password', {
                    required: 'This Field is required',
                    minLength: { value: 4, message: 'Minimum 6 characters are required' },
                    maxLength: { value: 20, message: 'Maximum length is 20 characters' }
                })} placeholder="Enter your Password" type="password" id="password" />
                <br />
                {errors.password && <span>{errors.password.message}</span>}
                <br />
                <input type="submit" className="sub-btn" />



            </form>

        </div>
    )

}
export default Forms