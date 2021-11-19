import axios from 'axios';
import React, {Component} from 'react';



class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            UserInfo : []
         }
    }

    componentDidMount =()=>{
        this.getUserInformation();
    }


    getUserInformation = async ()=>{
        console.log("getUserFucntion User_Id :", this.props.user.user_id)
        try{
          const response = await axios.get(`http://127.0.0.1:8000/api/auth/${this.props.user.user_id}/`)
          this.setState({
            userInfo : response.data
          })
          this.props.setUserInfo(response.data);
          console.log("getUserInformation :", this.state.UserInfo)
        } 
        catch{
          console.log("Unable to get User Information")
        }
    }

    render() { 
        var newuser = this.state.UserInfo
        console.log("user:", newuser)
        return (  
            <div>

            </div>
        );
    }
}
 
export default UserInformation;