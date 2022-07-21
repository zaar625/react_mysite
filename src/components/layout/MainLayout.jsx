import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ThemeAction from '../../redux/actions/ThemeAction'

import './main-layout.scss'
import Sidebar from '../sidebar/Sidebar'
import Portfolio from '../../pages/Portfolio'
import Aboutme from '../../pages/Aboutme'
import Contact from '../../pages/Contact'
import Mini from '../../pages/Mini'


import LoadingSpinner from '../spinner/Spinner'

const MainLayout = () => {

    const [isLoading, setIsLoading] = useState(true);
    // 로딩보여주기
    setTimeout(() => {
        setIsLoading(false)
    }, 3500);


    const themeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')
        dispatch(ThemeAction.setMode(themeClass))
        dispatch(ThemeAction.setColor(colorClass))

    }, [dispatch])


    return (
        <BrowserRouter>  {isLoading ? <LoadingSpinner /> : 
        ( <div className={`main__layout ${themeReducer.mode} ${themeReducer.color}`}>
                <Sidebar />
                <div className='main__layout__content'>
                    <div className='layout__content__main col-12 col-md-12'>
                        <Routes>
                            <Route path="/" element={<Aboutme />}></Route>
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/mini" element={<Mini />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </div>)
        }
        </BrowserRouter>
        
    )
}

export default MainLayout
