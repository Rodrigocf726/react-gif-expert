
export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ocyLKsVrR7LbU9fNc4j6JbwfAci7wwBE&q=${ category }&limit=20`;

  const respuesta = await fetch( url );

  const { data } = await respuesta.json();
  const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    })
  );

  // console.log( gifs );
  // console.log(data);
  return gifs;
}
