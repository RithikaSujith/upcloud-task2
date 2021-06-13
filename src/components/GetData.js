import React from 'react';
import Axios from 'axios';
import Card from './Card';

// function GetData(){
//     const ShowData=()=>{
//         Axios.get("https://cors-anywhere.herokuapp.com/https://dry-bayou-99944.herokuapp.com/profiles/").then(
//             (response)=>{
//             console.log(response);
//         }
//         );
//     };
//     return(
//         <div>
//             <button onClick={ShowData}>ShowData</button>
 
//         </div>
//     );

// }

class GetData extends React.Component{  
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: []
        };
      }

      
      componentDidMount() {
        setTimeout(()=> {
            Axios.get("https://cors-anywhere.herokuapp.com/https://dry-bayou-99944.herokuapp.com/profiles/")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  data: result.data
                });
              },
    
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        },0)

      }    
    render(){
        const { error, isLoaded, data } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div class="loading"></div>
        } else {   console.log(data)  
        return(

          <div className="container-fluid">   
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                {data.map(data => (
                <div className="col-md-4">
                        <Card  id={data.id} name={data.name} email={data.email} address={data.address}/>
                    </div>
              ))}                                         
                </div>
          </div>                                                      
          </div>    
            
        );
    }
}
}

export default GetData;
