import React from 'react'
import style from '../../styles/category.module.css'

const Header = ({presentation, category}) => {
  return (
    <div className={`${style.header} ${style.headerDm}`}>
      <h1 className={'header-h1'}>{category}</h1>
      <p className={'header-p'}>{presentation}</p>
    </div>
  )
}

export default Header