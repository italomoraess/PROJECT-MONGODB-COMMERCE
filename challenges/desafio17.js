countProducts = db.produtos.find().count();

db.resumoProdutos.insert(
  { franquia: "McDonalds", totalProdutos: countProducts },
);

db.resumoProdutos.find(
  {},
  { _id: false, franquia: true, totalProdutos: true },
);
