/* eslint-disable react/jsx-max-props-per-line */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Terminal from 'src/views/Terminal'
import PageNotFound from 'src/layout/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Terminal />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
