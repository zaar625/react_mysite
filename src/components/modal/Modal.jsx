import { useRef } from "react";
import { useEffect } from "react";
import './modal.scss'

const Modal = ()=> {

    const pop = useRef(null);

    useEffect(() => {
        if (!document.cookie.includes('pop=ondDay')) {
            pop.current.classList.add('on');
        }
    }, []);

    return (
        <div ref={pop} className="modal">
            <ModalContent pop={pop}/>
        </div >
    )
}

export const ModalContent = (props) => {
    const popupCheck = useRef(null);
    function closePop() {
        if (popupCheck.current.checked) {
            document.cookie = "pop=ondDay; path=/; max-age=86400";
        } else {
            document.cookie = "pop=ondDay; path=/; max-age=-1";
        }
        props.pop.current.classList.remove('on');
        props.pop.current.classList.add('off');
    }

    return (
        <div className={`modal__container ${props.pop ? 'col-5' : 'col-12'}`}>
            <div className="modal__container__contents">
            {props.pop ? (<div className="modal__container__contents__intro">
                    <p> 담당자님. 안녕하세요! <br/>React.js + Typescript를 활용한 저의 웹 포트폴리오 사이트를 방문해 주셔서 감사합니다.!
                    </p>
                    <p>여태까지 배운 내용들을 최대한 해당 포트폴리오에 담고자 노력하였습니다. 
                    </p>
                    <div></div>
                </div>):''}
                <ul className="modal__container__contents__list">
                    <li>
                        <p>
                        1. 가장 최근 프로젝트가 올라왔습니다! 해당 프로젝트는 지속적으로 공부하고 적용하여 업그레이드 될 예정입니다. 
                        </p>
                        <a className='linkBtn' target="_blank" rel="noreferrer" href="https://lively-lee.netlify.app/">View
                        <i className='bx bx-right-arrow-alt'></i>
                        </a>
                    </li>
                    <li>
                        <p>
                        2. 해당 사이트의 깃허브도 공개하였으니, 제가 작성한 코드도 확인 가능합니다.
                        </p>
                        <a className='linkBtn' href="https://github.com/zaar625/react_type_commerce" target="_black">
                        Go
                        <i className='bx bx-right-arrow-alt'></i>
                        </a>
                    </li>
                    <li >
                        <p>
                        3. 아울러 제가 공부한 내용이나 계획서는 노션으로 정리되어 있으니 참고해주시면 감사하겠습니다.
                        </p>
                        <a className='linkBtn' target="_blank" rel="noreferrer" href="https://wary-spy-d47.notion.site/BABAN-026bc0393a65404785f6c958911efa35" title="계획서 바로가기">Plan
                        <i className='bx bx-right-arrow-alt'></i>
                        </a>
                        <a className='linkBtn' target="_blank" rel="noreferrer" href="https://wary-spy-d47.notion.site/6ee88740c71e4074937a7f49c43540c2?v=1d3ae83fd37948268377f9852ad19a50" title="notion TIL 바로가기">TIL
                        <i className='bx bx-right-arrow-alt'></i>
                        </a>
                    </li>
                </ul>
            </div>
            {
                props.pop ? (
                    <div className="modal__container__check">
                        <label htmlFor="popupCheck">하루 동안 안 보기
                            <input ref={popupCheck} type="checkbox" id="popupCheck" tabIndex="0" onKeyDown={
                                e => { if (e.key === "Enter") e.target.click(); }
                            } />
                        </label>
                        <button onClick={closePop} className="close">닫기</button>
                    </div>
                ) : ''
            }
        </div>
    )
}

export default Modal;
