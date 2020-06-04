import React, { PureComponent } from 'react';
import "nes.css/css/nes.min.css";
import styled from '@emotion/styled'
import {css, keyframes} from '@emotion/core';

let StyledSnack = styled.div`
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 1rem;
`

const fadeIn = keyframes`
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
`

const fadeOut = keyframes`
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
`

const show = css`
    visibility: visible; /* Show the snackbar */
    /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
   However, delay the fade out process for 2.5 seconds */
    -webkit-animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s;
    animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s;
`



export class Snackbar extends PureComponent {
  message = ''

  state = {
    isActive: false,
  }

  openSnackBar = (message = 'Something went wrong...') => {
    this.message = message;
    this.setState({ isActive: true }, () => {
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 3000);
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <StyledSnack css={isActive ? [show, 'nes-container'].join(" ") : ['nes-container'].join(" ")}>
        {this.message}
      </StyledSnack>
    )
  }
}
