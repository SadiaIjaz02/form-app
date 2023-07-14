import { useState } from 'react';
import { ChangeEvent,FormEvent } from 'react';
import { Link } from "react-router-dom";
import { addReqFunc } from './LoginListPost';


const FormPage = () => {
  const [formData, setFormData] = useState({id:0,
    name: '',
    email: ''
  });

  const {mutate} = addReqFunc()

  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // mutate directly when clicked on submitted
    mutate(formData);
    console.log('Form data:', formData);
    // Reset 
    setFormData({
      id:0,
      name: '',
      email: ''
    });
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='col-12 form-label'>
        Name: 
        <input className='form-control'
          type="text" name="name" placeholder='Enter your name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className='col-12 mt-2'>
        Email:
        <input className='form-control'
          type="email" name="email" placeholder='Enter your email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className='mt-2 butn'>Login</button>
      <Link to="/logl">
      <button type="submit" className='mt-2 butn'>View LoginList</button>
      </Link>
    </form>
  );
};

export default FormPage