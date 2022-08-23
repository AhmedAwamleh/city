import { Component } from "react";

export default class Restaurants extends Component {
    render() {
        return (
            <>
                <ul>
                    {
                        this.props.Data && this.props.Data.map(item => (
                            <li>
                                <h3>{item.restaurant}</h3>
                                <p>{item.locality}</p>
                            </li>

                        ))
                    }
                </ul>
            </>
        )
    }
} 