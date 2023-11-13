import React, {useState} from 'react'
import './App.css';

export default function DataForm() {

    const [data, setData] = useState({email:' Your Email', fnm:'Your full name', add1:'Address1', add2:'Address2', city:'Your city', province:'Your province', postalCode:'Your postal code'})
    
  
    const readData = (event) => {
      setData({...data, [event.target.name]: event.target.value})
    }

    
    return (
        <div className="App">
        <h1>Data Entry Form</h1>
        <form onSubmit={readData}>
            <label>Email :   </label>
            <input name="email" onChange={readData} placeholder="Enter email" type="text"/>
              <br></br>
            <label> Name  :  </label>
            <input name="fnm" onChange={readData} placeholder="Full Name" type="text"/>
            <br></br>
            <label>Address1 : </label>
            <input name="add1" onChange={readData} placeholder="1234 Main St" type="text"/>
            <br></br>
            <label>Address2 : </label>
            <input name="add2" onChange={readData} placeholder="Apartment/studio/floor" type="text"/>
            <br></br>
            <label>City  : </label>
            <input name="city" onChange={readData} type="text"/>
            <br></br>
            <label>Province : </label>
            <select name="province" onChange={readData}>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
            </select>
            <br></br>
            <label>Postal Code : </label>
            <input name="postalCode" onChange={readData}  type="text"/>
            <br></br>
            <input type="submit" value="Submit"/>
        </form>
        <h2>Data Output</h2>
        <h5>Email: {data.email} </h5>
        <h5>Full Name: {data.fnm} </h5>
        <h5>Address: {data.add1} + {data.add2}</h5>
        <h5>City: {data.city} </h5>
        <h5>Province: {data.province}</h5>
        <h5>Postal Code: {data.postalCode} </h5>
        </div>
    );
}