import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Fav } from "./component/Fav";
import { Navigationbar } from "./component/Navigationbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./component/Add";
import { useSelector } from "react-redux";
import { ListMovie } from './component/ListMovie'
function App() {
  const liste = useSelector((state) => state.liste)
  const filterdname=useSelector(
    (state)=>state.filterdname
  )
//console.log(filterdname)
  //console.log(liste)
  return (
    <div className="App">
      <Navigationbar />
      <Routes>
<Route path='/list' element={<ListMovie movies={liste.filter((e)=>e.title.toLowerCase().includes(filterdname.toLowerCase()
))}/>}/>
<Route path="/" element={<Fav movies={liste.filter((e) => e.fav).filter((e)=>e.title.toLowerCase().includes(filterdname.toLowerCase()
))} />} />
        <Route path="/add" element={<Add/>} />
      </Routes>
    </div>
  );
}

export default App;
