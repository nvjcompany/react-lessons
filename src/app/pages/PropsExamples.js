import React from 'react';
import ShowUsers from '../views/ShowUsers';

class PropsExamples extends React.Component
{
  state = {
    users: [
      {id: 1, name: 'Gosho'},
      {id: 2, name: 'Pesho'},
      {id: 3, name: 'Tosho'}
    ],
    age: 25
  }
  
  incrementAge() {
    this.setState({age: this.state.age + 1})
  }

  deleteUserByIndex(index) {
    let {users} = this.state;
    users.splice(index, 1);
    //this.setState({users: users});
    this.setState({users});
  }

  render() {
    return (<div>
      <ShowUsers 
        users={this.state.users} 
        age={this.state.age} 
        incrementAge={this.incrementAge.bind(this)}
        handleDeleteBtnClick={this.deleteUserByIndex.bind(this)}
      />
      </div>)
  }
}

export default PropsExamples;