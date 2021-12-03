import './css/ModelBox.css'
import { IMaskInput } from 'react-imask';
import { useState } from 'react';


export function ModelBox({ visible = false, onClose }) {

    const [phone,setPhone] = useState("")
    const handleChange = () =>{
        setPhone(phone)
    }
    console.log(phone)
    return (
        <div>
            {visible == true &&
                <div class="css-1jhvuix-ModalWrapper e60y32r0">
                    <div mode="dark" width="585px" height="635px" class="css-1bq1omm-ModalBox e1o5p1xk0">
                        <div class="css-10pt21e" onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="css-zcgqjf-Icon">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289Z"></path>
                            </svg>
                        </div>
                        <div className="h-100 s-1">
                            <div id="0" className="h-100">
                                <div className="d-flex flex-column h-100 justify-content-between">
                                    <div>
                                        <h4 color="#D9D9D9" class="css-5j2ao7-H4-interRegular-bold40 e1c33kzw5">Авторизация</h4>
                                        <p typography="p_regular_14" color="#BFBFBF" class="css-ge2upr-Typography-interRegular-pRegular14 e1c33kzw0">Введите номер телефона, на него будет выслан одноразовый SMS-код для авторизации</p>
                                        <div class="css-178yklu">
                                            <IMaskInput
                                                color="#E5E5E5"
                                                value={phone}
                                                onChange={handleChange}
                                                placeholder='Введите номер телефона'
                                                bgcolor="rgba(51, 51, 51, 0.8)"
                                                className='s-2 css-pu9f8t-Input mask e186zcg20'
                                                mask="(000) 000-000000"
                                                definitions={{
                                                    '#': /[1-9]/,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <span color="#808080" typography="p_regular_12" class="css-mmm1cf-Typography-interRegular-pRegular12 e1c33kzw0">Нажимая на кнопку Далее, вы соглашаетесь с <a href="https://mycar.kz/terms_of_use.pdf" target="_blank" class="text-decoration-none" className='s-3' rel="noreferrer">Пользовательским соглашение</a> и <a href="https://mycar.kz/privacy_policy.pdf" target="_blank" class="text-decoration-none" className='s-3' rel="noreferrer">Политикой конфиденциальности</a>
                                        </span><button className='s-4' size="48" mode="dark" class="d-flex justify-content-between css-1ncqp0c-Root e7wkbvf0">
                                            <span class="css-ajmj03-Label easdwy10">
                                                <div class="flex-grow-1 justify-content-center">
                                                    <p typography="other_semibold_14" color="rgba(128, 128, 128, 0.6)" class="css-1y2s2kc-Typography-interRegular-buttonSemibold14 e1c33kzw0">Далее</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="css-ntvt12-Icon">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C11.9024 4.68342 11.9024 5.31658 12.2929 5.70711L17.5858 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H17.5858L12.2929 18.2929C11.9024 18.6834 11.9024 19.3166 12.2929 19.7071C12.6834 20.0976 13.3166 20.0976 13.7071 19.7071L20.7071 12.7071C21.0976 12.3166 21.0976 11.6834 20.7071 11.2929L13.7071 4.29289C13.3166 3.90237 12.6834 3.90237 12.2929 4.29289Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </button>
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