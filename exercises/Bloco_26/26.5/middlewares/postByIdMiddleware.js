const posts = [];

const postById = (req, res) => {
  const { id } = req.params;

  const post = posts.find((p) => p.id === parseInt(id));

  if(!post) {
    return res.status(404).json({ message: 'post not found' });
  }

  return res.status(200).json(post);
};

export default postById;
