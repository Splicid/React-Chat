import React, {useState, useEffect} from "react";

const Data = () =>{

    const [data, setData] = useState([{}])

    useEffect(() => {
        async function fetchApi(){
            await fetch("/home").then(
                res => res.json()
            ).then(
                data => {
                    setData(data)
                    console.log(data)
                }
            ) .catch(err =>{
                throw(err)
            })
                
            
        }
        fetchApi();
    }, [])

    return(
        <div> 
            <div>  
                {/* {data.map((datas, key) =>  <h1 key={key}> {datas.age} </h1>)} */}
            </div>
        </div>
    )
}

export default Data;