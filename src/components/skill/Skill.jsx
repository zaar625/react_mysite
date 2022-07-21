import React from 'react';
import SkillImage from '../../assets/images/skill-img.png'
import './skill.scss';

const Skill = () => {

    const skill =['HTML5', 'CSS3', 'SCSS', 'Styled-component', 'Javascript', 'Typescript', 'React', 'Vue', 'firebase']

  return (
    <div className='skill'>
        <h1 className='mb-2'> What I used skill</h1>
        <div className='skill__container '>
            <img className='skill__container__bg col-2' src={SkillImage} alt="skillimage"/>
            <div className='skill__ctx'>
                <div className='skill__ctx__skill-name'>
                    {
                        skill.map((item, index)=>(
                            <span className="skill-span" key={index}>{item}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill