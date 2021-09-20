import React, { useEffect, useState } from 'react'
import { GifGridItem } from '../GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifPopular = ( { type,category, limit }) => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getGifs( type, category, limit )
        .then( setPopular )
    }, [type, category, limit])


    return (
        <div className="gif-screen">
            <h2> Trending </h2>
            <div className="gif-grid">
                {
                    popular.map( img => (
                        <GifGridItem  
                        key= {img.id}
                        {...img}
                        />
                        ))
                    }
            </div>
        </div>
    )
}


// api.giphy.com/v1/gifs/categories                    ?api_key=QEjISxncH9pcScDzu58WXxWrmG6Ep8NY
// api.giphy.com/v1/gifs/trending        ?limit=5      &api_key=QEjISxncH9pcScDzu58WXxWrmG6Ep8NY
// api.giphy.com/v1/gifs/random          ?limit=10     &api_key=QEjISxncH9pcScDzu58WXxWrmG6Ep8NY