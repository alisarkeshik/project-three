import React, { Component } from "react";
import axios from "axios"
import EventCard from "../components/eventsCard"
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import "../../../client/src/events.css"


Table.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    size: PropTypes.string,
    bordered: PropTypes.bool,
    borderless: PropTypes.bool,
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.bool,
    // Custom ref handler that will be assigned to the "ref" of the inner <table> element
    innerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.object
    ])
};

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
            <div className="col-md-8 mx-auto align-middle">
                <h4>Events: </h4>
                <br />
                <Table className="table table-hover text-white lead align-middle card bg-primary">
                    <thead className="table-light text-center">
                        <tr>
                            <th scope="col">
                                Participants
                            </th>
                            
                            <th scope="col">Event Name</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>

                    <tbody className="align-middle">
                        {this.state.events.map((event) => {
                            return (<EventCard
                                username={event.userId}
                                eventname={event.eventName}
                                amount={event.amount}
                                color="primary"
                                participants={event.usersAttended} />)
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Events;