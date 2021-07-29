import axios from 'axios';
import React,{useState} from 'react'

import { useForm } from "react-hook-form";

import { Modal } from 'react-responsive-modal';
import { useCreatePostMutation } from '../../generated/graphql';


import { Input } from '../input/input';


interface AddPhotoProps {
}


const AddPhoto: React.FC<AddPhotoProps> = ({ }) => {
    const { register, handleSubmit,reset } = useForm();
    const [,createPost] = useCreatePostMutation()
    const [loading, setLoading] = useState({ verification: false, upload: false })
    const [error, setError] = useState({verification: null, upload: null})
    const [open, setOpen] = useState(false);
    const [Image, setImage] = useState <any>({})
  const onOpenModal = () => setOpen(true);
    const onCloseModal = () => { setOpen(false),reset(),setError({...loading,verification:null}),setImage({}) }
    console.log(process.env.NEXT_PUBLIC_URL)
    const onSubmit = (data) => {
        data = {
            ...data,
            image: Image?.url
        }
        const response = createPost(data)
        console.log(response)
        reset()
        setImage({})
        onCloseModal()
  }
    
    const CatVerification = (file) => {
        const formData = new FormData()
        setError({ ...error, verification: null })
        setImage({})
        formData.append(
            'file',
            file,
            file.name
        )

        var api_url = process.env.NEXT_PUBLIC_URL
        var api_key = process.env.NEXT_PUBLIC_AI

    

        axios({
            method: 'post',
            url: api_url,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-api-key': api_key
            }
        }).then(function (response) {
            console.log(response)
            setLoading({ ...loading, verification: false })
            setImage(response?.data)
        }).catch(function (response) {
            console.log(response)
            setLoading({...loading,verification:false})  
            setError({...error,verification:"nope that's not a cat"})
        })
    }
    return (
        <div>
            <div className="flex">
     <button className="bg-blue-400 text-white p-4 mb-2 mt-2  text-2xl"onClick={onOpenModal}>Add Photo</button>
        </div>
                <Modal open={open} onClose={onCloseModal} center>
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-4">
                    <div className="p-2">
                    <label>Title</label>
                    <Input  {...register("title", { required: "title is required" })} placeholder="title"/>
                    </div>
                    <div className="p-2  bg-grey-lighter ">
                    <label className="w-64 flex flex-col items-center mx-auto px-4 py-6 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Select a Image</span>
                            <input type='file' className="hidden" onChange={(e) => {
                                const file = e.target.files[0];
                              
                                CatVerification(file)
                                setLoading({...loading,verification:true})
        }} />
                        </label>
                        
                    </div>
                    {loading?.verification && 
                        <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                            <p className="font-bold flex"> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg>
  Processing</p>
</div>
                        
                    }
                    
                        {console.log(error.verification)}
                        {error?.verification !== null ?
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">No!!</strong>
  <span className="block sm:inline">That's not a cat try uploading cat image</span>
</div>: ""}


                    {Image?.url && <button className="bg-kat-primary w-100 mx-auto p-2 text-white mt-5 text-2xl" type="submit">submit</button>}
        </form>
      </Modal> 
    </div>
  );
}

export default AddPhoto