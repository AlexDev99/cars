
import { Route, Routes } from "react-router-dom"
import { Content, CreateAnnouncement, Finance, Sale } from './index'


export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/credit" element={<Finance />} />
            <Route path="/credit-announcement" element={<CreateAnnouncement />} />
            <Route path="/sale" element={<Sale />} />
        </Routes>
    )
}


