import React from 'react'
import { CharacterItem } from './CharacterItem'

export const CharactersGrid = ({ items }) => {
    return (
        <section className='cards'>
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item} />
            ))}
        </section>
    )
}
