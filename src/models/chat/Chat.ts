import {ChatType, ReceiveStatus, SendStatus} from '../Enums';
import {ObjectId, Prop, Schema} from '../../mongoose-types';

class MediaInfoType{

    @Prop()
    width:number;

    @Prop()
    height:number;

    @Prop()
    duration:number;

    @Prop()
    orientation:number;
}

export default class Chat{
    @Prop({required: true})
    id!:string;

    @Prop({required: true})
    sender!: string;

    @Prop()
    text: string;

    @Prop({required: true})
    sendStatus: SendStatus;

    @Prop({required: true})
    type: ChatType;

    @Prop({type: Date})
    createdAt:string;

    @Prop()
    url!: string;

    @Prop()
    fileSize!:number;

    @Prop()
    fileName!: string;

    @Prop({type: ()=> MediaInfoType})
    mediaInfo!: MediaInfoType

    constructor(text: string,sendStatus: SendStatus,type: ChatType,createdAt: string) {
        this.text = text;
        this.sendStatus = sendStatus;
        this.type = type;
        this.createdAt = createdAt;
    }
}
