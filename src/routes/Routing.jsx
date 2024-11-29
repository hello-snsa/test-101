import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import IssueDetails from '../pages/IssueDetails';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issue-detail" element={<IssueDetails />} />
        </Routes>
    )
}
