import {ChatType} from '../Enums';
import {ObjectId, Prop, Schema} from '../../mongoose-types';

export class FileMetaData {
    fileType!: ChatType

    width?: number

    height?: number

    orientation?: number

    duration?: number

    roomId?: string
}

@Schema()
export default class FileInfo {
    public _id!: string;

    public length!: number;

    public chunkSize!: number;

    public uploadDate!: string;

    public filename!: string;

    public md5!: string;

    public contentType!: string

    public metadata!: FileMetaData;

    @Prop()
    public oldUrl?: string;

    @Prop()
    public url!: string

    public uploader!: string;
}
