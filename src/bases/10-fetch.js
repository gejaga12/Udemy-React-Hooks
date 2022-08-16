const apiKey = "qVAjJ3RuRnk2YjO90fFyXOm8Ulvqic70";
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    // console.log(data.images.original.url);
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
