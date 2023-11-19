import axios from 'axios'
import React, { Component } from 'react'
import PersonDetails from './PersonDetails'

export default class PersonList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons:[]
        }
    }
    componentDidMount = () => {
        const PERSON_URL = "https://randomuser.me/api/?results=10"
        axios.get(PERSON_URL)
        .then(res => {
            console.log(res.data)
            const persons = res.data.results
            this.setState({ persons })
        })
    }
    render() {
        return (
        <>
            <h4 style={{textAlign: 'center', background: 'forestgreen', padding: '15px'}}>User List</h4>
            {
                this.state.persons.map(p => (
                    <>
                        <PersonDetails key={p.id} person={p}/>
                        <hr></hr>
                    </>
                ))
            }
        </>
        )
    }
}