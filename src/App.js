import React,{useState} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import './sample.css'
import './App.css'
//import { blue, bold } from 'chalk';

  

const data= [
  {
    name:"Yugen",
    phone:7867040888,
    mail:"yugiyuso89@gmail.com",
    city:"Trichy",
    state:"Tamil Nadu",
    country:"India",
    Organization:"Company 1",
    jobProfile:"Software Developer",
    AdditionalInfo:"Buys Product rarely"
  },  
  {
    name:"Ram",
    phone:8879679023,
    mail:"ram@gmail.com",
    city:"Trichy",
    state:"Tamil Nadu",
    country:"India",
    Organization:"Company 2",
    jobProfile:"Software Developer",
    AdditionalInfo:"Buys Product rarely"
  },
  {
    name:"Ravi",
    phone:9994559831,
    mail:"ravi@gmail.com",
    city:"Trichy",
    state:"Tamil Nadu",
    country:"India",
    Organization:"Company 3",
    jobProfile:"Software Developer",
    AdditionalInfo:"Buys Product rarely"
  }  
]


function App() {

          const[detail,changeDetail]=useState({
            name:"name",
            phone:1000000,
            mail:"mail@mail.com",
            show:false,
            city:"Trichy",
    state:"Tamil Nadu",
    country:"India",
    Organization:"Company 3",
    jobProfile:"Software Developer",
    AdditionalInfo:"Buys Product rarely"
        })
        
        
        return (
            <div>
              <div className="row">
                  <div className="column">
                {data.map((data,index)=>(
                  <Card className="hai" key={index}>
                    <CardContent>
                        <div className="name">
                        {data.name}
                        </div>
                        <div className="mail">
                        {data.mail}
                        </div>
                        <div className="phone">
                        {data.phone}
                        </div>
                    </CardContent>
                    <CardActions>
                      <div className="button">
                        <Button onClick={()=>{changeDetail(
                          {name:data.name,
                          phone:data.phone,
                          mail:data.mail,
                          show:true,
                          city:data.city,
                          state:data.state,
                          country:data.country,
                          Organization:data.Organization,
                          jobProfile:data.jobProfile,
                          AdditionalInfo:data.AdditionalInfo,

                          }
                          )}}> Click to View Details</Button>
                          </div>
                    </CardActions>

                </Card>   
                ))}
                </div>
                <div className="column">
                {detail.show?<Card className="hai1">
                    <CardContent>
                    <div className="heading">
                        {detail.name}
                        </div>
                        <div className="Maincard">
                          Name : {detail.name} <br/>
                          Phone : {detail.phone} <br/>
                          Email : {detail.mail} <br/>
                          city : {detail.city} <br/>
                          state : {detail.state} <br/>
                          country : {detail.country} <br/>
                          organization : {detail.Organization} <br/>
                          jobprofile : {detail.jobProfile} <br/>
                          AdditionalInfo : {detail.AdditionalInfo} <br/>
                        </div>
                    </CardContent>
                </Card> :<div/>  }
                </div>
              </div>  
            </div>
        );
}

export default App;