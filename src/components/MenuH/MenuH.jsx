import React from 'react'
import { Link } from "react-router-dom";
import {Content} from './styles.js'

export const MenuH = () => {
  return (
    <Content>
      <Link to="/">Home</Link>
      <Link to="/acesso">Conta</Link>
      <Link to="/ajuda">Ajuda</Link>
    </Content>
  )
}
