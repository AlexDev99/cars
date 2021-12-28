import { NavLink } from 'react-router-dom'
import './Cars.css'
import  Car  from './svg/Car.svg'


export function Cars({cars}) {

    return (
        <div className='mt-2'>
            <div className='w-100 row no-gutters'>
                {Object.keys(cars).map((car) => (
                    <div mode='dark' className="col-sm-6 col-md-4 col-lg-3 d-flex flex-grow-1 css-32rom-CarResultCardContainer el33gl10" key={car.toString()}>
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