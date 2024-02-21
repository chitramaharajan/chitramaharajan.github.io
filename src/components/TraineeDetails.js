import React from "react";

class TraineeDetails extends React.Component {

    constructor(){
        super();
        this.state={value:"Trainee Details"}
    }
    setValue = (e)=>{
        this.setState({value:e.target.value})
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:"black"})
        },3000)
       console.log("mounted"); 
    }
    componentDidUpdate(){
        console.log("updated");
  }

  render(){
      return(
          <div className="register">
            <div className="col-1">
            {/* <input type="text" onChange={(e)=>this.setValue(e)}></input> */}
              <h1 style={{color:this.state.color}}>{this.state.value}</h1>
              {this.state.value==="trainee details" }
              <table >
              <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Contact</th>
          </tr>
          <tr>
              <td>Madhu</td>
              <td>Frontend</td>
              <td>''</td>
          </tr>
          <tr>
              <td>Nithran</td>
              <td>React</td>
              <td>' '</td>
              </tr>
                    <tr>
                        <td>Raj</td>
                        <td>Fullstack</td>
                        <td>' '</td>
                    </tr>
                    <tr>
                        <td>Chitra</td>
                        <td>Fullstack</td>
                        <td>' '</td>
                    </tr>
                </table>
            </div>
            </div>
        );
    }

}

    

    
        
    


export default TraineeDetails;