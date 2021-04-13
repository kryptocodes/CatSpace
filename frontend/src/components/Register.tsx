import React from 'react'
import { Button } from './button/button';
import { Input } from './input/input'
import { useForm } from "react-hook-form";

const Register = ({ }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
    const Form = () => (
         <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-4">
        <Input placeholder="Username" type="username"  {...register("username", { required: true })}/>
    </div>
    <div className="mb-6">
      <Input placeholder="Password" type="password"  {...register("password", { required: true })}/>
            </div>
    <div className="flex items-end justify-end pb-4">
      <div>
          <a href="#" className="text-kat-primary">
            Forgot your password?
          </a>
                </div>
                </div>
    <div className="flex items-center justify-between">
    <Button size="big" className="w-full" type="submit">Log In</Button>
    </div>
  </form>
    )

    return (
        <>
                <Form/>
        </>
        );
}

export default Register