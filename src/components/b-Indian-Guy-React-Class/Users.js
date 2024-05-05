import React, {Component} from 'react'
import User from './User'

class Users extends Component {

    state = {
        users: [
            {name:"John", age:20 },
            {name:"Jill", age:30 },
            {name:"Peter", age:40 },
        ],
        title:"Users List"
    }

    makeMeYounger = () => {
        const newState = this.state.users.map((user)=> {
            const temUser = user;
            temUser.age -= 10;
            return temUser;
        });
        this.setState({
            newState
        });
    }


    render(){
        return(<div className='flex flex-col items-center justify-center '>
        <button
        className='bg-yellow-500 text-white rounded-lg py-1 px-2 mt-4'
        onClick={this.makeMeYounger}
        >
        Make the age 10 years younger
        </button>
        <br />
        <h1>{this.state.title}</h1>
        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
        <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
        <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
        </div>)
    }
}

export default Users;