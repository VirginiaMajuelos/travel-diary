const pointSchema = new Schema({

    pointInt:{type: Schema.Types.ObjectId, ref: 'Place'},
    comments: String, 
    tips: String,
    date: Date,
    imageUrl: String,

    location: {
      type: {
        type: String
    },
    coordinates: [Number]}

  },
  {

    timestamps: true,
  }
);

const Point = model("Point", pointSchema);

module.exports = Point;











