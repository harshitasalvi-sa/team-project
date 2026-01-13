import ProductCard from "./ProductCard";
import "./ProductPage.css"
import mouse from "./images/mouse-310832_640.png"
import smartWatch from "./images/smart-watch.jpg"
import keyboard from "./images/keyboard.jpg"
import wirelessCharger from "./images/wireless charger.jpg"
import laptopStand from "./images/laptop-stand.jpg"
import webcam from "./images/webcam.jpg"
import speaker from "./images/speaker.jpg"
import usbHub from "./images/usb-hub.jpg"
import hardDrive from "./images/hard-drive.jpg"
import headphones from "./images/headphones.png"

function ProductPage() {
  const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with smooth tracking.",
    price: 799,
    image: mouse,
    inStock: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with tactile switches.",
    price: 2499,
    image: keyboard,
    inStock: true,
  },
  {
    id: 3,
    name: "Noise Cancelling Headphones",
    description: "Over-ear headphones with active noise cancellation.",
    price: 3999,
    image: headphones ,
    inStock: true,
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Track fitness, heart rate and notifications.",
    price: 1999,
    image: smartWatch,
    inStock: true,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and clear sound.",
    price: 1499,
    image: speaker,
    inStock: true,
  },
  {
    id: 6,
    name: "Laptop Stand",
    description: "Adjustable aluminium stand for better posture.",
    price: 999,
    image: laptopStand,
    inStock: true,
  },
  {
    id: 7,
    name: "USB-C Hub",
    description: "Multi-port hub with HDMI, USB and SD card slots.",
    price: 1299,
    image: usbHub,
    inStock: true,
  },
  {
    id: 8,
    name: "Webcam",
    description: "Full HD webcam for meetings and streaming.",
    price: 1799,
    image: webcam,
    inStock: true,
  },
  {
    id: 9,
    name: "External SSD",
    description: "Fast and portable SSD for quick file transfers.",
    price: 5499,
    image: hardDrive,
    inStock: false,
  },
  {
    id: 10,
    name: "Wireless Charger",
    description: "Fast wireless charging pad for smartphones.",
    price: 899,
    image: wirelessCharger,
    inStock: false,
  }
];

  return (
    <>
      <h1>Product Card Grid</h1>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key = {product.id}
            name={product.name}
            description = {product.description}
            price={product.price}
            image={product.image}
            inStock={product.inStock}
          ></ProductCard>
        ))
      }
      </div>

      {/* <div className="sale">Sale Sale</div> */}
      <div class="sale-wrapper">
        <div class="sale">SALE SALE SALE SALE SALE</div>
        <div class="sale-clone">SALE SALE SALE SALE SALE</div>
      </div>

    </>
  );
}

export default ProductPage;
