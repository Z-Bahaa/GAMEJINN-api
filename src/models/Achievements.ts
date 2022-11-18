import { Document, Schema, model, PaginateModel } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

interface achievementsSchema extends Document {
  coachId: string;
  achievements: Array<{
    achievementType: string;
    title: string;
    subtitle: string;
    year: number;
  }>
}

const achievementsSchema = new Schema<achievementsSchema>({
  coachId: {
    type: String,
    required: true,
  },
  achievements: [{
    achievementType: {
      type: String,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    year: {
      type: Number,
    },
  }]
}, { timestamps: true });

achievementsSchema.plugin(mongoosePaginate);

const Achievements = model<achievementsSchema, PaginateModel<achievementsSchema>>("achievements", achievementsSchema)


export default Achievements