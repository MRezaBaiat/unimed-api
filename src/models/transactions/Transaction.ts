import {TransactionType} from '../Enums';
import {HealthCenter} from '../../../index';
import {ObjectId, Prop, Schema} from '../../mongoose-types';

class IssuerType{
    @Prop({required: true})
    _id!: string;

    @Prop({required: true})
    type!: 'admin' | 'user';

    @Prop({required: true})
    name!: string;
}

class TargetType{
    @Prop({required: true})
    _id!:string;

    @Prop({required: true})
    name!:string;
}

@Schema({timestamps: true})
export default class Transaction{
    _id!:string;

    @Prop({required: true})
    amount:number;

    @Prop({required: true})
    type:TransactionType;

    @Prop()
    discount: number;

    @Prop()
    doctorCut: number;

    @Prop({type: ObjectId, ref:'healthcenters'})
    healthCenter: string | HealthCenter;

    @Prop()
    healthCenterCut: number;

    @Prop({type: ()=> IssuerType})
    issuer: IssuerType;

    @Prop({type: ()=> TargetType})
    target: TargetType;

    @Prop()
    trackingCode:string;

    @Prop()
    visitId:string;

    @Prop({type: Date})
    createdAt: string;

    @Prop({type: Date})
    updatedAt: string;

    @Prop({default: ''})
    hint:string;

    constructor(type: TransactionType,amount: number) {
        this.type = type;
        this.amount = amount;
    }
}
