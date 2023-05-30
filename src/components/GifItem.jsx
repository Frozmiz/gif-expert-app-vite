import React from 'react'

const GifItem = ({ title, url, id}) => {

  return (
    <div className="card">
      <img src={ url } alt= { title } />
      <caption> { title } </caption>
    </div>
  )
}

export default GifItem;
