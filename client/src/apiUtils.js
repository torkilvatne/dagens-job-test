export const createQueryParam = (body) => {
  let q = '';
  for (const key in body) {
    q = q + key + '=' + body[key] + '&';
  }
  return q.slice(0, -1);
};
