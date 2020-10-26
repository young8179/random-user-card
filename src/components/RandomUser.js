import React, { Component } from 'react'



class RandomUser extends Component {
    constructor(props){
        super(props)

        this.state ={
            // img: null,
            // name: false,
            // email: false,
            // birthD: false,
            // address: false,
            // phone: false,
            // password: false,
            display: "name"
        }
        this.getRandom()
    }

    getRandom= () =>{
        fetch("https://randomuser.me/api/")
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                name: data.results[0].name.first + " " + data.results[0].name.last,
                img: data.results[0].picture.large,
                email: data.results[0].email,
                birthD: data.results[0].dob.date + " / " + data.results[0].dob.age +  "years old",
                address: data.results[0].location.street.number + " " + data.results[0].location.street.name + " " + data.results[0].location.city + " " + data.results[0].location.state + " " + data.results[0].location.postcode,
                phone: data.results[0].phone,
                password: data.results[0].login.password
            })

            
        })
    }
    name= () =>{
        this.setState({
            // hidden: false,
            display: "name"
        })
    }

    email= () =>{
        this.setState({
            display: "email"
        })
    }

    birthD= () =>{
        this.setState({
            display: "birthDay"
        })
    }

    address= () =>{
        this.setState({
            display: "address"
        })
    }

    phone= () =>{
        this.setState({
            display: "phone"
        })
    }
    password= () =>{
        this.setState({
            display: "password"
        })
    }
    reset= () =>{
        document.location.reload(true)
    }

    render() {
        
        return (
            <div className="container mt-5">
                <div className="row justify-content-center mb-5 img-row">
                    <img src={this.state.img} alt="" className="img "/>
                </div>
                <div className="row justify-content-center name-row">
                    <div className={this.state.display === "name"? "col-12 ":"col-12 noneDisplay"}>
                        <h3>My name is</h3>
                        <h1>{this.state.name}</h1>
                    </div>
                    <div className={this.state.display === "email"? "col-12 ":"col-12 noneDisplay"}>
                        <h3>My email address is</h3>
                        <h1>{this.state.email}</h1>
                    </div>
                    <div className={this.state.display === "birthDay"? "col-12 ":"col-12 noneDisplay"}>
                        <h3>My birthday is</h3>
                        <h1>{this.state.birthD}</h1>
                    </div>
                    <div className={this.state.display === "address"? "col-12 ":"col-12 noneDisplay"}>
                        <h3>My home address is</h3>
                        <h1>{this.state.address}</h1>
                    </div>
                    <div className={this.state.display === "phone"? "col-12 ":"col-12 noneDisplay"}>
                        <h3>My phone number is</h3>
                        <h1>{this.state.phone}</h1>
                    </div>
                    <div className={this.state.display === "password"? "col-12 ":"col-12 noneDisplay"}>
                        <h3>My password is </h3>
                        <h1>{this.state.password}</h1>
                    </div>

                </div>
                <div className="row info-row">
                    <button onClick={this.name} className="col-2 p-2">Name</button>
                    <button onClick={this.email} className="col-2 p-2">Email</button>
                    <button onClick={this.birthD} className="col-2 p-2">BirthDay</button>
                    <button onClick={this.address} className="col-2 p-2">Address</button>
                    <button onClick={this.phone} className="col-2 p-2">Phone</button>
                    <button onClick={this.password} className="col-2 p-2">Password</button>
                    
                </div>
                <div className="row reset-row mt-3">
                    <button onClick={this.getRandom} className="col-12 p-2">Other user</button>
                </div>
                
            </div>
        )
    }
}


export default RandomUser