import { NavLink } from 'react-router-dom'
import './Cars.css'
import  Car  from './svg/Car.svg'


export function Cars({cars}) {
    console.log(cars[0])


    return (
        <div className='mt-2'>
            <div className='w-100 row no-gutters'>
                {Object.keys(cars).map((car) => (
                    <div mode='dark' className="col-sm-6 col-md-4 col-lg-3 d-flex flex-grow-1 css-32rom-CarResultCardContainer el33gl10" key={car.toString()}>
                        <div className='like'>
                            <img src={Car} alt="car" />
                        </div>
                        <div class="css-18p8yjd-CarResultCardDataCompareWrapper exe0bwj0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(128, 128, 128, 0.4)" fill-opacity="1" class="css-7qw58u-Icon">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V2ZM18 18.5V18H14.5V10H17.6126C18.2951 10 18.7771 9.33132 18.5613 8.68379L17.9558 6.86757C17.6836 6.05088 16.9193 5.50002 16.0585 5.50002H14.5V4.00002L15.6811 4.00001C17.3716 4.00001 18.8795 5.06269 19.4481 6.65467L21 11V18.5C21 19.3284 20.3284 20 19.5 20C18.6716 20 18 19.3285 18 18.5ZM17.618 12C17.2393 12 16.893 12.214 16.7236 12.5528L16.3618 13.2764C16.1956 13.6089 16.4373 14 16.809 14H19.5C19.7761 14 20 13.7762 20 13.5V12.5C20 12.2239 19.7761 12 19.5 12H17.618ZM5.1 5.00002C5.3 4.40002 5.8 4.00002 6.5 4.00002H9.5V5.50002H6.5L5 10H9.5V18H6V18.5C6 19.3285 5.32843 20 4.5 20C3.67157 20 3 19.3284 3 18.5V11L5.1 5.00002ZM5.5 15C4.7 15 4 14.3 4 13.5C4 12.7 4.7 12 5.5 12C6.3 12 7 12.7 7 13.5C7 14.3 6.3 15 5.5 15Z">
                                </path>
                            </svg>
                        </div>
                        <NavLink mode="dark" to={"/car/"+cars[car].id+"/"} target="_blank" className="css-1sg0nkn-CardResultCard-CarResultCardWrapperBase elaysg91">
                            <div className="css-2u7grx-CarResultCardImageWrapper e1s9nk190">
                                <img src={`${cars[car].images[0]}`} alt="Haval F7" class="css-1b8ut1y-CarResultCardImageComponent e1s9nk191" />
                            </div>
                            <div className="css-1twrlxf-CarResultCardData e1kfkdu90">
                                <div class="css-12bwtj3-CarResultCardDataTitleWrapper e1e3ishk0">
                                    <span typography="sub_1" color="#E5E5E5" class="css-1uqeuzh-H5-interRegular-bold32 e1c33kzw6">{cars[car].brand},</span>
                                    <span class="ml-1 css-1ndogut-Typography-interSemiBold-sub1 e1c33kzw0" typography="sub_1" color="rgba(128, 128, 128, 0.6)">{cars[car].year}</span>
                                </div>
                                <div class="css-7axcaz-CarResultCardDataPriceWrapper eze4fry0">
                                    <h4 color="#E5E5E5" class="css-1uqeuzh-H5-interRegular-bold32 e1c33kzw6">{cars[car].price}</h4>
                                    <span class="ml-1 css-1uqeuzh-H5-interRegular-bold32 e1c33kzw6">$</span>
                                </div>
                                <div class="css-14wbo2v-CarResultCardDataCreditWrapper e1s4l9510">
                                    <div class="css-7cgnq1-TagBox e1840gw50">
                                        <span color="#000000" typography="p_regular_12" class="css-4hmagn-Typography-interRegular-pRegular12 e1c33kzw0">В кредит от</span>
                                        <span color="#000000" typography="p_bold_12" class="css-15tqyfq-Typography-interSemiBold-pBold12 e1c33kzw0"> 131 $/мес.</span>
                                    </div>
                                </div>
                                <div class="css-1cpf8j7-CarResultCardDataPropertyWrapper erbf8x20">
                                    <span typography="p_regular_12" color="#808080" class="css-mmm1cf-Typography-interRegular-pRegular12 e1c33kzw0">Кроссовер • Новая</span>
                                    <span typography="p_regular_12" color="#808080" class="css-mmm1cf-Typography-interRegular-pRegular12 e1c33kzw0">13 окт, {cars[car].city}</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}