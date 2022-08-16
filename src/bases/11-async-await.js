// const getImagePromesa = () =>
//   new Promise((resolve) => resolve("https://askdnmaksda.com"));
// getImagePromesa().then(console.log);

const getImagen = async () => {
  try {
    //intenta ejecutar esto sino catch...
    const apiKey = "qVAjJ3RuRnk2YjO90fFyXOm8Ulvqic70";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`
    );
    const { data } = await resp.json();
    console.log(data);

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo del error
    console.error(error);
  }
};

getImagen();
