import React from 'react'
import { removeTODO } from '../redux/slice/todoSlice'
import {useDispatch, useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Todolist = () => {

  const dispatch = useDispatch();
  const item = useSelector(state => state.todo)
  return (
    <div className='todolist'>
      
      {item.map((todo)=>(
        
        <Row className='ps-5' style={{width: '100%', paddingBottom:'1rem',paddingTop:'1rem', textAlign:'left' }} key={todo.id}> 
          <Col xs={10}>{todo.text}</Col>
          <Col><Button size="lg" variant='danger'onClick ={(e)=> dispatch(removeTODO(todo.id))}>Delete</Button></Col>
        </Row>
      
      ))}
      
    </div>

  )
}

export default Todolist