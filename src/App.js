import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorMapping, ColorPicker, Editor, Line } from './pages'

import { useStateContext } from './contexts/ContextProvider'

import './App.css'


const App = () => {
    const { activeMenu, setThemeSetting, themeSetting, currentColor, currentMode } = useStateContext()

    return (
        <div className={currentMode === 'Dark' ? 'dark realtive' : 'realtive'}>
            <BrowserRouter>


                {/* navbar */}
                <div className="sticky top-0 md:static bg-[#121C23] h-[72px] navbar w-full">
                    <div>
                        <Navbar />
                    </div>
                </div>

                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content='Settings' position='TopCenter'>
                            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray' onClick={() => setThemeSetting(true)} style={{ background: currentColor, borderRadius: '50%' }} >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>





                    <div className={`dark:bg-secondary-dark-bg transition-all ${activeMenu ? `w-72 fixed sidebar bg-white` : `w-0`} `}
                    >
                        <Sidebar />
                    </div>

                    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72' : 'flex-2'}`
                    }>

                        {/* <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                            <Navbar />
                        </div> */}



                        <div>

                            {themeSetting && <ThemeSettings />}

                            <Routes>
                                {/* Dashboard */}
                                <Route path='/' element={<Ecommerce />} />
                                <Route path='/ecommerce' element={<Ecommerce />} />

                                {/* Pages */}
                                <Route path='/orders' element={<Orders />} />
                                <Route path='/employees' element={<Employees />} />
                                <Route path='/customers' element={<Customers />} />

                                {/* App */}
                                <Route path='/kanban' element={<Kanban />} />
                                <Route path='/editor' element={<Editor />} />
                                <Route path='/calendar' element={<Calendar />} />
                                <Route path='/color-picker' element={<ColorPicker />} />

                                {/* Charts */}
                                <Route path='/line' element={<Line />} />
                                <Route path='/area' element={<Area />} />
                                <Route path='/bar' element={<Bar />} />
                                <Route path='/pie' element={<Pie />} />
                                <Route path='/financial' element={<Financial />} />
                                <Route path='/color-mapping' element={<ColorMapping />} />
                                <Route path='/pyramid' element={<Pyramid />} />
                                <Route path='/stacked' element={<Stacked />} />

                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App