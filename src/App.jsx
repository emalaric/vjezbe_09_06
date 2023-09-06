import './App.css'
import { DE }from './defaultExport'
import { NamedExport1 as NE1, NamedExport2 as NE2, NamedExport3 as NE3} from './namedExport'

function App() {

  return (
    <>
    <DE/>
    <NE1/>
    <NE2/>
    <NE3/>
    </>
  )
}

export default App
