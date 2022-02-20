import Visit from './visit/Visit';
export default interface FinancialAudit {
    total: number;
    companyCut: number;
    paid: number;
    doctorCut: number;
    discountAmounts: number;
    payable: number;
    medicalCenterCut: number;
    fromDate: string;
    toDate: string;
    unsettledVisits: Visit[];
}
