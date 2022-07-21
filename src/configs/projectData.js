import { projectImages } from "../assets"

export const projectData = [
    {
      image:projectImages[0],
      title:'BABAN Shopping Shop',
      sub:'React with Typescript ',
      git: 'https://github.com/zaar625/react_type_commerce',
      site:'https://lively-lee.netlify.app/',
      des:[
        'firebase에서 제공하는 Authontication, Database, Storage 활용합니다.',
        'Redux-toolkit을 이용하여 상태관리 합니다.',
        'Typescript를 점진적으로 적용합니다.',
        'Memozation을 이용하여 불필요한 렌더링을 최소화 합니다.',
        '회원가입/ 소셜 로그인/ 상품상세 페이지/ 카트 페이지/ 어드민 페이지로 구성됩니다.'

      ]
    },
    {
        image:projectImages[1],
        title:'The Plant',
        sub:'Responsive &  Pre-processor',
        git: 'https://github.com/zaar625/portfolio_responsive_plant',
        site:'https://zaar625.github.io/portfolio_responsive_plant/',
        des:[
          '반응형으로 제작합니다. ',
          'CSS Preprocessor 중 SCSS를 활용합니다.',
          'ScroollReveal.js 라이브러리를 이용하여 부드러운 애니메이션을 편리하게 이용합니다.',
          '테마모드를 적용합니다.',
          'javascript를 통해 DOM을 조작합니다.'
        ]
      },
    {
      image:projectImages[2],
      title:'first web site',
      sub:'html5 & css3 ',
      git: 'https://github.com/zaar625/responsive_web_01',
      site:'https://zaar625.github.io/HTML_basic/',
      des:[
        '웹 표준과 웹접근성을 고려하여 마크업을 합니다.  ',
        'CSS3의 속성들을 활용하여 다양한 Effect 효과를 줍니다.',
        'Slick.js를 이용하여 슬라이더를 표현합니다. ',
        '해상도에 따른 이미지를 다르게 표현하는 방법을 적용합니다.',
      ]
    }
]