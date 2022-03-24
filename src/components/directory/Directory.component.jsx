import React from 'react'
import CatergoryItem from '../category-item/CatergoryItem.component'
import './directory.styles.scss'

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            { categories.map(category => (
                <CatergoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory