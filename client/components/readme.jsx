import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Markdown from 'markdown-to-jsx'

import Header from './header'

const Readme = () => {
  const { userName, repositoryName } = useParams()
    const [text, setText] = useState('')

  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((md) => {
        setText(md.data)
      })
  }, [userName, repositoryName])

  return (
    <div id="description" className="flex items-center justify-center h-screen">
      <Header />
      <Markdown>{text}</Markdown>
    </div>
  )
}

Readme.propTypes = {}

export default Readme
