import React, { useState } from 'react'

export const Search = ({ getQuery }) => {


    const [text, setText] = useState('');

    const onChangeText = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <section className='search'>
            <form>
                <input type="text" className='form-control' placeholder='Search Characters' autoFocus onChange={(e) => onChangeText(e.target.value)}></input>
            </form>
        </section>
    )
}
