/* eslint-disable react/jsx-max-props-per-line */
import { Suspense } from 'react'
import Router from 'src/Router'

const App = () => {
  return (
    <Suspense>
      <Router />
    </Suspense>
  )
}

export default App
