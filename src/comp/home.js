import React, { useEffect, useState } from 'react'
//css
import './home.css'
import {Link} from 'react-router-dom'
//js
import HomeProduct from './home_product'
//icon
import {AiFillEye,AiFillHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import{BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from 'react-icons/bi'
const Home = ({addtoCart}) => {

  //product catogory
  const[newProduct, setNewProduct] = useState([]);

  const[featuredProduct, setFeaturedProduct] = useState([]);

  const[topProduct, setTopProduct] = useState([]);
  //trending product
  const[tredingProduct, setTredingProduct] = useState(HomeProduct)

  //filter of trending product
  const filtercate = (x) =>{
    const filterproduct = HomeProduct.filter((curElm) =>{
      return curElm.type === x
    })
    setTredingProduct(filterproduct)
  }

  //all trending product
  const allTrendingProduct = () =>{
    setTredingProduct(HomeProduct)
  }

  //product type
  useEffect(()=>{
    productcategory()
  })

  const productcategory=()=>{
    //new product
    const newsCategory = HomeProduct.filter((x)=>{
      return x.type ==='new'
    })
    setNewProduct(newsCategory)

    //feature product
    const featuresProduct = HomeProduct.filter((x)=>{
      return x.type === 'featured'
    })
    setFeaturedProduct(featuresProduct)
    

    const topsProduct = HomeProduct.filter((x)=>{
      return x.type === 'top'
    })
    setTopProduct(topsProduct)
  }

  return (
    <>
      <div className='home'>
        <div className='top_banner'>
          <div className='contant'>
            <h3>Silver aluminum</h3>
            <h2>Apple watch</h2>
            <p>30% off at your first odder</p>
            <Link to='/shop' className='link'>Shop Now</Link>
          </div>
        </div>

        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2>treding product</h2>
                </div>

                <div className='cate'>
                  <h3 onClick={() => filtercate ('new')}>New</h3>
                  <h3 onClick={() => filtercate ('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate ('top')}>top selling</h3>
                  <h3 onClick={() => allTrendingProduct ()}>All</h3>
                </div>
              </div>

              <div className='products'>
                <div className='container'>
                  {
                    tredingProduct.map((curElm =>
                      {
                        return(
                          <>
                            <div className='box'>
                              <div className='img_box'>
                                <img src={curElm.images} alt=''></img>
                                
                                <div className='icon'>
                                  <div className='icon_box'>
                                    <AiFillEye/>
                                  </div>
                                  <div className='icon_box'>
                                    <AiFillHeart/>
                                  </div>
                                </div>
                              </div>

                              <div className='info'>
                                <h3>{curElm.Name}</h3>
                                <p>${curElm.price}</p>
                                <button className='btn' onClick={() => addtoCart(curElm)}>Add to cart</button>
                              </div>
                            </div>
                          </>
                        )
                      }
                      ))
                  }
                </div>
                <button>Show more</button>
              </div>
            </div>

            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>our testimonial</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                      <img src='images/testimonial.jpg' alt='testimonial'></img>
                    </div>
                    <div className='info'>
                      <h3>stephan robot</h3>
                      <h4>web designer</h4>
                      <p>Customer feedback can not only help improve products, but also increase conversions. Learn how to collect customer feedback for your ecommerce site.</p>
                    </div>
                  </div>
                </div>
                
                <div className='newsletter'>
                  <div className='head'>
                    <h3>newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>join our malling list</p>
                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                    <button>subscribe</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoFacebook/>
                      </div>
                      <div className='icon'>
                        <BiLogoTwitter/>
                      </div>
                      <div className='icon'>
                        <BiLogoInstagram/>
                      </div>
                      <div className='icon'>
                        <BiLogoYoutube/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='images/banner.jpg' alt='banner'></img>
              </div>

              <div className='box'>
                <img src='images/banner3.jpg' alt='banner'></img>
              </div>

              <div className='box'>
                <img src='images/banner3.jpg' alt='banner'></img>
              </div>
            </div>

            <div className='right_box'>
              <div className='top'>
                <img src='images/banner3.jpg' alt=''></img>
                {/* <img src='images/banner3.jpg' alt=''></img> */}
              </div>
              {/* <div className='bottom'>
                <img src='images/banner3.jpg' alt=''></img>
              </div> */}
            </div>
          </div>
        </div>

        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>New Product</h2>
              </div>
              {
                newProduct.map((curElm)=>{
                  return(
                    <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={curElm.images} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye/></button>
                            <button><AiFillHeart/></button>
                            <button onClick={() => addtoCart(curElm)}><AiOutlineShoppingCart/></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>

            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                featuredProduct.map((curElm)=>{
                  return(
                    <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={curElm.images} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye/></button>
                            <button><AiFillHeart/></button>
                            <button><AiOutlineShoppingCart/></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>

            <div className='box'>
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((curElm)=>{
                  return(
                    <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={curElm.images} alt=''></img>
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye/></button>
                            <button><AiFillHeart/></button>
                            <button><AiOutlineShoppingCart/></button>
                          </div>
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
    </>
  )
}

export default Home
