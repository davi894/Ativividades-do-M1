const converterAPI = async () => {
  let APIchuckNorris = await fetch(
    "https://api.chucknorris.io/jokes/search?query=random"
  );

  let APIJosn = await APIchuckNorris.json();
  return APIJosn;
};

export { converterAPI };
