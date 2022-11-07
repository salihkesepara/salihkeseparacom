/* eslint-disable react/jsx-max-props-per-line */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'src/views/Home'
// import Playground from 'src/views/Playground'
import PageNotFound from 'src/layout/PageNotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Playground />}></Route> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
