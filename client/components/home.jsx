import React, { useState } from 'react'
import { history } from '../redux'

import Head from './head'

const Home = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => { setValue(e.target.value)}
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-red font-bold rounded-lg border shadow-lg p-10">
          <input id="input-field" type="text" value={value} onChange={onChange} />
        </div>
        <div className="bg-indigo-800 text-red font-bold rounded-lg border shadow-lg p-10">
          <button
            id="search-button"
            type="button"
            onClick={() => {
              history.push(value)
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
