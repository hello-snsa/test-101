import React from 'react'

export default function Labels({ cardData }) {
    return (
        <div>
            <h2>Labels:</h2>
            {cardData?.labels?.map((label, i) => {
                <span key={i}> {label?.name} </span>
            })}
        </div>
    )
}
