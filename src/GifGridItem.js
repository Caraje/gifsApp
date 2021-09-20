import React from 'react'

export const GifGridItem = ( {id, title, url}) => {
    return (
        <div className="gif-card">
            <a href={url} rel="noreferrer" target= "_blank"> <img className="gif-card__img" src={url} alt={title} title={title} /> </a>
        </div>
    )
}
