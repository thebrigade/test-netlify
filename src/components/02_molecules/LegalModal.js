import React, { Component, Fragment } from 'react';
import {ModalContext} from '../../context/modal-context';
import styled,{ ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Button from '../01_atoms/Button';
import theme, { COLOR_SNOW, COLOR_SKY } from '../../theme';

const StyledModal = styled.div`
  transition: all .4s;
  position: fixed;
  top: ${p => p.open ? '0' : '200px'};
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  opacity: ${p => p.open ? '1' : '0'};
  pointer-events: ${p => p.open ? 'auto' : 'none'};
  transition: all .5s;
  button{
    cursor: pointer;
  }
  .modal-wrap{
    position: absolute;
    top: 0;
    left: 0;
    transform: none;
    background: ${COLOR_SNOW};
    padding: 50px 20px;
    box-shadow: 0 0 30px rgba(0,0,0,.1);
    max-width: 600px;
    p{
      margin-bottom: 30px;
      opacity: .7;
      line-height: 1.6;
      font-size: 1.8rem;
    }
    .button-wrap{
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-around;
    }
  }
  @media screen and (min-width: 768px) {
    
    .modal-wrap{
      padding: 50px 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
  }
`;

const StyledModalBG = styled.div`
  pointer-events: ${p => p.open ? 'auto' : 'none'};
  background: rgba(255,255,255, .8);
  opacity: ${p => p.open ? '1' : '0'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  transition: all .5s;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  overflow: hidden;
  text-indent: -9999px;
  width: 20px;
  height: 20px;
  &:before, &:after{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    left: 50%;
    top: 50%;
    background: ${COLOR_SKY};
  }
  &:before{
    transform: translateY(-50%) translateX(-50%) rotate(-45deg);
  }
  &:after{
    transform: translateY(-50%) translateX(-50%) rotate(45deg);
  }
`;


class LegalModal extends Component {
  static props = {
    legalCopy: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired
  }
  static contextType = ModalContext;
  componentDidMount(){
    const self = this;
    // create esc key command to close modals
    document.addEventListener("keyup", (e) => {
      self.escClose(e, this.context)
    })
  }
  escClose(e, context) {
    if (e.keyCode === 27 || e.code === "Escape") {
      context.openModal({open: false});
    }
  }
  componentWillUnmount(){
    document.removeEventListener("keyup", this.escClose, true);
  }
  render() {
    const { legalCopy, buttonLabel } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ModalContext.Consumer>
        {({state, openModal}) => (
          <Fragment>
            <StyledModalBG open={state.open} />
            <StyledModal open={state.open}>
              <div className="modal-wrap">
                <StyledCloseButton onClick={e => { openModal({open: false}); e.preventDefault()}}>close</StyledCloseButton>
                {ReactHtmlParser(legalCopy)}
                <div className="button-wrap">
                  <Button to={state.link} text={buttonLabel} external buttonBig smallTxt callBack={() => openModal({open: false})}/>
                </div>
              </div>
            </StyledModal> 
          </Fragment>
        )}
        </ModalContext.Consumer>
      </ThemeProvider>
    )
  }
}

export default LegalModal;