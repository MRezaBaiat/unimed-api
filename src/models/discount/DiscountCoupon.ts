import {ObjectId, Prop, Schema} from '../../mongoose-types';

@Schema()
export default class DiscountCoupon{
    _id!:string;

    @Prop({required: true})
    title: string;

    @Prop({required: true, unique: true, index: true})
    code: string;

    @Prop({required: true})
    amount: number;

    @Prop({type: Date,required: true})
    startDate: string;

    @Prop({type: Date,required: true})
    endDate: string;

    @Prop({required: true})
    perUserLimit: number;

    @Prop({required: true})
    totalUsageLimit: number;

    @Prop({type: [String],required: true, default: []})
    usages: string[];

    constructor(title: string,code: string,amount: number,startDate: string,endDate: string,perUserLimit: number,totalUsageLimit: number) {
        this.title = title;
        this.code = code;
        this.amount = amount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.perUserLimit = perUserLimit;
        this.totalUsageLimit = totalUsageLimit;
    }
}
