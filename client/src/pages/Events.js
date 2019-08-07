import React, { Component } from "react";
import axios from "axios"
import EventCard from "../components/eventsCard"

class Events extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        this.getEvents(this.props.username);
    }
    componentWillReceiveProps(props) {
        this.getEvents(props.username)

    }

    getEvents(username) {
        axios.get("user/newEvents/" + username).then(response => {
            this.setState({
                ...this.state,
                events: response.data
            })
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h4>Events: </h4><br />
                    <div className="card bg-primary">
                        <table className="table table-hover">
                            <tbody>
                                <tr className={"text-white table-"}>
                                    <th scope="row">
                                        Participants
                                    </th>
                                    <th className="align-middle">
                                        Your Name
                                        </th>
                                    <th className="align-middle">Event Name</th>
                                    <th className="align-middle">Amount</th>
                                </tr>
                                {this.state.events.map((event) => {
                                    return (<EventCard
                                        username={event.userId}
                                        eventname={event.eventName} amount={event.amount} color="primary" participants={event.usersAttended} />)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;