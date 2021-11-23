const { Schema, model } = require("mongoose");
const placeSchema = new Schema({
<<<<<<< HEAD
  
    destination: String, // Api buscador place
    description: String, // Api descripción
    imagePlaceUrl: String, //Api imasea

    pointsInt: [String], // sitios de interés que quieres visitar
    
=======
    destination: String, // Api buscador place
    description: String, // Api descripción
    imagePlaceUrl: String, //Api imasea
    pointsInt: [String], // sitios de interés que quieres visitar
>>>>>>> virginia
    location: {
      type: {
        type: String
    },
    coordinates: [Number]} // Este apunto al centro del place - lugar de destino
<<<<<<< HEAD

=======
>>>>>>> virginia
  },
  {
//valida los cambios realizados
    timestamps: true,
  }
);
<<<<<<< HEAD

travelSchema.index({ location: '2dsphere' });

=======
placeSchema.index({ location: '2dsphere' });
>>>>>>> virginia
const Place = model("Place", placeSchema);
module.exports = Place;
///// Modelo del lugar genérico dónde vamos a ir (SEVILLA)