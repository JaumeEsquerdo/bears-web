import { Contenido } from "./components/Contenido"
import { Header } from "./components/Header"
import { Mensaje } from "./components/Mensaje"

function App() {


  return (
    <>
      <Header />
      <Contenido >
        <Mensaje />
      </Contenido>
    </>
  )
}

export default App
