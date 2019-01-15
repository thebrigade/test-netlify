import React, { Component } from 'react';
import styled from 'styled-components';
import iconNewsletter from '../../images/icons/icon-newsletter.svg';


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
  display: inline-block;
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
`;

const StyledEmailWrap = styled.div`
  position:relative;
  width: 33%;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 900px;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    margin-right: 30px;
  }
`;

class MailChimpForm extends Component {
  constructor(props){
    super(props);
    this.state = { status: 'ready', message: 'nothing to see here' }
    this.formRef = React.createRef();
    this.emailRef = React.createRef();
  }
  formSubmit(e){
    const self = this;
    const formData = new FormData(this.formRef);
    const emailValue = this.emailRef.current.value;
    // formData.append('EMAIL', this.emailRef.current.value);

    // let object =  {};

    // formData.forEach(function(value, key){
    //     object[key] = value;
    // });

    const url = `https://tezos.us6.list-manage.com/subscribe/post?u=80b9a27c332a234b4cac5c13b&id=d8f4b4112e&c=jQuery190005915435378856371_1547518496493&EMAIL=${emailValue}&b_80b9a27c332a234b4cac5c13b_d8f4b4112e=&subscribe=Submit&_=1547517311464`;

    fetch(url,
      {
        mode: 'no-cors'
      }
    ).then(function(response) {
      const ryGetJson = async (response) => {
        console.log(response);
        return new Promise((resolve) => {
          if (response) {
            response.json().then(json => resolve(json)).catch(() => resolve(null))
          } else {
            resolve(null)
          }
        })
      }
      return ryGetJson;
    }).then(function(myJson) {
      const obj = JSON.stringify(myJson);
      if (typeof obj === 'object' && obj.status === 'success'){
        self.setState(
          {
            status: 'success',
            message: 'Thank you for subscribing!'
          }
        )
      } else {
        self.setState(
          {
            status: 'error',
            message: 'sorry that email address is already submitted'
          }
        )
      }
      console.log(JSON.stringify(myJson));
    })
    .catch(error => console.error('Error:', error));
    
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={(e) => this.formSubmit(e)} ref={this.formRef}>
        <StyledFormContainer>
          <StyledLabel>
            <img className="icon" src={iconNewsletter} alt="Email" />
            <StyledLabelTitle>Join our newsletter</StyledLabelTitle>
          </StyledLabel>
          <StyledEmailWrap status={this.state.status}>
            <StyledEmailField type="email" placeholder="Email" ref={this.emailRef}/>
            <p>{this.state.message}</p>
          </StyledEmailWrap>
          
          <StyledSubmit type="submit"/>
        </StyledFormContainer>
      </form>
    )
  }
}


export default MailChimpForm;