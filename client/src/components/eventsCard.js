import React from "react";
let participants = []
function eventCard(props) {
    return (
        <div className="container">
            <table className={"table table-hover" + props.color}>
                <tbody>
                    <tr className={"text-white table-"}>
                        <th scope="row">
                            <ol>
                                {props.participants.map(user => {
                                    console.log(user);
                                    return (<li> {user} </li>)
                                })}
                            </ol>
                        </th>
                        <td className="align-middle">
                            <p className="lead">{props.username}</p>
                        </td>
                        <td className="align-middle">
                            <p className="lead">{props.eventname}</p>
                        </td>
                        <td className="align-middle">
                            <p className="lead">${props.amount}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default eventCard;