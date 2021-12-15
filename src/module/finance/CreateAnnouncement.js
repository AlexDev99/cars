
import { NavLink } from 'react-router-dom'
import './Main.css'

export function CreateAnnouncement() {

    return (
        <div className='flex-grow-1 mb-5'>
            <div className='pt-3 css-1eqerk1'>
                <div>
                    <div className='d-flex flex-column align-items-center justify-content-start'>
                        <img src="/images/createAnnouncement.png" alt="" class="css-1hdq21e" />
                        <h4 class="mt-4 css-kmsf34-H6-interRegular-bold24 e1c33kzw7" color="#D9D9D9">Продать авто – легко!</h4>
                        <p class="mt-1 css-12nzv1h-Typography-interRegular-pRegular14 e1c33kzw0" typography="p_regular_14" color="#808080">10 000 покупателей ждут ваше объявление</p>
                        <button class="mt-3 css-etrdj3-Root e7wkbvf0" mode="dark" id="createAnnouncement_2" size="40">
                            <span class="css-ajmj03-Label easdwy10">
                                <p typography="other_semibold_14" color="#FFFFFF" class="css-1c1t5j3-Typography-interRegular-buttonSemibold14 e1c33kzw0">Создать объявление</p>
                            </span>
                        </button>
                        <span mode="dark" class="mt-2 css-1bnvi13-Link-Root e1v39g080" href="/prodatseychas" id="prodatseychas_2" type="button" size="40">
                            <span class="css-ajmj03-Label easdwy10">
                                <p typography="other_semibold_14" color="rgba(9, 168, 101, 1)" class="css-1v2lv4m-Typography-interRegular-buttonSemibold14 e1c33kzw0">
                                    <NavLink to='/create'>Продать авто сейчас</NavLink>
                                </p>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}