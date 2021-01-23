import React from "react";
import api from "../../utils/api";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import Result from "../SearchResult/result";
import API from "../../utils/api"




class EmployeeContainer extends components {
 
    state = {
        Result: {},
        search: ""
    };

    componentDidMount() {
        this.employeeData("")
    }

    employeeData = query => {
        API.getEmlpoyeeData(query)
        .then(res=>this.setState({Result: res.data}))
        .catch(err=> console.log(err));
    }
 
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value

        });
    };


    handleForSubmit = event => {
        event.preventDefault();
        this.employeeData(this.state.getEmlpoyeeData)
    }
 
    render () {
        
        return(
            <div>
            <Navbar />

            <SearchForm 
            value={this.state.employeeData}
            handleInputChange={this.handleInputChange}
            handleForSubmit={this.handleForSubmit}
            />

            <Result
            />
            </div>
        )
     
    }
}










export default EmployeeContainer;