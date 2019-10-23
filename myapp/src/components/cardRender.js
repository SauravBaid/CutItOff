import React, { Component } from 'react'
import Card from './cards';

export default class cardRender extends Component {
    
    render() {
        return (
            <div style={{display:'flex',flexWrap:"wrap"}}>
                { 
                    this.state.news.map(item => {
                        return <Card content = {item} />
                    })
                }
            </div>
        )
    }
}
