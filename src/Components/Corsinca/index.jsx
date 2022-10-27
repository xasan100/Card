import React, { useState, useContext, useReducer } from 'react'
import { XasanInfo } from '../../Context/context.js'
import { Buttoon } from '../Plus/index.jsx'
import { Box, BoxBtn, Btn, BtnRadio, Catolog, Container, Model, Narxi, Price, PriceSena, Sena, Senamin, SvetColor } from "./styled.js"


export const Carsina = () => {

    // let sena = 59658
    // const [count, setCount] = useState(0)
    // const [price, setPrice] = useState(0)
    // const [option, setOption] = useState(0)
    const [dataa, setData] = useContext(XasanInfo)
    const [active, setIsActive] = useState(false)





    const getDelete = (id) => {
        let res = dataa.filter((value) => value.id !== id)
        console.log(setData(res));
    }

    return (
        <Box>
            <h1>Корзина</h1>
            {dataa?.map((value, ind) => (
                <Container key={ind} >
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
                        <BtnRadio class="group">
                            <input type="radio" id="radio01" name="radio" />
                            <label for="radio0"></label>
                        </BtnRadio>
                        <BtnRadio class="group">
                            <input type="radio" id="radio02" name="radio" />
                            <label for="radio0"></label>
                        </BtnRadio>
                        <BtnRadio class="group">
                            <input type="radio" id="radio01" name="radio" />
                            <label for="radio0"></label>
                        </BtnRadio>
                        <BtnRadio class="group">
                            <input type="radio" id="radio02" name="radio" />
                            <label for="radio0"></label>
                        </BtnRadio>
                    </SvetColor>
                    <Buttoon />
                </Container>

            ))
            }
        </Box >


    )
}
