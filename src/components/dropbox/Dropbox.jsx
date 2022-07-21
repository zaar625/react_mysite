import React ,{useRef}from 'react'
import {IoIosSettings} from 'react-icons/io'
import ThemeMenu from '../ThemeMenu/ThemeMunu'
import { ModalContent } from '../modal/Modal'
import './dropbox.scss'

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // 외부에 클릭했을때,(즉 이벤트타겟이 없을때)
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const Dropbox = () => {
  return (
    <div className='dropbox col-6'>
        <Bellbox/>
        <SettingBox/>
    </div>
  )
}
export const SettingBox = () => {

    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)

  return (
    <div className='setting-box'>
        <div className='dropbox__toggle'>
            <button ref={dropdown_toggle_el} aria-label="테마옵션"><IoIosSettings/></button>
        </div>
        <div ref={dropdown_content_el} className='dropbox__content'>
            <ThemeMenu/>
        </div>
    </div>
  )
}

export const Bellbox = () => {

    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)

  return (
    <div className='bell-box'>
        <div className='dropbox__toggle'>
            <button ref={dropdown_toggle_el} aria-label="알림내용"><i className='bx bx-bell'></i></button>
        </div>
        <div ref={dropdown_content_el} className='dropbox__content bellBox'>
            <ModalContent/>
        </div>
    </div>
  )
}



export default Dropbox