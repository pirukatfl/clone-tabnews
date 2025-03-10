// /api/status

function status(request, response) {
  response.status(200).json({ msg: "Ronaldo" });
}

export default status;
