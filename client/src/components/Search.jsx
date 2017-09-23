import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   term: ''
    // }
    // this.onChange= this.onChange.bind(this)
    // this.search= this.search.bind(this) 
 
  }

  // onChange (e) {
  //   console.log(e.target.value);
  //   this.setState({
  //     term: e.target.value
  //   });
  // }

  // search() {
  //   this.state.onSearch(this.state.term);
  // }

  render() {
    return (
      <div>
      <h4>Add more repos!</h4>
        <form id='userNameForm' name='inputForm' action='/repos/import' method="POST">
          Enter a github username: <input name="search" />       
          <button> Add Repos </button>
        </form>
      </div>) 
  }
}

export default Search;