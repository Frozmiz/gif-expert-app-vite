const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VP9XetBnzPhZrBCoJD23CPXL8wRBec7f&q=${ category }&limit=20`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }))

    console.log(gifs);
    return gifs;
}

export default getGifs