import { Document, Schema, model, PaginateModel } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

interface sessionSchema extends Document {
  coachId: string;
  gameId: string;
  title: string;
  about: string;
  duration: {
    amount: number;
    unit: string;
  };
  price: {
    amount: number;
    currency: string;
  };
}

const sessionSchema = new Schema<sessionSchema>({
  coachId: {
    type: String,
    required: true,
  },
  gameId: {
    type: String,
    required: false,
    unique: false
  },
  title: {
    type: String,
    required: false,
    unique: false
  },
  about: {
    type: String,
    required: false,
    unique: false
  },
  duration: {
    amount: {
    type: Number, 
    },
    unit: {
      type: String, 
    }
  },
  price: {
    amount: {
    type: Number, 
    },
    currency: {
      type: String, 
    }
  }
}, { timestamps: true });

sessionSchema.plugin(mongoosePaginate);

const Session = model<sessionSchema, PaginateModel<sessionSchema>>("session", sessionSchema)


export default Session