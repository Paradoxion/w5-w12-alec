import React, { useState, useEffect  } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios'

import Header from './header'


const Repo = () => {
  const { userName } = useParams()
  const [user, setUser] = useState([])



  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
      setUser(it.data)
    })
  }, [userName])
  const repoList = user.map((it) => {
    return (
      <div key={it.id}>
        <Link to={`/${userName}/${it.name}`}>{it.name}</Link>
      </div>
    )
  })

return (
  <div className="flex items-center justify-center h-screen">
    <Header />
    <div>{repoList}</div>
  </div>
)


}

Repo.propTypes = {}

export default Repo
