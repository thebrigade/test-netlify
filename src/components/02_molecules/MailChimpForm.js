import React, { Component } from 'react';
import styled from 'styled-components';
import iconNewsletter from '../../images/icons/icon-newsletter.svg';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const statusUpdate = (status) => {
  let color = 'white';
  switch(status){
    case 'error':
      color = 'red';
      break;
    case 'success':
      color = 'green';
      break;
    case 'ready':
      color = 'white';
      break;
    default:
      color = 'white';
      break;
  }
  return color;
}

const StyledSubmit = styled.input`
  
  cursor: pointer;
  display: block;
  width: 100%;
  min-width: 192px;
  color: #8999b1;
  font-size: 15px;
  line-height: 1em;
  text-align: center;
  background-color: transparent;
  border: 2px solid #8999b1;
  border-radius: 25px;
  padding: 12px 20px 10px;
  opacity: 1;
  transition: opacity .2s ease-in-out;
  &:hover{
    opacity: .8;
  }
  @media screen and (min-width: 768px) {
    width: auto;
    display: inline-block;
  }
`;

const StyledEmailField = styled.input`
  padding: 0 0 9px;
  background: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;
  color: #000;
  font-size: 16px;
  width: 100%;
  -webkit-appearance: none;
  margin-bottom: 30px;
  display: block;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

const StyledEmailWrap = styled.div`
  position:relative;
  
  @media screen and (min-width: 768px) {width: 33%;}
  p{
    position: absolute;
    bottom: -30px;
    right: 0;
    font-weight: 300;
    color: ${p => statusUpdate(p.status)};
  }
`;

const StyledLabelTitle = styled.h4`
  font-size: 2.4rem;
  line-height: 1.8;
  margin-bottom: 0;
  font-weight:  300;
`;

const StyledFormContainer = styled.div`
  display: block;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 900px;
    margin: 0 auto;
  }
`;

const StyledLabel = styled.label` 
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
  img{
    margin-right: 30px;
  }
  @media screen and (min-width: 768px){
    justify-content: space-between;
    margin-bottom: 0px;
  }
`;

class MailChimpForm extends Component {
  static props = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired
  }
  constructor(props){
    super(props);
    this.state = { status: 'ready', message: 'nothing to see here' }
    this.formRef = React.createRef();
    this.emailRef = React.createRef();
  }
  formSubmit(e){
    const emailValue = this.emailRef.current.value;
    
    addToMailchimp(emailValue)
    .then(data => {
      console.log(data)
      this.setState({message: data.msg, status: data.result});
    })
    .catch((err) => {
      console.error(err)
    })
    
    e.preventDefault();
  }
  render() {
    const { label, placeholder, buttonLabel } = this.props;
    return (
      <form onSubmit={(e) => this.formSubmit(e)} ref={this.formRef}>
        <StyledFormContainer>
          <StyledLabel>
            <img className="icon" src={iconNewsletter} alt="Email" />
            <StyledLabelTitle>{label}</StyledLabelTitle>
          </StyledLabel>
          <StyledEmailWrap status={this.state.status}>
            <StyledEmailField type="email" placeholder={placeholder} ref={this.emailRef}/>
            <p>{ReactHtmlParser(this.state.message)}</p>
          </StyledEmailWrap>
          
          <StyledSubmit type="submit" value={buttonLabel}/>
        </StyledFormContainer>
      </form>
    )
  }
}


export default MailChimpForm;