const postEndpoint = async (endpoint, type, body) => {
  return await fetch('http://localhost:3001/' + endpoint, {
    method: type,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};
export default postEndpoint;
