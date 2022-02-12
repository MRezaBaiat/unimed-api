import {ObjectId, Prop, Schema} from '../../mongoose-types';

export default class Rating{
    _id!: string;

    @Prop({required: true})
    visitId: string;

    @Prop({required: true})
    serviceQuality: number;

    @Prop({required: true})
    videoCallSatisfaction: number;

    @Prop({required: true})
    doctorDetailsClearity: number;

    @Prop({required: true})
    doctorSolutions: number;

    @Prop({required: true})
    doctorDetailedConsequences: number;

    @Prop({required: true})
    environmentDetails: number;
};
