import { Content } from "./main/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Finance } from './finance/Finance'
import './components/header/Header.css'
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom"
import './Index.css'

import car from './components/header/logo.svg'
import { useState } from 'react'
import { ModelBox } from './main/model/ModelBox'
import { CreateAnnouncement } from "./finance/CreateAnnouncement";
import { Sale } from "./sale/Sale";

function Index() {


  const [isModal, setModal] = useState(false)
  const onClose = () => setModal(false)

  return (
    <div className="Index">
      <Router>
        <div>
          <div className='css-1ypzjwv'>
            <div className='css-legerk1'>
              <div className='d-flex flex-row align-items-center justify-content-between css-1o3k4lw espi46x0'>
                <div className='d-flex flex-row align-items-center flex-grow-1 h-100 mr-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      <a className='ml-4 mr-0 mr-md-2 css-nn640c ezl9qcz0'>
                        <img src={car} alt="car" />
                      </a>
                    </div>
                  </div>
                  <div className="d-flex ml-4 h-100">
                    <div className="css-1lnzu0f eprde0t0">
                      <a mode="dark" className="p-0 css-1mdese6-Link-Root e1v39g080" href="/" type="button" size="40">
                        <span className="css-ajmj03-Label easdwy10">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="rgba(128, 128, 128, 0.4)" className="mr-2 css-7qw58u-Icon">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06528 8H5.44152C4.58066 8 3.81183 8.54875 3.52681 9.36106C2.92811 11.0673 2 13.69 2 13.69V20C2 20.55 2.45 21 3 21C3.55 21 4 20.55 4 20V19H14V20C14 20.55 14.45 21 15 21C15.55 21 16 20.55 16 20V13.9973C15.8873 13.9969 15.7738 13.9937 15.6597 13.9876C13.9203 13.905 12.3183 13.1625 11.1211 12H4.67L5.33 10H9.67624C9.37655 9.37839 9.16678 8.70625 9.06528 8ZM4.5 16.5C3.95 16.5 3.5 16.05 3.5 15.5C3.5 14.95 3.95 14.5 4.5 14.5C5.05 14.5 5.5 14.95 5.5 15.5C5.5 16.05 5.05 16.5 4.5 16.5ZM13.5 16.5C12.95 16.5 12.5 16.05 12.5 15.5C12.5 14.95 12.95 14.5 13.5 14.5C14.05 14.5 14.5 14.95 14.5 15.5C14.5 16.05 14.05 16.5 13.5 16.5Z">
                            </path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7601 11.17L21.8801 14.29C22.2701 14.68 22.9101 14.68 23.3001 14.29C23.6901 13.9 23.6901 13.27 23.3001 12.88L20.1701 9.75004C20.8801 8.67004 21.2001 7.31004 20.8701 5.85004C20.4401 3.92005 18.8201 2.40004 16.8701 2.07004C13.4901 1.50004 10.6001 4.33004 11.0401 7.68004C11.3601 10.03 13.3901 11.88 15.7601 11.99C16.8701 12.05 17.9001 11.73 18.7601 11.17ZM16.0001 4.00004C17.6501 4.00004 19.0001 5.35004 19.0001 7.00004C19.0001 8.65004 17.6501 10 16.0001 10C14.3501 10 13.0001 8.65004 13.0001 7.00004C13.0001 5.35004 14.3501 4.00004 16.0001 4.00004Z">
                            </path>
                          </svg>
                          <p color="#808080" typography="other_semibold_14" className=" css-y5toya-Typography-interRegular-buttonSemibold14 e1c33kzw0"><Link className='css-1mdese6-Link-Root css-y5toya-Typography-interRegular-buttonSemibold14' to={{ pathname: '/' }}>Поиск авто</Link></p>
                        </span></a></div><div className="css-1lnzu0f eprde0t0">
                      <span mode="dark" className="p-0 css-1mdese6-Link-Root e1v39g080" type="button" size="40">
                        <span className="css-ajmj03-Label easdwy10"><p color="#808080" typography="other_semibold_14" className=" css-y5toya-Typography-interRegular-buttonSemibold14 e1c33kzw0">
                          <Link className='css-1mdese6-Link-Root css-y5toya-Typography-interRegular-buttonSemibold14' to={{ pathname: '/credit' }}>Автокредит</Link>
                        </p>
                        </span>
                      </span>
                    </div>
                    <div className="css-1lnzu0f eprde0t0">
                      <a mode="dark" className="p-0 css-1mdese6-Link-Root e1v39g080" href="#" type="button" size="40">
                        <span className="css-ajmj03-Label easdwy10"><p color="#808080" typography="other_semibold_14" className=" css-y5toya-Typography-interRegular-buttonSemibold14 e1c33kzw0">Блог</p>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="d-flex flex-column css-kn46u7">
                      <div className="flex-grow-1 align-items-center justify-content-center d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 1)" className="css-1jomyp1-Icon">
                          <path d="M22.5999 11.29L19.9999 8.69001V5.00001C19.9999 4.45001 19.5499 4.00001 18.9999 4.00001H15.3099L12.7099 1.40001C12.3199 1.01001 11.6899 1.01001 11.2999 1.40001L8.68992 4.00001H4.99992C4.44992 4.00001 3.99992 4.45001 3.99992 5.00001V8.69001L1.39992 11.29C1.00992 11.68 1.00992 12.31 1.39992 12.7L3.99992 15.3V19C3.99992 19.55 4.44992 20 4.99992 20H8.68992L11.2899 22.6C11.6799 22.99 12.3099 22.99 12.6999 22.6L15.2999 20H18.9999C19.5499 20 19.9999 19.55 19.9999 19V15.31L22.5999 12.71C22.9899 12.32 22.9899 11.68 22.5999 11.29ZM17.9199 12.98C17.5799 15.1 16.0699 16.92 14.0399 17.64C12.8299 18.07 11.6299 18.09 10.5399 17.82C10.1299 17.72 10.0599 17.17 10.4099 16.92C11.9799 15.84 12.9999 14.04 12.9999 12C12.9999 9.96001 11.9799 8.16001 10.4199 7.08001C10.0699 6.84001 10.1299 6.29001 10.5499 6.18001C11.6399 5.91001 12.8399 5.93001 14.0499 6.36001C16.0699 7.08001 17.5899 8.90001 17.9299 11.02C17.9799 11.35 17.9999 11.68 17.9999 12C17.9899 12.32 17.9699 12.65 17.9199 12.98Z" fill-opacity="0.4">
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="/create-announcement" id="createAnnouncement" mode="dark" className="px-0 mr-4 css-1mdese6-Link-Root e1v39g080" type="button" size="40">
                      <span className="css-ajmj03-Label easdwy10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-jhecdq-Icon">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H13V8C13 7.45 12.55 7 12 7C11.45 7 11 7.45 11 8V11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13H11V16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V13Z">
                          </path>
                        </svg>
                        <p typography="p_regular_14" color="rgba(0, 131, 252, 1)" className="css-1uid78q-Typography-interRegular-pRegular14 e1c33kzw0">
                             <Link className='css-1mdese6-Link-Root css-y5toya-Typography-interRegular-buttonSemibold14' to={{ pathname: '/credit-announcement' }}>Создать обьявление</Link>
                          </p>
                      </span>
                    </a>
                    <button mode="dark" className="px-0 css-uw4g9o-Root e7wkbvf0" size="40" onClick={() => setModal(true)}>
                      <span className="css-ajmj03-Label easdwy10"><p typography="p_regular_14" color="#E5E5E5" className="css-18e0jtp-Typography-interRegular-pRegular14 e1c33kzw0">Войти</p>
                      </span>
                    </button>
                  </div>
                  <ModelBox
                    visible={isModal}
                    onClose={onClose}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/credit" element={<Finance />} />
          <Route path="/credit-announcement" element={<CreateAnnouncement url='/sale'/>} />
          <Route path="/sale" element={<Sale/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default Index;
