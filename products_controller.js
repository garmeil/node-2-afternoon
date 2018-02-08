const create = (req, rest, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .create_product(
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageurl
    )
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
};
const getOne = (req, res, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .read_product(req.params.id)
    .then(product => res.status(200).send(product))
    .catch(() => res.status(500).send());
};
const getAll = (req, res, next) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .read_products()
    .then(products => res.status(200).send(products))
    .catch(() => res.status(500).send());
};
const update = (req, res, rest) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .update_product(req.params.id, req.query.desc)
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
};
const destroy = (req, res, rest) => {
  const dbInstance = req.app.get("db");
  dbInstance
    .delete_product(req.params.id)
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
};
module.exports = {
  create,
  getOne,
  getAll,
  update,
  destroy
};
