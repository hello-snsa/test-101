import React, { useEffect, useState } from 'react'
import PageHeader from '../components/common/PageHeader'
import ViewIssues from '../components/home/ViewIssues'
import axios from 'axios'
import { BASE_URL, ISSUE_LIST_API } from '../utils/constants'
import '../components/home/Home.css'
import TabButton from '../components/common/TabButton';

export default function Home() {
  const [issuesList, setIssuesList] = useState([])
  const [issuesHeader, setIssuesHeader] = useState({})
  const [pageNumber, setPageNumber] = useState(1)

  const getIssuesData = async () => {
    try {
      const result = await axios.get(BASE_URL + ISSUE_LIST_API+pageNumber)
      setIssuesList(result?.data?.items);
      console.log("result inside home",result?.data?.items);
    } catch (error) {
      console.log("error while getting list", error)
    }
  }

  useEffect(() => {
    getIssuesData();
  }, [pageNumber]);

  return (
    <div>
      <PageHeader />
      <TabButton/>
      
      {/* Tab */}
      {/* // TODO: Search functionality */}
      {/* view */}
      <ViewIssues issuesList={issuesList} issuesHeader={issuesHeader} />
      {/* Pagination */}

    </div>
  )
}
