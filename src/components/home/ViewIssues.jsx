import React from 'react'
import IssueCard from './IssueCard'
import { Link } from 'react-router-dom'

export default function ViewIssues({ issuesList, issuesHeader }) {
    return (
        <div>
            {/* header */}
            {/* list of issues */}

            {issuesList?.map((issueData, i) =>
                <Link to='/issue-detail' key={i}>
                    <IssueCard issuesData={issueData} />
                </Link>
            )
            }
            {/* title */}
            {/* number */}
            {/* LABELS */}

        </div>
    )
}
