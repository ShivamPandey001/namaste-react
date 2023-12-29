import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log("child constructor");
        this.state = {
            count : 0
        };
    }

    componentDidMount(){
        console.log("Child ComponentDidMount");
    }

    render() {
        console.log("child render");
        const {name, location} = this.props;
        return (
            <div className="user-card">
                <h1>Name : {name}</h1>
                <button onClick={()=>{
                    this.setState ({
                        count: this.state.count +1
                    })
                }}>Button Increase</button>
                <h2>Location: {location}</h2>
                <h2>Contact: @shivam</h2>
                <h2>
                    {this.state.count}
                </h2>
            </div>
        )
    }
}

export default UserClass;