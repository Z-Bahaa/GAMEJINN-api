import { Document, Schema, model, PaginateModel } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

interface gameSchema extends Document {
  title: string;
  ImageUrl: string;
  coaches: Array<string>;
}

const gameSchema = new Schema<gameSchema>({
  title: {
    type: String,
    required: true,
    unique: true
  },
  ImageUrl: {
    type: String,
    required: false,
    unique: false
  },
  coaches: [{
    type: String,
    required: false,
  }]
}, { timestamps: true });

gameSchema.plugin(mongoosePaginate);

const Game = model<gameSchema, PaginateModel<gameSchema>>("game", gameSchema)


export default Game