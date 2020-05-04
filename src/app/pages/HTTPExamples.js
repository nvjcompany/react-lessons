import React, {Component} from 'react';
import API from '../api/API';

export default class HTTPExamples extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        //users
        API.get('users')
        .then(users => {
            this.setState({users: users});
        })
    }

    render() {
        return (<div>
            <h1>HTTP Examples</h1>
            <button onClick={()=>{
                API.post('posts', {name: 'Gosho', age: 21})
                    .then(response => {
                        
                    }, error => {
                        alert('ERROR');
                    })
            }} >Send Post Request</button>
            {this.state.users.map(user => <div>
                {user.name}, {user.phone}
            </div>)}
        </div>)
    }
}
