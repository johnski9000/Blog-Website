import React from 'react'

function Post(props) {
  console.log(props)
  return (
    <div key={props.id}>
      <div className='w-96 mx-auto my-2'><img src={props.image} className="w-3/4 m-auto"/></div>
    </div>
  )
}

export default Post