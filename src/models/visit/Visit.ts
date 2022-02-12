import {Chat, DiscountCoupon, User, Rating} from '../../../index';
import {VisitStatus} from '../Enums';
import Conference from '../conference/Conference';
import {ObjectId, Prop, Schema} from '../../mongoose-types';
import {Type} from 'class-transformer/';

class ConversationType{
    @Prop({type: [String]})
    delivered:string[];

    @Prop({type: ()=> Chat})
    chat:Chat;
}

class ReceiptType{
    @Prop()
    transaction_id: string;

    @Prop()
    total: number;

    @Prop()
    paid: number;

    @Prop()
    doctorCut: number;

    @Prop()
    discount: number;

    @Prop()
    healthCenterCut: number;

    @Prop({type: ObjectId,ref: 'healthcenters'})
    healthCenterId: string;

    @Prop()
    return_transaction_id:string;

    @Prop({default: false})
    settled:boolean;

    @Prop({default: false})
    healthCenterSettled:boolean
}

@Schema({timestamps: true})
class Visit {
    _id!: string;

    @Prop({type: ObjectId,ref:'users', required: true})
    patient: User;

    @Prop({type: ObjectId,ref:'users', required: true})
    doctor: User;

    @Prop({type: ObjectId,ref: 'discount_coupons'})
    discount?: DiscountCoupon;

    @Prop({required: true,default:VisitStatus.IN_QUEUE,index: true})
    state: VisitStatus;

    @Prop({type: Date})
    createdAt: string;

    @Prop({type: Date})
    updatedAt: string;

    @Prop({type: Date,index: true})
    startDate: string;

    @Prop({type: Date,index: true})
    endDate: string;

    @Prop({type: ()=> [ConversationType], default: []})
    conversations : {delivered:string[];chat:Chat}[];

    @Prop({type: ()=> Rating})
    rating: Rating;

    @Prop({default: false})
    chatting:boolean;

    @Prop({required: true})
    maxDurationMillisec: number;

    @Prop({type: ()=> ReceiptType})
    receipt: ReceiptType
}

export default Visit;
