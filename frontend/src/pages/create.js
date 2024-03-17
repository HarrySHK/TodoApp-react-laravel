import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../http'

const create = () => {

  const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.post('/users',inputs).then((res)=>{
            navigate('/');
        })
    }

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6 justify-center h-screen">
	<div className="flex flex-col items-center">
		<h1 className="text-5xl font-bold">New User</h1>
		<p className="text-lg">Insert a new user details below...</p>
	</div>
	<div className="form-group">
		<div className="form-field">
			<label className="form-label">Name</label>
			<input placeholder="Type here" type="text" name="name" className="input input-ghost-secondary max-w-full"
      value={inputs.name}
      onChange={handleChange}
      />
		</div>
		<div className="form-field">
			<label className="form-label">Email address</label>

			<input placeholder="Type here" type="email" name="email" className="input input-ghost-secondary max-w-full" 
      value={inputs.email}
      onChange={handleChange}
      />
			<label className="form-label">
				<span className="form-label-alt">Please enter a valid email.</span>
			</label>
		</div>
		<div className="form-field">
			<label className="form-label">Password</label>
			<div className="form-control">
				<input placeholder="Type here" type="password" name="password" className="input input-ghost-secondary max-w-full" 
        value={inputs.password}
        onChange={handleChange}
        />
			</div>
		</div>
		<div className="form-field pt-5">
			<div className="form-control justify-between">
				<button type="button" className="btn bg-[#5a0c6e] text-white w-full" onClick={submitForm}>Create</button>
			</div>
		</div>
	</div>
</div>
  )
}

export default create