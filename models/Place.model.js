const { Schema, model } = require("mongoose");

const placeSchema = new Schema({

    name: String, // Api buscador place
    description: String, // Api descripción
    imagePlaceUrl: String, //Api imasea

  },
  {
//valida los cambios realizados
    timestamps: true,
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;



///// Modelo del lugar genérico dónde vamos a ir (SEVILLA)