import React, { Component } from 'react'
import axios from 'axios'

class main extends Component{

    constructor(){
        super()
        this.state = {
            empty: false,
            summarized : " "
        }
    }
    
    handleclick = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/', { text: this.state.data, noOfLines: this.state.lines })
        .then(res =>{
            this.setState({
                data: '',
                lines: 5,
                empty: true,
                summarized: res.data
            })
            console.log(this.state.summarized)

        })
        .catch(err =>{
            console.log("Error")
        })
    }

    handlechange1 = (e) =>{
        this.setState({
            data: e.target.value
        })
    }

    handlechange2 = (e) =>{
        this.setState({
            lines: e.target.value
        })
    }

    render(){
        console.log(this.state.summarized)
    return (
        <div className="bg-dark" style={{padding: '10%', color: 'white', fontWeight: 600,'overflow':"hidden"}} >
            <div style={{ display: 'flex'}} >
                <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <label style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', fontSize: 20, color: 'white' }} >Insert your Paragraph</label>
                    <textarea style={{ display: 'flex', flex:1, width: '90%', height: 250}} onChange={this.handlechange1} ></textarea>
                    <div style={{ marginTop: 20 }} >
                    <label className="text-danger font-weight-bold" >Cut it Off &nbsp; </label> <input type="number" style={{ width:50, height: 25, textAlign: 'center' }} placeholder="100" onChange={this.handlechange2} /> <label> &nbsp; Lines</label>
                    </div>
                </div>
                <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
                    <label style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', fontSize: 20, color: 'white' }} >Summarized Paragraph</label>
                    <textarea style={{ display: 'flex', flex:1, width: '90%', height: 250}} >{this.state.summarized}</textarea>
                </div>
            </div>
            <div style={{ marginTop: 30, textAlign: 'center', paddingRight: 60 }} >
                <button className="px-4 py-1 text-dark" style={{ backgroundColor: 'white', border: 'none', fontWeight: 600 }} onClick={this.handleclick} >Summarize</button>
            </div>
        </div> 
    )
    }
}


export default main