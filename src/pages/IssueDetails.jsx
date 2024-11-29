import React from 'react'

import PageHeader from '../components/common/PageHeader'
import IssueDetailsCard from '../components/issueDetails/IssueDetailsCard'
import '../components/issueDetails/IssueDetails.css'
import TabButton from '../components/common/TabButton';


export default function IssueDetails() {
  return (
    <div>
      <PageHeader />
      <TabButton/>
      <IssueDetailsCard />
    </div>
  )
}
