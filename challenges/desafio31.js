db.produtos.find(
    { $expr: { $gt: ["$curtidas", "$vendidos"] } },
    { _id: false, nome: true },
);

// https://www.mongodb.com/docs/manual/reference/operator/query/expr/