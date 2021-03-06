
import { Route, Routes } from "react-router-dom"
import { Content, Finance, CreateAnnouncement, Sale, Car, CreateCar } from './index'

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/credit" element={<Finance />} />
            <Route path="/credit_announcement" element={<CreateAnnouncement />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/create" element = {<CreateCar />} /> 
            <Route path="/car/:id/" element={<Car />} />
        </Routes>
    )
}


