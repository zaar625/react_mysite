import React,{useState} from 'react'
import Card from './Card'

const Cards = () => {
    const [items, setItems] = useState([
        { id: 1, img: require('../img/Seraphine.png'), stat: "" },
        { id: 1, img: require('../img/Seraphine.png'), stat: "" },
        { id: 2, img: require('../img/Thresh.png'), stat: "" },
        { id: 2, img: require('../img/Thresh.png'), stat: "" },
        { id: 3, img: require('../img/Vladimir.png'), stat: "" },
        { id: 3, img: require('../img/Vladimir.png'), stat: "" },
        { id: 4, img: require('../img/Ashe.png'), stat: "" },
        { id: 4, img: require('../img/Ashe.png'), stat: "" },
        { id: 5, img: require('../img/Veigar.png'), stat: "" },
        { id: 5, img: require('../img/Veigar.png'), stat: "" },
        { id: 6, img: require('../img/Leona.png'), stat: "" },
        { id: 6, img: require('../img/Leona.png'), stat: "" },
        { id: 7, img: require('../img/Senna.png'), stat: "" },
        { id: 7, img: require('../img/Senna.png'), stat: "" },
        { id: 8, img: require('../img/Pantheon.png'), stat: "" },
        { id: 8, img: require('../img/Pantheon.png'), stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)//카드 이전값

    //정답인지 체크하기
    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }
    //카드 클릭함수
    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="game__container">
            { items.map((item, index) => (
                <Card key={index} item={item} index={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards