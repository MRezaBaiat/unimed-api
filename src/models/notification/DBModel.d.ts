/// <reference types="mongoose" />
declare const dbModel: {
    title: {
        type: StringConstructor;
        required: boolean;
    };
    body: {
        type: StringConstructor;
        required: boolean;
    };
    successCount: {
        type: NumberConstructor;
        required: boolean;
    };
    date: {
        type: NumberConstructor;
        required: boolean;
    };
    sender: {
        type: typeof import("mongoose").Types.ObjectId;
        required: boolean;
        ref: string;
    };
    state: {
        type: StringConstructor;
        required: boolean;
    };
    link: {
        type: StringConstructor;
        required: boolean;
    };
};
export default dbModel;
