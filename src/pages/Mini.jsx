import React,{useEffect, useState}from 'react'
import scrollreveal from 'scrollreveal'
import Navbar from '../components/navbar/Navbar'
import ProjectOne from '../components/mini-project/music/App'
import Game from '../components/mini-project/game/Game'
// import Caculate from '../components/mini-project/calculate/components/Caculate'
import Weather from '../components/mini-project/weather/Weather'

const Mini = () => {
  // scrollreveal
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr.reveal(
      `
        .scrollreveal01,
        .scrollreveal03,
        .scrollreveal04
      `,
      {
        opacity: 0,
        interval: 400,
      }
    );
  }, []);

  //프로젝트 검색 기능 추가
  const name = [<ProjectOne key='Music'/>,<Weather  key='Weather'/>,<Game key='Card game'/>]; //프로젝트 컴포넌트 배열에 담고,
  const [projectComponent, SetProjectComponent] = useState(name) //프로젝트 컴포넌트 상태관리
  const [searchText, setSearchText] = useState('');//input 상태관리

  //input txt 변화감지
  const handleChange = (e) =>{
    e.preventDefault();
    setSearchText(e.target.value);
    if(!e.target.value.length > 0) {
      SetProjectComponent(name)
    }
  }
  // input txt와 프로젝트 매치 
  useEffect(() => {
    if (searchText === '') return;
    SetProjectComponent(() =>
    name.filter((item) =>
        item.key.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  
  return (
    <div className='mini'>
      <Navbar item={['리액트로 작은 프로젝트를 만들어 보았습니다.']}/>
      <div className='mini__input cardstyle col-5 col-md-12'>
        <form>
          <input
            type="text"
            value={searchText}
            onChange={handleChange}
            placeholder="Search Name (Music, Caculete, Weather, Card game)"
          />
          <i className='bx bx-search'></i>
        </form>
      </div>
      <div className='mini__container'>
        {
          projectComponent.map((item)=>(item))
        } 
      </div>
    </div>
  )
}

export default Mini
