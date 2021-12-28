
import axios from 'axios';
import { useState } from 'react'
import './CreateCar.css'
import '../model/css/ModelBox.css'

import '../../finance/Finance.css'

export function CreateCar() {

    const [form, setForm] = useState({
        city: '',
        brand: '',
        mark: '',
        year: '',
        steering_wheel: '',
        drive_unit: '',
        volume: '',
        fuel: '',
        body: '',
        box: '',
        price: '',
        color: '',
        mileage: '',
        description: '',
        date_created: '',
        user: '46'
    })


    const [city, setCity] = useState('')
    const [brand, setBrand] = useState('')
    const [mark, setMark] = useState('')
    const [year, setYear] = useState('')
    const [steering_wheel, setSteeringWheel] = useState('')
    const [drive_unit, setDriveUnit] = useState('')
    const [volume, setVolume] = useState('')
    const [fuel, setFuel] = useState('')
    const [body, setBody] = useState('')
    const [box, setBox] = useState('')
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')
    const [mileage, setMileage] = useState('')
    const [description, setDescription] = useState('')
    const [user, setUser] = useState('46')
    const [date_created,setDate] = useState('2021-12-27T18:10:24.056Z')
    const [images, setImages] = useState(["https://autoleasing.s3.amazonaws.com/uploads/auto/5459ba01-5248-4f07-90ef-36b6a781fc8e.jpg"])


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async () => {
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("city", form.city)
        loginFormData.append("brand", form.brand)
        loginFormData.append("mark", form.mark)
        loginFormData.append("year", form.year)
        loginFormData.append("steering_wheel", form.steering_wheel)
        loginFormData.append("drive_unit", form.drive_unit)
        loginFormData.append("volume", form.volume)
        loginFormData.append("fuel", form.fuel)
        loginFormData.append("body", form.body)
        loginFormData.append("box", form.box)
        loginFormData.append("price", form.price)
        loginFormData.append("color", form.color)
        loginFormData.append("mileage", form.mileage)
        loginFormData.append("description", form.description)
        loginFormData.append("date_created", form.date_created)
        loginFormData.append("user", form.user)


        try {
            const response = await axios({
                method: "POST",
                url: "https://auto-leasing-bank.herokuapp.com/api/auto/",
                data: { city: city, brand: brand, mark: mark, year: year, steering_wheel: steering_wheel, drive_unit: drive_unit, volume: volume, fuel: fuel, body: body, box: box, price: price, color: color, mileage: mileage, description: description, images: images, user: user,date_created:date_created },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQwNjI4NjY1LCJpYXQiOjE2NDA2MjgzNjUsImp0aSI6ImY0ZWJkZTM3YmQ1YzRiNDhhYzkxY2UyMWVjMWNiMmZhIiwidXNlcl9pZCI6NDZ9.hsMk9Sk2LG9DTYYwMUDy8bUk4uGYDOCZ9dk-RSMrRP0'
                }
            });
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    console.log({ city: city, brand: brand, mark: mark, year: year, steering_wheel: steering_wheel, drive_unit: drive_unit, volume: volume, fuel: fuel, body: body, box: box, price: price, color: color, mileage: mileage, description: description, user: user })
    return (

        <div className='d-flex justify-content-center'>
            <div className='css-bncp82'>
                <h4 color="#D9D9D9" class="css-ocxe0h e11t7fn45">Создать новое обьявление</h4>
                <div className='d-flex justify-content-between'>
                    <div className='w-100'>
                        <h4 class="mb-4 css-60828r e11t7fn47" color="#D9D9D9">Введите характеристики</h4>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={city}
                                placeholder='Город'
                                onChange={e => setCity(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={brand}
                                placeholder='Бренд'
                                onChange={e => setBrand(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={mark}
                                placeholder='Марка'
                                onChange={e => setMark(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={year}
                                placeholder='Год'
                                onChange={e => setYear(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={steering_wheel}
                                placeholder='Скорость'
                                onChange={e => setSteeringWheel(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={drive_unit}
                                placeholder='Единица вождения'
                                onChange={e => setDriveUnit(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={volume}
                                placeholder='размер'
                                onChange={e => setVolume(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={fuel}
                                placeholder='Топливо'
                                onChange={e => setFuel(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={body}
                                placeholder='Кузов'
                                onChange={e => setBody(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={box}
                                placeholder='Коробка передач'
                                onChange={e => setBox(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={price}
                                placeholder='Цена'
                                onChange={e => setPrice(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={color}
                                placeholder='Цвет'
                                onChange={e => setColor(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={mileage}
                                placeholder='Миля'
                                onChange={e => setMileage(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div class="css-178yklu">
                            <input
                                color="#E5E5E5"
                                value={description}
                                placeholder='Описание'
                                onChange={e => setDescription(e.target.value)}
                                bgcolor="rgba(51, 51, 51, 0.8)"
                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                            />
                        </div>
                        <div className='d-flex justify-content-between mt-4'>

                            <button id="complete_request" onClick={handleSubmit} class="px-4 py-3 css-17mgu76 ehwyg6l0" color="rgba(0, 131, 252, 1)" size="40"><span class="css-wc4puz e1xwzrp0"><p class="text-uppercase css-bm4u3z e11t7fn40" color="rgba(128, 128, 128, 0.6)" typography="other_semibold_14">Продолжить</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(128, 128, 128, 0.4)" class="css-d8znc5"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 13.2929C7.68342 12.9024 8.31658 12.9024 8.70711 13.2929L11 15.5858L11 5C11 4.44771 11.4477 4 12 4C12.5523 4 13 4.44771 13 5L13 15.5858L15.2929 13.2929C15.6834 12.9024 16.3166 12.9024 16.7071 13.2929C17.0976 13.6834 17.0976 14.3166 16.7071 14.7071L12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929Z"></path></svg></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}