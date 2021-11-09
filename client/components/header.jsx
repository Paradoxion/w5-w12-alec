import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Header = () => {
  const { userName } = useParams()
  return (
    <div>
      <div id="repository-name">{userName}</div>
      <Link id="go-back" to="/">
        go back
      </Link>
      <div>
        <Link id="go-repository-list" to={`/${userName}`}>
          go to Repository List
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
