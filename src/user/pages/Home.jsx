import React from 'react'
import Banner from './component/Banner'
import Collection from './component/Collection'
import { Button, Paragrap } from '../../atoms/Atoms'
import Heading from './component/Heading'
import Blog from './component/Blog'

const Home = () => {

  let blog = [
    {
      img: "https://htmldemo.net/reid/reid/assets/img/blog/blog1.jpg",
      title: "Mercedes Benz– Mirror To The Soul 360",
    },
    {
      img: "https://htmldemo.net/reid/reid/assets/img/blog/blog2.jpg",
      title: "Dior F/W 2015 First Fashion Experience",
    },
    {
      img: "https://htmldemo.net/reid/reid/assets/img/blog/blog3.jpg",
      title: "London Fashion Week & Royal Day",
    },
  ]


  return (
    <div>

      {/* banner */}
      <section className="banner d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <Banner />
            </div>
          </div>
        </div>
      </section>

      {/* collection */}
      <section className="collection">
        <div className="row">
          <div className="col-lg-6">
            <div className="collection-img">
              <img src="https://htmldemo.net/reid/reid/assets/img/bg/banner2.jpg" alt="collection image" />
            </div>
          </div>
          <div className="col-lg-6">
            <Heading content="For Women’s Collection" />
            <Collection />
          </div>
        </div>
      </section>

      {/* shoes */}
      <section className="shoes ">
        <div className="shoes-img d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-lg-6">
              <h1>Game Of Thrones Jaime
                Lannister Themed Sneakers</h1>
              <Button content="discover now" style="btn" />
            </div>
          </div>
        </div>
      </section>

      {/* men-collection */}
      <section className="men-collection collection pt-0">
        <div className="row">
          <div className="col-lg-6">
            <Heading content="For Men’s Collection" />
            <Collection />
          </div>
          <div className="col-lg-6">
            <div className="mens-img">
              <img src="https://htmldemo.net/reid/reid/assets/img/bg/banner4.jpg" alt="men's image" />
            </div>
          </div>
        </div>
      </section>

      {/* blog */}
      <section className="blog">
        <div className="container">
          <Heading content="Latest Blogs" />
          <div className="blog-info">
            <div className="row">
              {
                blog.map((val,index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="col-lg-4">
                        <Blog img={val.img} title={val.title} />
                      </div>
                    </React.Fragment>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      {/* follow */}
      <section className="follow">
        <Heading content="Follow us On Instagram" />
        <div className="follow-img d-flex justify-content-between">
          <img src="https://htmldemo.net/reid/reid/assets/img/about/intagram.png" alt="follow image" />
          <img src="https://htmldemo.net/reid/reid/assets/img/about/intagram1.png" alt="follow image" />
          <img src="https://htmldemo.net/reid/reid/assets/img/about/intagram2.png" alt="follow image" />
          <img src="https://htmldemo.net/reid/reid/assets/img/about/intagram3(1).png" alt="follow image" />
          <img src="https://htmldemo.net/reid/reid/assets/img/about/intagram4(1).png" alt="follow image" />
        </div>
        <Paragrap content="#Follow us on Instagram" style="paragrapp text-center" />
      </section>

      {/* footer */}

    </div>
  )
}

export default Home
