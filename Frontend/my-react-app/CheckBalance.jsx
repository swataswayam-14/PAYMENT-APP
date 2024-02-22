import React, { useEffect, useState } from "react";
import axios from "axios";


const CheckBalance = ()=>{
    const [balance , setBalance] = useState("")
    useEffect(()=>{
        async function getBalance(){
            const token = localStorage.getItem('token')
            if(token){
                try{
                    const response = await axios.get('13.233.95.171:3000/api/v1/account/balance',{
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    setBalance(response.data.balance)
                }catch(e){
                    console.log(e);
                }

            }
        }
        getBalance()
    },[])
    return(
        <div>
            <h1>Your Account Balance is {balance}</h1>
        </div>
    )
}

export default CheckBalance