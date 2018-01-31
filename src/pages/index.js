import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="site__invite invite">
  
    <div className="invite__image">
      <img className="hover" src="../images/gabbyandryan-hover.png" />
      <img src="../images/gabbyandryan.png" />
    </div>
  
    <h1 className="invite__header header">
      <span className="header__names">
        Gabby
        <span className="header__ampersand">&</span>
        Ryan
      </span>
      <span className="header__verbs">
        Are Getting Married!
      </span>
    </h1>

    <main className="invite__body">
      <p>
        Check back as we finalize more details.
      </p>
    </main>

  </div>
)

export default IndexPage
