import DesktopApp from "./DesktopApp"
import MobileApp from "./MobileApp"
import { useMediaQuery } from "react-responsive"

function App() {
  
  const isMobile = useMediaQuery({maxWidth: 850})

  return (
    <>
    {isMobile ?
      <MobileApp/>
    :
      <DesktopApp/>
    }
    </>
  )
}

export default App