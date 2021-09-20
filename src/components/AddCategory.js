
import React, { useState } from 'react'
import PropTypes  from 'prop-types'

export const AddCategory = ( { setCategories, categories } ) => {

    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue( event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length > 2 ) {
            setCategories( [inputValue ])
            setInputValue('')
        }

    }
    return (
        <>
            <form className="form" onSubmit={ handleSubmit }>
                <input
                    type="text"
                    value={ inputValue }
                    onChange={ handleChange }
                    className="form__input"
                    placeholder="Buscar..."
                />
            </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}