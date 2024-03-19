// LoginDashboard.tsx
import React from 'react';
import '../App.css';

type StatusProp = {
    value: number;
    label: string;
};
const StatusCard = (data: StatusProp) => {
    const addDollar = data.label === 'Total Revenue' ||  data.label === 'Total Jobs Avg' || data.label === 'Outstanding Amount';
    return (
        <div className="container">
            <div className="color-strip"/>
            <div className="data-container">
                <div className="amount" style={{fontWeight: 'bold'}}>
                    {addDollar ? '$' : ''}{Math.floor(data.value)}
                </div>
                <div className="label">
                    {data.label}
                </div>
            </div>
        </div>
    );
}

export default StatusCard;