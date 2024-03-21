import './App.css';
import {useContext} from 'react';
import {useState,useEffect } from "react";
import userContext from './context.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import img from './wt.png';
import axios from 'axios'

export default function Withdraw(){
   
    const [withdraw,setWithdraw]=useState(0);
    const [userId,setUserId]=useState();
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchdata=async()=>{
           await axios.get('https://server-hea5.onrender.com/data').then((item)=>{setData(item.data)})
        };fetchdata()
     },[]);


    function handleClick(e){
        e.preventDefault();
       for(let i=0;i<data.length;i++){
            if(data[i].id === Number(userId)){
                if(data[i].amount>0){
                    data[i].amount=Number(data[i].amount)-Number(withdraw);
                    let updateData={amount:data[i].amount};
                   let url=`https://server-hea5.onrender.com/update/${data[i]._id}`
                    axios.put(url,updateData);
                    alert(`Rs.${withdraw} Amount Withdraw on Your Account`)
                }
                else{
                    alert("YOUR ACCOUNT BALANCE 0 SO YOU CAN'T WITHDRAW");
                }
              
            }
         }
     }
    return(<> 
    <div className='background-image'>
        <div className="wth" style={{ transition: 'all 0.5s' }}>
            <img src={img} style={{ height: '300px', width: '300px', transition: 'all 0.5s' }} />
        </div>
        <Form  onSubmit={handleClick}  >
        <div className="d-flex justify-content-center mx-au p-  ">
            <Card style={{ width: '25rem' }} className='card1'>
                <ListGroup className="list-group-flush fw-bold" >   
                    <h1>Withdraw</h1>
                    <hr></hr>
                    <ListGroup.Item><label>Account No:</label><br></br>
                        <input type="text" class="input" onChange={(e)=>{setUserId(e.target.value)}}  ></input>
                    </ListGroup.Item>
                    <ListGroup.Item ><label> Withdraw Account:</label><br></br>
                        <input type="number" class="input" onChange={(e)=>{setWithdraw(e.target.value)}}></input>
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
