import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import { GifPopular } from './components/GifPopular'

export const GifApp = () => {
    
    const [categories, setCategories] = useState([''])

    return (

        <>
            <div className="nav">
                <div className="menu-bar">
                        <div className="logo">
                            <p>Giff<span>App</span></p>
                        </div>
                        <div className="search-bar" >
                            <AddCategory setCategories={ setCategories } categories= { categories }/>
                        </div>
                </div>
            </div>


            

            <div className="container">
                    <h1> Aplicacion de Gifs</h1>

                    {
                        categories.map( category => ( 
                            <GifGrid 
                            key={ category }
                            category= { category } 
                            type={ 'search' }
                            limit={ 28 }
                            />
                        ))
                    }  

                    <GifPopular 
                        category= { null } 
                        type={'trending'}
                        limit={ 14 }
                    />
                    {
                        categories.map( category => ( 
                            <GifGrid 
                            key={ category }
                            category= { 'memes' } 
                            type={ 'search' }
                            limit={ 14 }
                            />
                        ))
                    }    
                    {
                        categories.map( category => ( 
                            <GifGrid 
                            key={ category }
                            category= { 'videogames' } 
                            type={ 'search' }
                            limit={ 14 }
                            />
                        ))
                    }    
                    {
                        categories.map( category => ( 
                            <GifGrid 
                            key={ category }
                            category= { 'Cine' } 
                            type={ 'search' }
                            limit={ 14 }
                            />
                        ))
                    }    
                    {
                        categories.map( category => ( 
                            <GifGrid 
                            key={ category }
                            category= { 'Tv Shows' } 
                            type={ 'search' }
                            limit={ 14 }
                            />
                        ))
                    }    
            </div>

            <div className="footer">
                <div className="footer-bar">
                        <div className="logo">
                            <p>Giff<span>App</span></p>
                        </div>
                        <div className="footer-link" >
                            <a href='https://www.carlosajenjo.com' target="_blank" rel="noreferrer" > <span>www.</span>carlosajenjo<span>.com</span></a>
                        </div>
                </div>
            </div>
        </>
    )
}
