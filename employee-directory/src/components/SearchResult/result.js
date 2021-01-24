import React from "react";

function Result(props) {

    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Last name</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Picture</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map((result) => (
                    <tr key={result}>
                        <th scope="row"></th>
                        <td>{props.name.last}</td>
                        <td>{props.name.first}</td>
                        <td>{props.location.city}, {props.location.state}, {props.location.country}</td>
                        <td><img src={props.picture.thumbnail} alt="thumbnail" /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Result;
