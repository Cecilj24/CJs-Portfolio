import React from 'react'


function Project(props) {
    const { productImage, name, description, } = props.data

    return (
        <div className='Projects'>
            <img alt='project' src={productImage} />
            <div className='card'>
                <h3> {name} </h3>
                <p className='description'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Project