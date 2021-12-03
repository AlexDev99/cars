import axios from "axios";
import { useEffect, useState } from 'react'
import './css/MarkBox.css'

export function MarkBox({ visible = false, onClose }) {

   const [marks,setMarks] = useState(null)

    useEffect(()=>{
        axios
        .get("https://auto-leasing-bank.herokuapp.com/api/carBrand/")
        .then(response => {
            setMarks(response.data.list)
        })
        .catch(error => {
          console.log(error)
        });  
    },[])
    
    
    return (
        <div>
            {visible == true &&
                <div className='css-1jhvuix-ModalWrapper e60y32r0'>
                    <div mode='dark' witdh='584px' height='848px' className="d-flex align-items-center flex-column position-relative css-bkcazq-ModalBox e1o5p1xk0">
                        <div className='mark-box-1 position-fixed pt-2 d-flex w-100 align-items-center justify-content-start' onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 1)" className="mr-3 ml-auto  css-7qw58u-Icon cursor"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289Z"></path></svg>
                        </div>
                        <div id='stepModalRef' className="css-rswufz">
                            <div id='0'>
                                <div>
                                    <h4 class="mb-3 css-5j2ao7-H4-interRegular-bold40 e1c33kzw5" color="#D9D9D9">Выберите марку автомобиля</h4>
                                    <div className='mb-1'>
                                        <button bgcolor="rgba(128, 128, 128, 0.1)" color="#E5E5E5" class="css-2x0y3x-Input e186zcg20">
                                            <input id="markSearchInput" placeholder='Поиск' type="text" autocomplete="off" className='input-mark' ></input>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative css-1qn3rue">
                                <div className="d-flex flex-column position-relative h-100">
                                    <div className="css-1mw621w-List-noScrollbarStyle et8bfpk0 overflow">
                                        { Object.keys(marks).map( mark =>(
                                        <div className="d-flex flex-column align-items-end">
                                            <div className="p-3 exhogi70 w-100 px-0 d-flex flex-column h-auto css-1uhrgff-GeneralItem" mode='dark'>
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <div className="d-flex text-left m-0 w-100 align-items-center">
                                                        <div class="d-flex flex-column w-100">
                                                            <span>
                                                                <span color="#E5E5E5" class="text-wrap css-6kdy42-Typography-interRegular-buttonMedium16 e1c33kzw0" typography="other_label_16"></span>
                                                                <span color="#BFBFBF" class="text-wrap css-1c65jr6-Typography-interRegular-buttonMedium16 e1c33kzw0" typography="other_label_16">{mark}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                         ) ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}