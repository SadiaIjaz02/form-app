// Libraries imports
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

// Component imports
import { addReqFunc } from '../API/LoginListPost';

// Define the type of form data
type FormData = {
  id: number;
  name: string;
  email: string;
  subs: string;
  terms: boolean;
};

const FormPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const { mutate } = addReqFunc();

  const onSubmit = (data: FormData) => {
    // mutate directly when clicked on submitted
    mutate(data);
    console.log('Form data:', data);
    // Reset form
    reset();
  };

  return (
    <>
      <h1 className='mb-5'>React Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            {...register('name', { required: true })}
            placeholder="Enter your name"
            className="mb-3"
          />
          {errors.name && <p className="error errorStyle">Name is required</p>}
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Enter your email"
            className="mb-3"
          />
          {errors.email && <p className="error errorStyle">Valid email is required</p>}
        </Form.Group>

        <Form.Group controlId="subscription">
          <Form.Label>Subscription:</Form.Label>
          <Form.Control
            as="select"
            {...register('subs', { required: true })}
            className="mb-3"
          >
            <option value="" hidden>Select subscription</option>
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </Form.Control>
          {errors.subs && <p className="error errorStyle">Subscription is required</p>}
        </Form.Group>

        <Form.Group controlId="acceptTerms">
          <Form.Check
            type="checkbox"
            {...register('terms', { required: true })}
            label="I accept the terms and conditions"
            className="mb-3"
          />
          {errors.terms && <p className="error errorStyle">You must accept the terms and conditions</p>}
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-2">Login</Button>

        <Link to="/logl">
          <Button variant="secondary" className="mt-2 ms-2">View LoginList</Button>
        </Link>
      </Form>
    </>
  );
};

export default FormPage;
