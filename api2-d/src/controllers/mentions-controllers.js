
// delete
exports.deleteFunction = async id => {
  await Mentions.findOneAndRemove(id);
};

exports.deleteMentions = async (req, res) => {
  try {
    await this.deleteFunction(req.body.id);
    res.status(200).send({
      message: 'Menção removida com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: e.toString()});
  }
};