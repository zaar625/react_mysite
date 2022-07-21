import React from 'react';
import {  BsBookmarksFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import IntroBg from '../../assets/images/mine.jpg'
import './intro.scss';

const Intro = () => {
  return (
    <div className='intro'>
        <h1 className='mb-2'>LEE SANG YOON</h1>   
        <div className='intro__box mb-1'>
            <img className ="intro__box__bg col-2" src={IntroBg} alt='myimage'></img>
            <div className='intro__box__ctx'>
                <p>
                안녕하세요!<br/>프론트엔드 개발자를 꿈꾸며 새로운 길에 도전 중인 이상윤입니다.<br/>
                고객의 니즈를 파악하고 함께 해결해나가는 것을 좋아하며, 서로 성장하는 과정에 기쁨을 느낍니다.<br/>
                다양한 산업 현장에서 크고 작은 불편들이 IT로 해결되는 것 처럼 여러 문제들을 해결하는 개발자가 되고 싶습니다. 
                </p>
            </div>
        </div>
        <div className='mb-1'>
            <div className='intro__sns'>
                <p><AiFillGithub/><a rel="noreferrer" target="_blank" href='https://github.com/zaar625'>Github</a></p>
                <p><BsBookmarksFill/><a rel="noreferrer"  target="_blank"  href='https://wary-spy-d47.notion.site/6ee88740c71e4074937a7f49c43540c2?v=1d3ae83fd37948268377f9852ad19a50'>TIL</a></p>
            </div>
        </div>
    </div>
  )
}
export default Intro