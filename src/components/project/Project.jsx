import React ,{ useEffect }from 'react';
import scrollreveal from 'scrollreveal';
import { AiOutlineCheckSquare } from "react-icons/ai";
import { projectData } from '../../configs/projectData';

import './project.scss';

const Project = () => {
  useEffect(()=>{
    const sr = scrollreveal({
      origin: "right",
      distance: "100px",
      duration: 3000,
      reset: false,
    });
  
    sr.reveal(
      `
        .project-card
      `,
      {
        opacity: 0,
        interval: 400,
      }
    );
  },[]);
  return (
    <div className='project'>
    {
      projectData.map((item, index) => (
        <ProjectCard data={item} key={index}/>
      ))
    }
    </div>
  )
}

const ProjectCard = ({data}) => {  
  return (
    <div className='project-card cardstyle mb-1'>
      <div className='project-card__imgContainer col-4 col-md-12'>
        <img src={data.image} alt="프로젝트 이미지"></img>
        <div className='project-card__hover'>
          <h1>{data.title}</h1>
          <h1>{data.sub}</h1>
          <div className='view'>
            <p><a rel="noreferrer"  href={data.git} target="_blank">Github</a></p>
            <p><a  rel="noreferrer" href={data.site} target="_blank">View</a></p>
          </div>
        </div>
      </div>
      <div className='project-card__des'>
        {
         data.des.map((des,index) => (
          <div key={index}>
            <AiOutlineCheckSquare/>
            <p>{des}</p>
          </div>
         ))
        }
      </div>
    </div>
  )
}

export default Project
