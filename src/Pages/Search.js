import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import EmployeeTable from '../components/Table/index'
// import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: '',
    employee: [],
    results: [],
    error: ''
  };

  componentDidMount() {
    API.fetchEmployee()
      .then(res => this.setState({ employee: res.data.results }))
      .then(res => this.setState({ results: this.state.employee }))
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    let viewArr = this.state.employee
    let filterArr = viewArr.filter(employee => 
      employee.name.first.toLowerCase().indexOf(e.target.value.toLowerCase())> -1);

      this.setState({ results: filterArr})
    // this.setState({ search: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    API.fetchEmployee(this.state.employee)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
      console.log('submit');
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          {/* TODO: STYLE */}
          <h1 className="text-center main-heading">Employee Directory</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            // employees={this.state.employees}
          />
          < EmployeeTable />
          {/* <SearchResults results={this.state.results} /> */}
        </Container>
      </div>
    );
  }
}

export default Search;
