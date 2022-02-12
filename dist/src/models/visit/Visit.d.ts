import { Chat, DiscountCoupon, User, Rating } from '../../../index';
import { VisitStatus } from '../Enums';
declare class ReceiptType {
    transaction_id: string;
    total: number;
    paid: number;
    doctorCut: number;
    discount: number;
    healthCenterCut: number;
    healthCenterId: string;
    return_transaction_id: string;
    settled: boolean;
    healthCenterSettled: boolean;
}
declare class Visit {
    _id: string;
    patient: User;
    doctor: User;
    discount?: DiscountCoupon;
    state: VisitStatus;
    createdAt: string;
    updatedAt: string;
    startDate: string;
    endDate: string;
    conversations: {
        delivered: string[];
        chat: Chat;
    }[];
    rating: Rating;
    chatting: boolean;
    maxDurationMillisec: number;
    receipt: ReceiptType;
}
export default Visit;
