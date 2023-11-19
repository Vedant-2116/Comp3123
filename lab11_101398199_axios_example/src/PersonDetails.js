import React from 'react'

const center = {
    margin: 'auto',
    width: '95%',
    background: '#43B9DF'
}

const button = {
    position: 'absolute',
    left: 50
  }

const right = {
    display:"inline", 
    textAlign: 'right'
}

export default function PersonDetails({person}) {

    return (
        <div className="card" style={center}>
            <p class="card-header" ><b>{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</b></p>
            <div className="card-body">
                <div className="row">
                    <div className="col-auto">
                        <img src={person.picture.large} alt="User" className="mb-3" style={{borderRadius: "50%"}}/>
                        <br></br>
                        <button onClick={() => {console.log(person)}} 
                            className="btn btn-primary btn-sm" style={button}>Details</button>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <p className="col card-text" style={right}>User Name:&emsp;</p>
                            <p className="col card-text" style={{fontSize: 'large', fontWeight: 'bold'}}>{person.login.username}</p>
                        </div>
                        <div className="row">
                            <p className="col card-text" style={right}>Gender:&emsp;</p>
                            <p className="col card-text" style={{textTransform: 'uppercase'}}>{person.gender}</p>
                        </div>
                        <div className="row">
                            <p className="col card-text" style={right}>Time Zone Description:&emsp;</p>
                            <p className="col card-text">{person.location.timezone.description}</p>
                        </div>
                        <div className="row">
                            <p className="col card-text" style={right}>Address:&emsp;</p>
                            <p className="col card-text">
                                {person.location.street.number} {person.location.street.name} Street, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</p>
                        </div>
                        <div className="row">
                            <p className="col card-text" style={right}>Email:&emsp;</p>
                            <p className="col card-text">{person.email}</p>
                        </div>
                        <div className="row">
                            <p className="col card-text" style={right}>Birth Date and Age:&emsp;</p>
                            <p className="col card-text">{person.dob.date} ({person.dob.age})</p>
                        </div>
                        <div className="row">
                            <p className="col card-text" style={right}>Registered Date:&emsp;</p>
                            <p className="col card-text">{person.registered.date}</p>
                        </div>
                        <div className="row">
                            <p className="col card-text" style={right}>Phone#:&emsp;</p>
                            <p className="col card-text">{person.phone}</p>
                        </div>
                        <div className="row">
                            <p className="col card-text" style={right}>Cell#:&emsp;</p>
                            <p className="col card-text">{person.cell}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}