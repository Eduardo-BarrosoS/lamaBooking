import mongoose, { Document, Model, RootQuerySelector } from 'mongoose';
const { Schema } = mongoose;

export interface IRoom extends Document {
    title: string;
    price: number;
    maxPeople: number;
    desc: string;
    roomNumbers: [{
        numberRoom: number,
        unavailableDates: { type: [Date]}
    }];
  }

const RoomSchema = new Schema<IRoom>({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomNumbers: [{
        numberRoom: Number,
        unavailableDates: { type: [Date]}
    }]
},
{timestamps: true,}
)

export const Rooms: Model<IRoom> = mongoose.model("Room", RoomSchema)