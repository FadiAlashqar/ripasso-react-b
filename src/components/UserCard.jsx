import React from 'react'

const userCard = ({ name, email }) => {
    return (
        <div className="card">
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
                <div className="card-title">
                    <span className='fw-bold'>{name}</span>
                </div>
                <div className="card-text">
                    <span>{email}</span>
                </div>
            </div>
        </div>
    )
}

export default userCard