import { Cars } from './cars/Cars'
import './Content.css'
import { useEffect, useState } from 'react'
import { MarkBox } from './model/MarkBox'
import axios from 'axios'

export function Content() {


    const [isModal, setModal] = useState(false)
    const onClose = () => setModal(false)


   const [cars,setCars] = useState([])

   useEffect(()=>{
       axios
       .get("https://auto-leasing-bank.herokuapp.com/api/auto/")
       .then(response => {
        setCars(response.data)
       })
       .catch(error => {
         console.log(error)
       });  
   },[])

    return (
        <div>
            <div className='flex-grow-1 mb-5'>
                <div className='pt-3 css-1eqerk1'>
                    <section>
                        <div>
                            <div className='d-flex w-100 align-items-center mt-5 mb-2 justify-content-between css-rth9th'>
                                <div className='d-flex justify-content-start align-items-center position-relative css-75suy1'>
                                    <button mode="dark" class="p-0 justify-content-start css-11c6ywx-Root e7wkbvf0" size="40" onClick={() => setModal(true)}>
                                        <span class="css-ajmj03-Label easdwy10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="48" viewBox="0 0 50 48" class="css-vz4om5-Icon">
                                                <g filter="url(#filter0_d)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9 17C31.7 16.4 31.1 16 30.5 16H19.5C18.8 16 18.3 16.4 18.1 17L16 23V30.5C16 31.3284 16.6716 32 17.5 32C18.3284 32 19 31.3284 19 30.5V30H31V30.5C31 31.3284 31.6716 32 32.5 32C33.3284 32 34 31.3284 34 30.5V23L31.9 17ZM18 25.5C18 26.3 18.7 27 19.5 27C20.3 27 21 26.3 21 25.5C21 24.7 20.3 24 19.5 24C18.7 24 18 24.7 18 25.5ZM29 25.5C29 26.3 29.7 27 30.5 27C31.3 27 32 26.3 32 25.5C32 24.7 31.3 24 30.5 24C29.7 24 29 24.7 29 25.5ZM19.5 17.5L18 22H32L30.5 17.5H19.5Z" fill="#0083FC">
                                                    </path>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d" x="0" y="0" width="50" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix">
                                                        </feFlood>
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
                                                        </feColorMatrix>
                                                        <feOffset>
                                                        </feOffset>
                                                        <feGaussianBlur stdDeviation="8">
                                                        </feGaussianBlur>
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.5135 0 0 0 0 0.9875 0 0 0 1 0">
                                                        </feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow">
                                                        </feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape">
                                                        </feBlend>
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <p typography="sub_1" color="#808080" class="ml-2 css-yarmr2-Typography-interSemiBold-sub1 e1c33kzw0">Выберите марку и модель</p>
                                        </span>
                                    </button>
                                </div>
                                <div className='d-flex h-100'>
                                    <hr direction="vertical" color="rgba(128, 128, 128, 0.4)" class="mx-3 css-1lp7hwy-Divider-Divider e17dekne0" />
                                    <button color="#FFFFFF" mode="dark" class="css-1pn104-Root-interSemiBold-pBold12 e7wkbvf0" size="40">
                                        <span class="css-ajmj03-Label easdwy10">Все</span>
                                    </button>
                                    <button color="#808080" mode="dark" class="css-4fkf88-Root-interSemiBold-pBold12 e7wkbvf0" size="40">
                                        <span class="css-ajmj03-Label easdwy10">Новые</span></button>
                                    <button color="#808080" mode="dark" class="css-aqyuf6-Root-interSemiBold-pBold12 e7wkbvf0" size="40">
                                        <span class="css-ajmj03-Label easdwy10">С пробегом</span>
                                    </button>
                                </div>
                            </div>
                            <div class="d-flex align-items-end justify-content-between mt-5">
                                <h1 typography="h_bold_24" color="#D9D9D9" class="css-n0bdzv-Typography e1c33kzw0">Покупка авто </h1>
                                <p typography="p_regular_16" class="align-self-end css-gfcd9q-Typography-interRegular-pRegular16 e1c33kzw0" color="#808080">{cars.length} объявлений</p>
                            </div>
                        </div>
                        <Cars cars = {cars}/>
                    </section>
                </div>
            </div>
            <MarkBox
                visible={isModal}
                onClose={onClose}
            />
        </div>
    )
}