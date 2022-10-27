import React, { useState, useContext, useReducer } from 'react'
import { XasanInfo } from '../Context/context.js'
import { Box, BoxBtn, Btn, Catolog, Container, Model, Narxi, Price, PriceSena, Sena, Senamin, SvetColor } from "./styled.js"


export const Carsinaaa = () => {

    var sena = 59658
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0)
    const [option, setOption] = useState(0)
    const [dataa, setData] = useContext(XasanInfo)

    // const [counter, dispatch] = useReducer((state, action) => {
    //     switch (action.type) {
    //         case 'minus':
    //             return state - sena;
    //         case 'plus':
    //             return state + sena;
    //         default: return state
    //     }
    // }, 0)



    const decrement = () => {
        setCount(PrevCount => PrevCount - sena)
        setPrice(PrevCount => PrevCount - 1)
    }
    const incerment = () => {
        setCount(PrevCount => PrevCount + sena)
        setPrice(PrevCount => PrevCount + 1)
    }

    const getDelete = (ids) => {
        let res = dataa.filter((value) => value !== ids)
        setData(res)
    }
    const handeltext = (e) => {
        console.log((e.target.value));
    }

    return (
        <Box>
            <h1>Корзина</h1>

            {dataa.map((value) => (
                <Container  >
                    <Catolog >
                        <div>
                            <img src={value?.img} alt="" />
                        </div>
                        <Model> <p>{value?.model}</p>
                            <div>{value?.razmer}</div>
                            <div>
                                <button onClick={() => getDelete(value.id)}> x delete</button>
                            </div>
                        </Model>
                    </Catolog>

                    <SvetColor>
                        <p>{value?.rangi}</p>
                        <img src={value?.imgcolor2} alt="" />
                        <img src={value?.imgcolor4} alt="" />
                        <img src={value?.imgcolor5} alt="" />
                        <img src={value?.imgcolor6} alt="" />
                        <img src={value?.imgcolor7} alt="" />
                        <img src={value?.imgcolor8} alt="" />
                        <img src={value?.imgcolor9} alt="" />
                        <img src={value?.imgcolor10} alt="" />
                        <img src={value?.imgcolor11} alt="" />
                    </SvetColor>
                    < Price>
                        <Sena>
                            <Narxi>{value?.narxi}</Narxi>
                            <Senamin>{value?.soni}</Senamin>
                        </Sena>
                        <BoxBtn>
                            <Btn>
                                {/* <button onClick={() => dispatch({ type: 'minus', type: 'selcetplus', payload: option })}>▼</button> */}
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
                            </Btn>
                        </BoxBtn>
                        <PriceSena>
                            <p>
                                {count}
                                <p> ₽</p>  </p>
                        </PriceSena>
                    </Price>
                </Container>

            ))
            }
        </Box >


    )
}
