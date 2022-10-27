import React, { useContext, useState } from 'react'
import { XasanInfo } from '../../Context/context.js'
import { BoxBtn, Btn, Narxi, Price, PriceSena, Sena, Senamin } from '../Corsinca/styled.js'



export const Buttoon = () => {
    let sena = 59658
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0)
    const [option, setOption] = useState(0)
    const [dataa, setData] = useContext(XasanInfo)


    const decrement = () => {
        setCount(PrevCount => PrevCount - sena)
        setPrice(PrevCount => PrevCount - 1)
    }
    const incerment = () => {
        setCount(PrevCount => PrevCount + sena)
        setPrice(PrevCount => PrevCount + 1)
    }

    const incermentt = () => {
        setCount(PrevCount => PrevCount + `${sena} ${setOption} `)
        setPrice(PrevCount => PrevCount + 1)
    }

    const handeltext = (e) => {
        console.log((setOption(Number(e.target.value))));
    }

    return (
        <div>
            < Price>
                <Sena>

                    <Narxi>59 658 ₽</Narxi>
                    <Senamin>цена за 1 шт</Senamin>
                </Sena>


                <BoxBtn>
                    <Btn>
                        {/* <button onClick={() => dispatch({ type: 'minus',  payload: option })}>▼</button> */}
                        <button onClick={decrement}>▼</button>
                    </Btn>
                    <select defaultValue={0} id="Number" onChange={(e) => handeltext(e)}>
                        <option value="one">{price}</option>
                        <option >10</option>
                        <option >20</option>
                        <option >30</option>
                        <option >40</option>
                        <option >50</option>
                    </select>
                    <Btn>
                        {/* <button onClick={() => dispatch({ type: 'plus' })}>▲</button> */}
                        <button onClick={incerment}>▲</button>
                        <button onClick={incermentt}> </button>
                    </Btn>
                </BoxBtn>
                <PriceSena>
                    <p>
                        {count}
                        <p> ₽</p>  </p>
                </PriceSena>
            </Price>

        </div >
    )
}
