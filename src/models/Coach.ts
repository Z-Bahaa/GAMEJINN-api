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
    min: number,
    max: number,
  };
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
  }],
  achievements: [{
    type: String,
    required: false,
  }],
  languages: [{
    type: String,
    required: false,
  }],
  price: {
    min: Number,
    max: Number,
  }
}, { timestamps: true });

coachSchema.plugin(mongoosePaginate);

const Coach = model<coachSchema, PaginateModel<coachSchema>>("coach", coachSchema)


export default Coach