import React from "react";
import './App.css';
import { UserInfo } from "./components/UserInfo";
import users from './users.json';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.users = users.map(function (info) {

            return (

                <p>{info.name} {info.website} {info.email}</p>
            )
        });
    }

    render() {

        return (
            <div>
                <h1>Users List</h1>

                <UserInfo nom={this.users}/>

                {/* {this.users} */}

            </div>
        )

    }
}




