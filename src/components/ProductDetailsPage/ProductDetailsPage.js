import React, { Component, Fragment } from "react";
import sharee_one from "../../asset/images/sharee_one.jpg";

export default class ProductDetailsPage extends Component {
  state = {
    products: [
      {
        id: "1",
        title: "Silk Sharee",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        content: "Welcome to our Site.",
        price: 870,
        count: 1,
        src: [
          "https://ilyn.global/media/product_image/1987/1987_1024_1.jpeg",
          "https://ilyn.global/media/product_image/1987/1987_1024_2.jpeg",
          "https://ilyn.global/media/product_image/1987/1987_1024_3.jpeg",
        ],
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className='app'>
        {products.map((item) => (
          <div className='details' key={item._id}>
            <div className='big-img'>
              <img src={item.src[index]} alt='Sharee One' />
            </div>
            <div className='box'>
              <div className='row'>
                <h2>{item.title}</h2>
                <span>BDT {item.price}</span>
              </div>

              <p>{item.content}</p>
              <p>{item.description}</p>
              <div className='thumb' ref={this.myRef}>
                {item.src.map((img, index) => (
                  <img
                    src={img}
                    alt='One'
                    key={index}
                    onClick={() => this.handleTab(index)}
                  />
                ))}
              </div>
              <button className='btn btn-danger cart'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
