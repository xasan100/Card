import React, { createContext, useState } from 'react'
import { data } from '../Mock/data.js'

export const XasanInfo = createContext()

const Context = ({ children }) => {
    const [dataa, setData] = useState(data)
    return (
        <XasanInfo.Provider value={[dataa, setData]}>{children}</XasanInfo.Provider>
    )
}


export default Context