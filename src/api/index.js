const postDate = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { type } = data;
      resolve({ data: "ok", type });
    }, 3000);
  });
};

export default {
  postDate,
};
