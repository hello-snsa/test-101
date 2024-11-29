import React from 'react'

export default function IssueCard({issuesData}) {
const {title, number,labels} = issuesData;

  return (
    <div className="issueCard">
        <p>{title}</p>
        {
            labels?.map((label, index) => (<span key={index} className='label-tags' style={{backgroundColor:`#${label?.color}`}}>{label?.name}</span>))
        }
        <p>#{number}</p>
    </div>
  )
}
