import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'

const view = () => {

    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
            });
        });
    }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 justify-center h-[91vh] items-center">
        <div className=" bg-gray-400/30 p-16 rounded-2xl space-y-8 shadow-2xl">
	<div className="flex flex-col items-center bg-black rounded-3xl px-2 py-4">
		<h1 className="text-5xl font-bold text-white">{inputs.name} <span className="text-[#5a0c6e]">Info</span></h1>
	</div>
	<div>
			<h3 className="text-3xl font-bold">Name</h3>
			<p className="text-center text-xl font-semibold text-gray-700">{inputs.name}</p>
			<h3 className="text-3xl font-bold">Email</h3>
			<p className="text-center text-xl font-semibold text-gray-700">{inputs.email}</p>
	</div>
    </div>
</div>
  )
}

export default view