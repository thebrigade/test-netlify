import React from 'react'
import Layout from '../layout/page-layout'
import '../components/i18n'
import { withNamespaces } from 'react-i18next'
import Hero from '../components/02_molecules/Hero'
// icons
import * as heroIcon from '../images/icons/icon-hero-bugbounty.png'

const IndexPage = props => (
  <Layout>
    <Hero
      icon={heroIcon}
      text="Bug Bounty Program"
      sub="From the outset, the code base underpinning the Tezos protocol has been engineered with security in mind. Although no system can be completely secure, every system can be continuously improved towards that goal. HackerOne, a San Francisco-based cybersecurity company, will deploy and manage a bug bounty program in an effort to steadily improve the overall security of Tezos. <br /><br /> Bug bounties offer an attractive way for potential security vulnerabilities to be reported. A bounty payout will depend on the severity of the disclosed vulnerability. In order to encourage responsible disclosure, researchers who point out potential vulnerabilities will not face legal action provided they make a best effort approach to report their findings and comply with the terms of the program.<br /><br /> Hackers participating in the bug bounty program should send all findings to <a href='mailTo:security@tezos.com' class='crypto-email' rel='nofollow'>security@tezos.com</a>. If required, a PGP key can be found <a href='/static/key/pgpkey.txt' rel='nofollow'>here</a>. The fingerprint for this key is: 578B 1B85 C560 80C7 D5B4  2E41 F919 CA02 9854 A530."
    />
  </Layout>
)

export default withNamespaces()(IndexPage)
