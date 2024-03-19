type Data = {
    jobName: string;
    status: 'completed' | 'cancelled' | 'scheduled';
    revenue: number;
    outstanding: number;
    membership: boolean;
    location: string;
    type: string;
}

export const getInfo = (data: Data[]) => {
    const totalRevenue = data.reduce((acc, job) => acc + job.revenue, 0);
    const totalJobs = data.length;
    const avgJobs = totalRevenue / totalJobs;
    const ticketsCreated = data.length;
    const ticketsScheduled = data.filter(job => job.status === 'scheduled').length;
    const outstandingAmount = data.reduce((acc, job) => acc + job.outstanding, 0);
    const membershipsSold = data.filter(job => job.membership).length;
    const jobsCompleted = data.filter(job => job.status === 'completed').length;
    const totalCancelled = data.filter(job => job.status === 'cancelled').length;

    return {
        totalRevenue,
        avgJobs,
        ticketsCreated,
        ticketsScheduled,
        outstandingAmount,
        membershipsSold,
        jobsCompleted,
        totalCancelled
    };

}