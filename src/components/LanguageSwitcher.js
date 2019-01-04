import React, { Component } from "react";
import classNames from "classnames";
import { withNamespaces } from "react-i18next";

class LanguageSwitcher extends Component {
  state = {
    language: this.props.i18n.language
  }
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.state = { language: i18n.language }

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
    this.setState({ language: i18n.language });
    // console.log(i18n);
  }

  renderLanguageChoice({ code, label }) {
    const buttonClass = classNames("LanguageSwitcher__button", {
      "LanguageSwitcher__button--selected": this.state.language === code,
    })

    return (
      <button
        key={code}
        className={buttonClass}
        onClick={() => this.handleChangeLanguage(code)}
      >
        {label}
      </button>
    )
  }

  render() {
    const languages = [
      { code: "en", label: "English" },
      { code: "klingon", label: "Klingon" },
    ]

    return (
      <div className="LanguageSwitcher">
        active language: {this.state.language}
        {languages.map(language => this.renderLanguageChoice(language))}
      </div>
    )
  }
}

export default withNamespaces()(LanguageSwitcher)