// AdminDashboard.tsx
import React from 'react';
import '../App.css';
import { companyData } from '../data/companyData';
import { getInfo } from '../util/info';
import StatusCard from './statusCard';
import { getRevenueByLocation, getRevenueByType } from '../util/graph';
import Chart from 'chart.js/auto';

const AdminDashboard = () => {
    const data = companyData;
    const info = getInfo(data);
    const locationData = getRevenueByLocation(companyData);
    const typeData = getRevenueByType(companyData);
    window.onload = () => {
        const ctx1 = (document.getElementById('byJobLocation') as HTMLCanvasElement).getContext('2d');
        if (ctx1) {
            new Chart(ctx1, {
                type: 'bar', 
                data: {
                    labels: locationData.labels, 
                    datasets: [{
                        
                        data: locationData.data, 
                        backgroundColor: 'rgb(225,141,131)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                        barThickness: 20,
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                          display: false 
                        }
                    },
                    indexAxis: 'y', 
                    scales: {
                        x: { 
                            beginAtZero: true,
                            ticks: {
                                color: 'black'
                            }
                        },
                        y: {
                            ticks: {
                                color: 'black'
                            }
                        }
                    },
                }
            });
        }
        const ctx2 = (document.getElementById('byJobType') as HTMLCanvasElement).getContext('2d');
        if (ctx2) {
            new Chart(ctx2, {
                type: 'bar', 
                data: {
                    labels: typeData.labels, 
                    datasets: [{
                        label: 'Revenue by Job Type',
                        data: typeData.data, 
                        backgroundColor: 'rgb(225,141,131)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                        barThickness: 20,
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                          display: false 
                        }
                    },
                    indexAxis: 'y', 
                    scales: {
                        x: { 
                            beginAtZero: true,
                            ticks: {
                                color: 'black'
                            }
                        },
                        y: {
                            ticks: {
                                color: 'black'
                            }
                        }
                    },
                }
            });
        }
    };

    return (
        <div className='adminDashboardContainer'>
        <div className='adminDashboard'>
            <div className='headerText'>Company Metrics</div>
            <div className='information'>
                <StatusCard value={info.totalRevenue} label={'Total Revenue'} />
                <StatusCard value={info.avgJobs} label={'Total Jobs Avg'} />
                <StatusCard value={info.ticketsCreated} label={'Tickets Created'} />
                <StatusCard value={info.ticketsScheduled} label={'Tickets Scheduled'} />
            </div>
            <div className='information'>
                <StatusCard value={info.outstandingAmount} label={'Outstanding Amount'} />
                <StatusCard value={info.membershipsSold} label={'Membership Sold'} />
                <StatusCard value={info.jobsCompleted} label={'Jobs Completed'} />
                <StatusCard value={info.totalCancelled} label={'Total Cancelled'} />
            </div>
            <div className='graphDiv'>
                <div className='graphContainer'>
                    <div className='headerText'>Revenue By Job Location</div>
                    <canvas id="byJobLocation" width="400" height="400"></canvas>
                </div>
                <div className='graphContainer'>
                    <div className='headerText'>Revenue By Job Type</div>
                    <canvas id="byJobType" width="400" height="400"></canvas>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AdminDashboard;