import React from 'react'

export default function cards({content}) {
    return (
        <div className="brief-box">
            <div className="box-img">
                <img src={content.imgUrl} alt="News description" />
            </div>
            <h2>{content.heading}</h2>
            <p>{content.brief}</p>
            <div className="catergory">
                <span>{content.category}</span>
            </div>
        </div>
    )
}
