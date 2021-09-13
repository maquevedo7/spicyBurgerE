import React from 'react'
import {Route} from "react-router-dom"
import Purchase from '../Purchase/Purchase'
import List from '../List/List'

const Sections = () => {

  return (
    <section>

      <Route path="/" component={List} exact />
      <Route path="/Cart" component={Purchase} exact />

    </section>
  )
}

export default Sections