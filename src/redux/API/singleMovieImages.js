const singleMovieImages = async (id) => {
  console.log(id, "saga");
  const responseImage = await fetch(
    `https://imdb-api.com/en/API/Images/k_67o8cg68/${id}/Short`
  );
  const dataImage = await responseImage.json();
  if (responseImage.status >= 400) {
    throw new Error(dataImage.errors);
  }

  const responseTrailer = await fetch(
    `https://imdb-api.com/en/API/Trailer/k_67o8cg68/${id}`
  );
  const dataTrailer = await responseTrailer.json();
  if (responseTrailer.status >= 400) {
    throw new Error(dataTrailer.errors);
  }

  console.log(dataImage, dataTrailer);
  return { imagesData: dataImage, trailerdata: dataTrailer };
};

export { singleMovieImages };
