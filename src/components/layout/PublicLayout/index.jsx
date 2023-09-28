import React from 'react'
import "./style.css"

const PublicLayout = ({ children }) => {
    return (
        <>
            <div className="layout-container">
            {children}
            </div>
        </>
    )
}

export default PublicLayout