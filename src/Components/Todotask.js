import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addTODO } from '../redux/slice/todoSlice';
import { useDispatch } from 'react-redux'


const Todotask = () => {

    const [input,setInput] = useState('');
    const dispatch = useDispatch();
    const submithandler = (e)=>{
        e.preventDefault();
        dispatch(addTODO(input));
        setInput('');
    }
  return (
    <div className='todotask' style={{width:'30%'}}>
        <Form onSubmit={submithandler}>
             <Form.Control size="lg" type="text" placeholder="Add Todo..." value={input} onChange={(e)=> setInput(e.target.value)}/>
             <Button variant="primary" className="ms-5" size="lg" type="submit">Submit</Button>
        </Form>
    </div>
  )
}

export default Todotask