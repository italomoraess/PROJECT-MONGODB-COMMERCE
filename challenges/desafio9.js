db.produtos.find(
    { $and: [
        { "valoresNutricionais.tipo": "calorias" },
        { "valoresNutricionais.quantidade": { $lt: 500 } },
      ],
    },
    { _id: false, nome: true },
);