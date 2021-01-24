import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import Result from "../SearchResult/result";
import API from "../../utils/api"


class EmployeeContainer extends Component {

    state = {
        Results: [],
        users: [],
        search: ""
    };

    componentDidMount() {
        API.getEmlpoyeeData()
        .then(res => this.setState({Results: res.data.Results, users: res.data.Results
        })).catch(err => console.log(err));
    }

    handleInputChange = event => {
        // Set our search state on the users input
        this.setState({ search: event.target.value })
        // Deconstruct state for our filtering method
        const { search, users } = this.state;

        // if search is empty do nothing.
        if (search === "") {
            return;
        }
        // if search is not empty start the filtering.
        else {
            const results = users.filter(user => user.name.first.toLowerCase().includes(search.toLowerCase()));
            // Set our results state for use later.
            this.setState({ results });
        }
    };

    handleRefresh() {
        // Simply refreshes the window
        window.location.reload();
    }

    handleSort = () => {
        // pull in our results from state so we can sort
        const { results } = this.state;
        // store the results of our sort method in sort variable
        const sort = results.sort((a, b) => {
            if (a.location.state > b.location.state) { return 1 } // return 1 for a to b to the right of b (Alphabetical)
            else { return -1 } // return -1 for a to be to the left of b (Not Alphabetical)
        })
        // Push our newly sorted sort variable into our results state
        this.setState({ results: sort })
    }

    render() {

        return (
            <div>
                <Navbar />
                <SearchForm
                    handleInputChange={this.handleInputChange}
                    handleRefresh={this.handleRefresh}
                />
                <Result
                results={this.state.results}
                handleSort={this.handleSort}
                />
            </div>
        )

    }
}


export default EmployeeContainer;