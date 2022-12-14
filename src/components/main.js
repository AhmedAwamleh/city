import { Component } from "react";
import pngMap from '../images/map.png'
import restaurantsData from '../fake-data/restaurants.json'
import Restaurants from "./restaurants";
import Map from "./map";

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: restaurantsData,
            displayResult: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            displayResult: true
        })
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Search for location</label>
                    <input id="cityName" type="text" />
                    <button type="submit" >Search</button >

                </form>
                {this.state.displayResult &&
                    <>
                        <Map mapImage={pngMap} />
                        <Restaurants Data={this.state.restaurants} />
                    </>
                }
            </>
        )
    }
}