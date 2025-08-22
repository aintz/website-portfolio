
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Desktop from './Components/Desktop';

function DesktopApp() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Desktop></Desktop>} />
        <Route path='*'  element={<NotFound></NotFound>} />
      </Routes>
    </BrowserRouter>
 )
}

export default DesktopApp
