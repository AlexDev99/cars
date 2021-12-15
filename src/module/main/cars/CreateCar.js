
import axios from 'axios';
import { useState } from 'react'
import './CreateCar.css'

export function CreateCar() {

    const [form, setForm] = useState({
        city: 's',
        brand: 'd',
        mark: 'd',
        year: 'd',
        steering_wheel: 'd',
        drive_unit: 'dd',
        volume: 'd',
        fuel: 'd',
        body: 'd',
        box: 'd',
        price: 'd',
        color: 'd',
        mileage: 'd',
        description: 'd',
        date_created: 'd',
        user: '46'
    })


    const [city,setCity] = useState('Bishkek')
    const [brand,setBrand] = useState('Bishkek')
    const [mark,setMark] = useState('Bishkek')
    const [year,setYear] = useState('1999')
    const [steering_wheel,setSteeringWheel] = useState('Bishkek')
    const [drive_unit,setDriveUnit] = useState('Bishkek')
    const [volume,setVolume] = useState('Bishkek')
    const [fuel,setFuel] = useState('Bishkek')
    const [body,setBody] = useState('Bishkek')
    const [box,setBox] = useState('Bishkek')
    const [price,setPrice] = useState('100000000')
    const [color,setColor] = useState('Bishkek')
    const [mileage,setMileage] = useState('100000')
    const [description,setDescription] = useState('Bishkek')
    const [user,setUser] = useState('46')
    const [images,setImages] = useState(["https://autoleasing.s3.amazonaws.com/uploads/auto/5459ba01-5248-4f07-90ef-36b6a781fc8e.jpg"])


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async () => {
        // // store the states in the form data
        // const loginFormData = new FormData();
        // loginFormData.append("city", form.city)
        // loginFormData.append("brand", form.brand)
        // loginFormData.append("mark", form.mark)
        // loginFormData.append("year", form.year)
        // loginFormData.append("steering_wheel", form.steering_wheel)
        // loginFormData.append("drive_unit", form.drive_unit)
        // loginFormData.append("volume", form.volume)
        // loginFormData.append("fuel", form.fuel)
        // loginFormData.append("body", form.body)
        // loginFormData.append("box", form.box)
        // loginFormData.append("price", form.price)
        // loginFormData.append("color", form.color)
        // loginFormData.append("mileage", form.mileage)
        // loginFormData.append("description", form.description)
        // loginFormData.append("date_created", form.date_created)
        // loginFormData.append("user", form.user)


        console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQq")

        try {
            const response = await axios({
                method: "POST",
                url: "https://auto-leasing-bank.herokuapp.com/api/auto/",
                data: {city:city,brand:brand,mark:mark,year:year,steering_wheel:steering_wheel,drive_unit:drive_unit,volume:volume,fuel:fuel,body:body,box:box,price:price,color:color,mileage:mileage,description:description,images:images,user:user},
                headers: { 'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5NTUzMjk3LCJpYXQiOjE2Mzk1NTI5OTcsImp0aSI6ImM0OGI2YmM2ZWQ0NzQ2Njk4OWQxMTMxZGFlYTIyYWEzIiwidXNlcl9pZCI6NDZ9.6GKMnwcziBAYNlz6MjJU1uZlXMHatEfAj5GDvNCbo_Q' }
            });
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    console.log({city:city,brand:brand,mark:mark,year:year,steering_wheel:steering_wheel,drive_unit:drive_unit,volume:volume,fuel:fuel,body:body,box:box,price:price,color:color,mileage:mileage,description:description,user:user})
    return (
        <div class="css-178yklu">
            <form onSubmit={handleSubmit()}>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="text" placeholder='Город' className='mt' id="city" value={form.city}  onChange={e => setCity(e.target.value)} />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='Бренд' id="brand"  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='Марка' id="mark"  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='Год выпуска' id="year"  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='Скорость' id="steering_wheel"  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='drive_unit' id="drive_unit"  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='fuel' id="fuel"  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='mileage' id="mileage"  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='body' id="body"  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='box' id="box"  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='color' id="color"  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' id="price" placeholder='price'  onChange={handleChange} autocomplete="off" />
                </div>
                <div bgcolor="rgba(51, 51, 51, 0.8)" color="#E5E5E5" class="css-pu9f8t-Input e186zcg20">
                    <input type="tel" className='mt' placeholder='description' id="description"  onChange={handleChange} autocomplete="off" />
                </div>
                <button
                >
                    Login
                </button>
            </form>
        </div>
    )

}