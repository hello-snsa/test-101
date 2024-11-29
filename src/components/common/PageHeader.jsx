import React from 'react'

export default function PageHeader() {
const data = {
  repoName:"Angular",
  userName:"Ali"
}

  return (
    <div>
      <h2>{data?.repoName}</h2>
      <h2>{data?.userName}</h2>

    </div>
  )
}
