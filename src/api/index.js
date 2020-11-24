const postDate = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "ok" });
    }, 3000);
  });
};

export default {
  postDate,
};
