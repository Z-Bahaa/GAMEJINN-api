import { Document, Schema, model, PaginateModel } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

interface coachSchema extends Document {
  name: string;
  title: string;
  bannerUrl: string;
  profileImageUrl: string;
  offeredGames: Array<string>;
  offeredServices: Array<string>;
  languages: Array<string>;
  achievements: Array<string>;
  about: string;
  availableAt: string;
  price: {
    amount: number,
    currency: string,
  };
  offeredSessions: Array<string>;
}

const coachSchema = new Schema<coachSchema>({
  name: {
    type: String,
    required: true,
  },
  availableAt: {
    type: String,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  bannerUrl: {
    type: String,
  },
  profileImageUrl: {
    type: String,
  },
  offeredGames: [{
    type: String,
    required: false,
  }],
  offeredServices: [{
    type: String,
    required: false,
  }],
  offeredSessions: [{
    type: String,
    required: false,
  }],
  achievements: [{
    type: String,
    required: false,
  }],
  languages: [{
    type: String,
    required: false,
  }]
}, { timestamps: true });

coachSchema.plugin(mongoosePaginate);

const Coach = model<coachSchema, PaginateModel<coachSchema>>("coach", coachSchema)


export default Coach