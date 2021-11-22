const { Schema, model } = require("mongoose");

const travelSchema = new Schema({

    place_id:{ type: Schema.Types.ObjectId, ref: 'Place'},
    title: String,
    pointsInt: [String], // sitios de interés que quieres visitar
    
    location: {
      type: {
        type: String
    },
    coordinates: [Number]}
  },
  {
//valida los cambios realizados
    timestamps: true,
  }
);

travelSchema.index({ location: '2dsphere' });

const Travel = model("Travel", travelSchema);

module.exports = Travel;

//Modelo del contenido principal del lugar a visitar 
//(Pza España, Giralda, Barrio Triana -Dentro de Sevilla)