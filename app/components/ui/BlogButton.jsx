import React from 'react'

function BlogButton(props) {
  return (
    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
        {props.btnText}
    </button>
  )
}

export default BlogButton