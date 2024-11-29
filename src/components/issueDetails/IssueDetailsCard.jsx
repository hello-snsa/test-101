import React, { useEffect, useState } from 'react'
import { getData } from '../api/apiCalls';
import { ISSUE_DETAILS } from '../../utils/constants';
import DetailCard from './DetailCard';
import Labels from './Labels';

export default function IssueDetailsCard() {
    const issueNumber = 58952;
    const [cardData, setCardData] = useState({})

    const getIssueDetails = async () => {
        try {
            const result = await getData(ISSUE_DETAILS + issueNumber);
            console.log("result", result);
            setCardData(result)
        } catch (error) {

        }
    }
    useEffect(() => {
        getIssueDetails();
    }, []);


    return (
        <div>
            <span className='title'>Issue: {cardData?.title}</span>
            <span> #{cardData?.number}</span>
            <p className='status-tags' >{cardData?.state}</p>
            <div>

            <DetailCard cardData={cardData}/>
            <Labels cardData={cardData}/>
            </div>
        </div>
    )
}
