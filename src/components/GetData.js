import React from 'react';
import Axios from 'axios';

function GetData(){
    const ShowData=()=>{
        Axios.get("https://dry-bayou-99944.herokuapp.com/profiles").then(
            (response)=>{
            console.log(response);
        }
        );
    };
    return(
        <div>
            <button onClick={ShowData}>ShowData</button>

        </div>
    );

}

export default GetData;