import React, { Component, Fragment } from 'react';
import {ModalContext} from '../../context/modal-context';
import styled,{ ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Button from '../01_atoms/Button';
import theme, { COLOR_SNOW } from '../../theme';

const StyledModal = styled.div`
  transition: all .4s;
  position: fixed;
  top: ${p => p.open ? '0' : '-500px'};
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  opacity: ${p => p.open ? '1' : '0'};
  transition: all .5s;
  button{
    cursor: pointer;
  }
  .modal-wrap{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background: ${COLOR_SNOW};
    padding: 20px;
    box-shadow: 0 0 30px rgba(0,0,0,.2);
  }
`;

const StyledModalBG = styled.div`
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


class LegalModal extends Component {
  static props = {
    legalCopy: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired
  }
  render() {
    const { legalCopy, buttonLabel } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ModalContext.Consumer>
        {({state, openModal}) => (
          <Fragment>
            <StyledModalBG open={state.open}/>
            <StyledModal open={state.open}>
              <div className="modal-wrap">
                <button onClick={e => { openModal({open: false}); e.preventDefault()}}>close</button>
                {ReactHtmlParser(legalCopy)}
                <Button to={state.link} text={buttonLabel} external buttonBig smallTxt/>
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