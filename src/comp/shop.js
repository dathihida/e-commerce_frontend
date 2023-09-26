import React, { useState } from 'react'
import './shop.css'
import{AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai'
const Shop = ({shop, Filter, allcateFilter, addtoCart}) => {
    //toggle product detail
    const [showDetail, setShowDetail] = useState(false) 
    
    //detail page data
    const[detail, setDetail] = useState([])

    //show detail
    const detailpage = (product) =>{
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        // console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    

    //close detail
    const closedetail = ()=>{
        setShowDetail(false)
    }

  return (
    <>
        {
            showDetail ?
            <>
                <div className='product_detail'>
                    <button className='close_btn' onClick={closedetail}><AiOutlineClose/></button>
                    <div className='container'>
                        <div className='img_box'>
                            <img src={detail.images} alt=''></img>
                        </div>

                        <div className='info'>
                            <h4>{detail.cat}</h4>
                            <h2>{detail.Name}</h2>
                            <p>A Screen Everyone Will Love. Whether your family is streaming or video chatting with friends tablet</p>
                            <h3>${detail.price}</h3>
                            <button onClick={()=> addtoCart(detail)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </>
            : null
        }
        
        <div className='shop'>
            <h2>shop</h2>
            <p>Home shop</p>
            <div className='container'>
                <div className='left_box'>
                    <div className='category'>
                        <div className='header'>
                            <h3>All category</h3>
                        </div>
                        <div className='box'>
                            <ul>
                                <li onClick={() => allcateFilter ()}>All</li>
                                <li onClick={() => Filter ("camera")}>camera</li>
                                <li onClick={() => Filter ("headphone")}>headphone</li>
                                <li onClick={() => Filter ("box")}>box</li>
                                <li onClick={() => Filter ("shirt")}>shirt</li>
                                <li onClick={() => Filter ("clock")}>clock</li>
                                <li onClick={() => Filter ("flowerwater")}>flowerwater</li>
                                <li onClick={() => Filter ("shoes")}>shoes</li>
                            </ul>
                        </div>
                    </div>

                    <div className='banner'>
                        <div className='img_box'>
                            <img src='images/cat-img-4.jpg' alt=''></img>
                        </div>
                    </div>
                </div>

                <div className='right_box'>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src='images/banner.jpg' alt=''></img>
                        </div>
                    </div>

                    <h2>Shop Product</h2>
                    <div className='product_box'>
                        <div className='product_container'>
                            {
                                shop.map((curElm) =>{
                                    return(
                                        <>
                                            <div className='box'>
                                                <div className='img_box'>
                                                    <img src={curElm.images} alt=''></img>
                                                    <div className='icon'>
                                                        <li>
                                                            <AiFillHeart/>
                                                        </li>
                                                        <li onClick={ ()=> detailpage (curElm)}>
                                                            <AiFillEye/>
                                                        </li>
                                                    </div>
                                                </div>

                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>${curElm.price}</p>
                                                    <button onClick={() => addtoCart (curElm)}>Add To Cart</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shop
