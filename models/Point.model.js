const pointSchema = new Schema({

    pointsInt: [{ type: Schema.Types.ObjectId, ref: 'Travel'}], 
    comments: String, 
    tips: String,
    date: Date,
    imageUrl: String

  },
  {

    timestamps: true,
  }
);

const Point = model("Point", pointSchema);

module.exports = Point;











