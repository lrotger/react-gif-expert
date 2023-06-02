
// PostMan
    // api.giphy.com/v1/gifs/search?api_key=ijQKUOhzuc12sYU9lTjnOuB0Ex1Pvog2&q=valorant    
export const getGifs = async( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ijQKUOhzuc12sYU9lTjnOuB0Ex1Pvog2&q=${ category }&limit=5`
  const resp = await fetch( url );
  const { data } = await resp.json();
      
  //console.log(resp);
  const gifs = data.map( img => ({
     id: img.id,
     title: img.title,
     url: img.images.downsized_medium.url
  }))
      
  //console.log(gifs);
  return gifs;
}