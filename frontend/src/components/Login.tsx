import React from 'react'
import { Button } from './button/button';
import { Input } from './input/input'
import { useForm } from "react-hook-form";
import { useLoginMutation } from '../generated/graphql';
import { toErrorMap } from './utils/toErrorMap';

import { useRouter } from 'next/router'



const Login : React.FC<any> = ({ }) => {
  const router = useRouter()
  const [errorMessage,setErrorMessage] = React.useState<any>({})
  const [, login] = useLoginMutation()
     const { register, handleSubmit,reset } = useForm();
  const onSubmit = async (values) => {
    const response = await login(values);
    if (response.data?.login.errors) {
      setErrorMessage(toErrorMap(response.data.login.errors))
      reset(values)
    } else if (response.data?.login.user) {
      router.push("/home")
    }
  }
  
  const ErrorBox = ({ message }) => {
    return(
      <p className="inline-block text-red-800 pt-2">{message}</p>
    )
  }

    const Form = () => (
         <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-4">
        <Input required error={errorMessage?.username } placeholder="Username" type="username"  {...register("username", { required: "username is required" })}/>
          {errorMessage?.username  && <ErrorBox message={errorMessage?.username} />}
      </div>
    <div className="mb-6">
      <Input required error={errorMessage?.password} placeholder="Password" type="password"  {...register("password", { required: "password is required" })}/>
          {errorMessage?.password && <ErrorBox message={errorMessage?.password} />}
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

export default Login