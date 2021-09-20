import React, { useEffect, useState } from 'react'
import { GifGridItem } from '../GifGridItem'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ( { type, category, limit } ) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs( type,  category, limit  )
        .then( setImages )
    }, [type, category, limit])

    console.log('=>' , images)



    return (
            <div className="gif-screen">
                {
                    !category ? 
                        <div>
                        </div>
                        : <div>
                            <h2> {category} </h2>
                            <div className="gif-grid">
                                
                                {
                                    images.map( img => (
                                        <GifGridItem  
                                        key= {img.id}
                                        {...img}
                                        />
                                        ))
                                    }
                            </div>
                        </div>
                }

            
            </div>

    )
}
