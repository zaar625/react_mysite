import React ,{useState, useRef, useEffect} from 'react';
import { db } from '../../firebase/firebaseInit';
import './comment.scss';

const Comment = () => {
    const input = useRef(null)//인풋 초기화
    
    const date = new Date();
    
    const [userData, setUserData] = useState([]);//유저 게시글 객체들 집합
    
    const [blogItem, setBlogItem] = useState({
    user:'',
    content:'',
    date:`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`,
    time:date.getTime()
    });  //input value저장  
    
    const limit = 5 //페이지당 게시글 수 초기 값
    
    const [dataShow, setDataShow] = useState([]);//페이지당 보여질 데이터
    const [dataId, setDataId] = useState([]);//
    let pages = 1 //총 페이지 수 변수

    let range = []; //페이지 숫자 map사용하기 위한 배열 

    const [currPage, setCurrPage] = useState(0)//현재페이지일경우 css 변화

    const selectPage = page => {
        const start = Number(limit) * page
        const end = start + Number(limit)

        setDataShow(userData.slice(start, end))

        setCurrPage(page)
    }//페이지 클릭시 보일 아이템

    if (limit !== undefined) {
        let page = Math.floor(userData.length / Number(limit))//0
        pages = userData.length % Number(limit) === 0 ? page : page + 1//3/5=1
        range = [...Array(pages).keys()] //[0,1,...]
    }

    useEffect(()=>{
        // 마운트 되면 파이어베이스 데이터 받아오기
        const postData = async()=>{
            let PostData = [];
            let PostDataId =[]; //파이어베이스 해당 컬렉션의 각각의 문서의 아이디가져오기

            const data = await db.collection('userCard').get()
            data.forEach((doc)=>{
                let a = {
                    data: '',
                    id:''
                }
                a.data = doc.data()
                a.id = doc.id
                PostData.push(a);
                // PostDataId.push(doc.id);
            })
            PostData.sort((a, b) => a.data.time < b.data.time ? 1 : (a.data.time > b.data.time ? -1 : 0))//올린 시간순으로 정렬
            setUserData(PostData);
            setDataId(PostDataId);
            setDataShow(PostData.slice(0, Number(limit)));
        }
        postData();
    },[])
    //인풋값 뽑아내기    
    const onChange = (e) => {
        console.log(e.target)
        const { value, name } = e.target; 
        console.log({name})
        setBlogItem({
        ...blogItem, 
        [name]: value // name 키의 값을 value 로 설정
        });
    }
    //파이어베이스에 업로드하기
    const Upload =()=>{
        if(blogItem.user === ''){
            alert('유저이름을 작성해주세요.')
            return false
        }
        if(blogItem.content === ''){
            alert('내용을 작성해주세요.')
            return false
        }

        if(blogItem !== ''){
            db.collection("userCard").add(blogItem)
            .then(() => {
                alert('업로드되었습니다.')
                window.location.replace("/contact")
                })
                .catch((error)=>{
                alert('실패')
                })
        }
    }

      //firebase 데이터 삭제
    const ItemDelete = (index) => {
        if (window.confirm('해당 게시물을 삭제하시겠습니까?')) {
            db.collection('userCard').doc(`${dataShow[index].id}`).delete().then(() => {
                alert('삭제되었습니다')
                window.location.replace("/contact")
            })
        }
    }

    return (
        <div className='comment cardstyle col-12'>
            <div className='comment__header'>
                <h3>Comment</h3>
                <div></div>
            </div>
            <div className='comment__write col-12'>
                <div className='comment__write__user col-2 col-sm-12'>
                    <input ref={input} name="user" onChange={onChange} type="text" placeholder="User Name" />
                    <label>title</label>
                </div>
                <div className='comment__write__comment col-5 col-sm-12'>
                    <textarea  name="content" type="text" onChange={onChange}  placeholder="Write  your comment" />
                    <label>comment</label>
                </div>
                <button className='comment__write__send col-1' onClick={Upload}>
                    <i className='bx bx-send'></i>
                </button>
            </div>
            <div className='comment__show'>
            {//유저 게시글 가져오기
                dataShow.map((item, index) => ( <CommentView item={item} key={index} index={index} ItemDelete={ItemDelete}/>))
            }
            </div>
            <div className='comment__pagination'>
                {
                    pages >= 1 ? 
                        range.map((item, index) => (
                            <div key={index} className={`comment__pagination__item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                {item + 1}
                            </div>
                        ))
                    : null
                }
            </div>
        </div>
    )
}

const CommentView = (props) =>{
    return (
        <div className='commentView col-2 col-md-4 col-sm-12'>
            <div className='commentView__header'>
                <div className='commentView__header__userName'>{props.item.data.user}</div>
                <div className='commentView__header__date'>{props.item.data.date}</div>
            </div>
            <div className='line'></div>
            <div className='commentView__content'>
                <p>{props.item.data.content}</p>
            </div>
            <span className='commentView__footer' onClick={() => props.ItemDelete(props.index)}>Delete</span>
        </div>
    )
}


export default Comment
