export default class DiscountCoupon {
    _id: string;
    title: string;
    code: string;
    amount: number;
    startDate: string;
    endDate: string;
    perUserLimit: number;
    totalUsageLimit: number;
    usages: string[];
    constructor(title: string, code: string, amount: number, startDate: string, endDate: string, perUserLimit: number, totalUsageLimit: number);
}
