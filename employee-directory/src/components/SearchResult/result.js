import React from "react";

function Result(props) {
    console.log(props)
    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Last name</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Picture</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(result => (
                    <tr key={result.id.value}>
                    <th scope="row"></th>
                    <td>{result.name.last}</td>
                    <td>{result.name.first}</td>
                    <td>{result.location.city}, {result.location.state}</td>
                    <td>{result.cell}</td>
                    <td><img src={result.picture.thumbnail} alt="thumbnail" /></td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Result;
