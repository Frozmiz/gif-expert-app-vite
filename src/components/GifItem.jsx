import React from 'react'

const GifItem = ({ title, url, id}) => {

  return (
    <div className="card">
      <img src={ url } alt= { title } />
      <table>
        <caption> { title } </caption>
      </table>
      
    </div>
  )
}

export default GifItem;
