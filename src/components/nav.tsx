import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import {NavLink} from 'react-router-dom';
/** @jsx jsx */ import { jsx } from '@emotion/core'

const NavBar = styled.nav`
  margin: 1.5rem;
`

const link = css`
  font-size: 1rem !important;
  text-decoration: underline;
  color: dimgrey;
  margin-right: 1rem;
`

function Nav() {
  return (
    <NavBar>
      <NavLink to='/' css={link} exact activeStyle={{color: 'black'}}>Email</NavLink>
      <NavLink to='/resources' css={link} exact activeStyle={{color: 'black'}}>Resources</NavLink>
    </NavBar>
  )
}

export default Nav;
