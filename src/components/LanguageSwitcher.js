import React, { Component } from "react";
import classNames from "classnames";
import { withNamespaces } from "react-i18next";
import styled from 'styled-components';

const StyledLanguageSwitcher = styled.div`
  display: inline-block;
  position: relative;
  color: #fff;
  h5{
    font-weight: 300;
    text-transform: uppercase;
    width: 50px;
    text-align: center;
    cursor: pointer;
  }
  ul{
    background: #fff;
    position: absolute;
    width: 200px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  ul,li{
    list-style: none;
    text-align: center;
  }
  li a{
    text-decoration: none;
    displaY: block;
    font-weight: 300;
    padding: 10px;
  }
`;

const StyledMenu = styled.ul`
  display: ${p => p.show ? 'block' : 'none'};
`;

class LanguageSwitcher extends Component {
  state = {
    language: this.props.i18n.language
  }
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.state = { 
      language: i18n.language,
      showMenu: false
    }

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
    this.setState({ language: i18n.language });
  }

  renderLanguageChoice({ code, label }) {
    const buttonClass = classNames("LanguageSwitcher__button", {
      "LanguageSwitcher__button--selected": this.state.language === code,
    })

    return (
      <li key={code}>
        <a
          href="#"
          key={code}
          className={buttonClass}
          onClick={
            (e) => {
              this.handleChangeLanguage(code);
              this.showMenu();
              e.preventDefault();
            }
          }
        >
          {label}
        </a>
      </li>
    )
  }
  showMenu() {
    this.setState({
      showMenu: this.state.showMenu ? false : true
    })
  }
  render() {
    const languages = [
      { code: "en", label: "English (English)" },
      { code: "esp", label: "Espanol (Spanish)" },
    ]

    return (
      <StyledLanguageSwitcher>
        <h5 onClick={() => this.showMenu() }>{this.state.language}</h5> 
        <StyledMenu show={this.state.showMenu}>
          {languages.map(language => this.renderLanguageChoice(language))}
        </StyledMenu>
      </StyledLanguageSwitcher>
    )
  }
}

export default withNamespaces()(LanguageSwitcher)