import React, {useState, useEffect} from "react";

const Data = () =>{

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/home").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return(
        <div> 

        </div>
    )
}

export default Data;