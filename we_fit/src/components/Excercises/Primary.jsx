import React, {Component} from 'react';

class Primary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            primary_lifts : [],
            selected_primary : []
         }
    }

    componentDidMount =()=>{
        this.setState({
            primary_lifts : this.props.primary_lifts
        })
    }


    render() { 
       
        var newList = this.state.primary_lifts.length > 0
            && newList.map((item, i)=>{
                return (
                    <option key={i} value={item.id}>{item.name}</option>
                )
            }, this);
        return (  
            <div>
                
                <select>
                    {newList}
                </select>
            </div>
        );
    }
}
 
export default Primary;