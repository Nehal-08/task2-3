type Data = {
    jobName: string;
    status: 'completed' | 'cancelled' | 'scheduled';
    revenue: number;
    outstanding: number;
    membership: boolean;
    location: string;
    type: string;
}

export function getRevenueByLocation(data: Data[]): { labels: string[], data: number[] } {
    const revenueByLocation: Record<string, number> = {};

    data.forEach(item => {
        if (!revenueByLocation[item.location]) {
            revenueByLocation[item.location] = 0;
        }
        revenueByLocation[item.location] += item.revenue;
    });

    const labels = Object.keys(revenueByLocation);
    const dataArr = Object.values(revenueByLocation);

    return { labels, data: dataArr };
}

export function getRevenueByType(data: Data[]): { labels: string[], data: number[] } {
    const revenueByType: Record<string, number> = {};

    data.forEach(item => {
        if (!revenueByType[item.type]) {
            revenueByType[item.type] = 0;
        }
        revenueByType[item.type] += item.revenue;
    });

    const labels = Object.keys(revenueByType);
    const dataArr = Object.values(revenueByType);

    return { labels, data: dataArr };
}
