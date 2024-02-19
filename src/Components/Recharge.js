import React,{useEffect,useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from "axios";

export const Recharge = () => {
  const [load, setLoad] = useState(false);
  const [registerDetails,setDetails]=useState();
  useEffect(() => {
    getData();
  }, [])
  const getData=()=>{
    let url = "https://6569ce0bde53105b0dd7b155.mockapi.io/rechargeDetails";
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json", //required format of data
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          let nameList = response.data.map((item) => {
            return (
              <div>
                <table>
                  <tr>
                     <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                  </tr>
                </table>
              </div>
            );
          });
          setDetails(nameList);
          console.log(response.data);
        }
      })
      .catch((error) => {
        alert(console.log(error));
      });
  };
  const postData=()=>{
    setLoad(true);
    let url='https://6569ce0bde53105b0dd7b155.mockapi.io/rechargeDetails';
    const reqBody={
      id:"1",
      name:"Swetha",
      phone:"9133156403"
    }
    axios
  .post(url, JSON.stringify(reqBody), {
    headers: {
      "Content-Type": "application/json", //required format of data
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
    },
  })
  .then((response) => {
    if (response.status === 200 || response.status === 201) {
      console.log("Inserted Successfully");
    }
  })
  .catch((error) => {
    setLoad(false);
    alert("Caught an unexpected error");
  });

  }
   
    const handleClick=()=>{

    }
  return (
    <div style={{
        backgroundColor:'green',
        minHeight:'100vh'
    }}>
        <input type="number" maxLength={10} placeholder='Enter phone number'/>
        <input type='number' placeholder='Enter the amount'/>
        <Button variant="primary" onClick={handleClick}>Success</Button>
    </div>
  )
}
