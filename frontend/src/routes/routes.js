import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ListaEmpresas from '../pages/company'
import DetalhesAno from '../pages/dados'
export default function MyRoutes() {
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/empresas' element={<ListaEmpresas/>}/>
                <Route path='/empresa/:id' element={<DetalhesAno/>}/>
            </Routes>

    )
}