import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import userContext from "./context.js";
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useContext,useState,useEffect } from "react";


export default function Create() {
  const ctx=useContext(userContext);
  const [userData,setUserData]=useState([]);
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [amount,setAmount]=useState(0);
  const[accountNo,setAccountNo]=useState();
  function handleSubmit(e){
      e.preventDefault();
      let data=[...userData,{id:accountNo,name:name,email:email,password:password,amount:amount}];
    //    setUserData(data);
    axios.post("https://server-hea5.onrender.com/create",data)
    alert("Your New Account Created SuccessFully");
     
    }
 useEffect(()=>{

 ctx.users=[...ctx.users,...userData]
 setUserData([]);

 },[userData])


  return (<>
    <div className='background-image'>
    <Form  onSubmit={handleSubmit}>
    <div className="d-flex justify-content-center mx-au p-  ">
        <Card style={{ width: '25rem' }} className='card2'>
            <ListGroup className="list-group-flush fw-bold" >   
                <h1>Create Account</h1>
                <hr></hr>
                <ListGroup.Item><label>Enter Your Account Number:</label><br></br>
                    <input type="text" class="input" onChange={(e)=>{setAccountNo(e.target.value)}}></input>
                </ListGroup.Item>
                <ListGroup.Item ><label> Enter Your Name:</label><br></br>
                    <input type="text" class="input" onChange={(e)=>{setName(e.target.value)}}></input>
                </ListGroup.Item>
                <ListGroup.Item ><label> Enter Your E-mail:</label><br></br>
                    <input type="email" class="input" onChange={(e)=>{setEmail(e.target.value)}}></input>
                </ListGroup.Item>
                <ListGroup.Item ><label> Enter Your password:</label><br></br>
                    <input type="password" class="input" onChange={(e)=>{setPassword(e.target.value)}}></input>
                </ListGroup.Item>
                <ListGroup.Item ><label> Enter Your First Deposit:</label><br></br>
                    <input type="number" class="input" onChange={(e)=>{setAmount(e.target.value)}}></input>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <Button type="submit" id="submitbtn" variant="danger" >Submit</Button>
            <Button type="reset" id="resetbtn" variant="primary">Reset</Button>
            </Card.Body>
        </Card>
    </div>
    </Form>
</div>
</>)
}
