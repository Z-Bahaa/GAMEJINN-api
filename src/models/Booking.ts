import { Document, Schema, model, PaginateModel } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

interface bookingSchema extends Document {
  product: {
    sessionTd: string;
    date: string;
    time: string;
  };
  contact: {
    email: string;
    number: string;
    discordId: string;
  };
  payment: {

  };
}

const bookingSchema = new Schema<bookingSchema>({
  product: {
    sessionId: {
      type: String;
    },
    date: {
      type: Date;
    },
    time: {
      type: Date;
    },
  },
  contact: {
    email: { type: String },
    number: { type: String },
    discordId: { type: String },
  },
  payment: {
    
  }
}, { timestamps: true });

bookingSchema.plugin(mongoosePaginate);

const Booking = model<bookingSchema, PaginateModel<bookingSchema>>("booking", bookingSchema)


export default Booking