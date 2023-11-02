import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    name: "T-Shirt",
    original_price: 149,
    discounted_price: 99,
    category_name: "men",
    is_stock: false,
    rating: 4.3,
    reviews: 109,
    description:
      "These premium leather sneakers embody urban sophistication with their sleek design, high-quality craftsmanship, and attention to detail.",
    trending: true,
    size: 5,
    img: "https://static.vecteezy.com/system/resources/previews/008/847/318/non_2x/isolated-black-t-shirt-front-free-png.png",
  },

  {
    _id: uuid(),
    name: "T-Shirt",
    original_price: 130,
    discounted_price: 99,
    category_name: "men",
    is_stock: true,
    rating: 4.1,
    reviews: 129,
    description:
      "These urban high-top sneakers feature a contemporary silhouette, luxurious materials, and impeccable stitching, making them a stylish choice for fashion-forward individuals.",
    trending: true,
    size: 7,
    img: "https://static.vecteezy.com/system/resources/previews/008/847/318/non_2x/isolated-black-t-shirt-front-free-png.png",
  },
  {
    _id: uuid(),
    name: "T-Shirt",
    original_price: 199,
    discounted_price: 79,
    category_name: "men",
    is_stock: true,
    rating: 2.7,
    reviews: 19,
    description:
      "Combining cutting-edge technology with urban style, these running shoes feature advanced cushioning, breathable mesh, and a sleek, streamlined design.",
    trending: false,
    size: 4,
    img: "https://static.vecteezy.com/system/resources/previews/008/847/318/non_2x/isolated-black-t-shirt-front-free-png.png",
  },
  // {
  //   _id: uuid(),
  //   name: "Velocity Prime",
  //   original_price: 299,
  //   discounted_price: 199,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 3.3,
  //   reviews: 130,
  //   description:
  //     "Made from supple, premium leather, these loafers exude elegance with their minimalist urban aesthetic and effortless slip-on design.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-kids-4.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Equinox Maxima",
  //   original_price: 399,
  //   discounted_price: 299,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 4.5,
  //   reviews: 109,
  //   description:
  //     "These urban boots are crafted from luxurious suede and boast a modern silhouette, making them a versatile and stylish choice for any occasion.",
  //   trending: false,
  //   size: 7,
  //   img: "/assets/images/products-images/image-kids-5.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Precision Optima",
  //   original_price: 99,
  //   discounted_price: 89,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 3.4,
  //   reviews: 39,
  //   description:
  //     "Designed for the fashion-conscious urbanite, these sneakers feature bold colors, unique patterns, and premium materials, adding an eye-catching element to any outfit.",
  //   trending: false,
  //   size: 5,
  //   img: "/assets/images/products-images/image-kids-6.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Apex Fusion X",
  //   original_price: 399,
  //   discounted_price: 299,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 3.6,
  //   reviews: 32,
  //   description:
  //     "These premium leather Chelsea boots offer a perfect blend of urban style and timeless elegance, with their sleek silhouette and comfortable fit.",
  //   trending: false,
  //   size: 5,
  //   img: "/assets/images/products-images/image-kids-7.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Quantum Impact",
  //   original_price: 599,
  //   discounted_price: 499,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 4.6,
  //   reviews: 1094,
  //   description:
  //     "These urban slip-on sneakers combine fashion-forward design with premium materials, allowing for effortless style and comfort.",
  //   trending: true,
  //   size: 7,
  //   img: "/assets/images/products-images/image-kids-8.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Elevation Ultra",
  //   original_price: 699,
  //   discounted_price: 599,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 4.5,
  //   reviews: 166,
  //   description:
  //     "Urban Desert Boots: Made from high-quality materials, these desert boots feature a rugged yet refined urban look, making them an ideal choice for the modern adventurer.",
  //   trending: false,
  //   size: 7,
  //   img: "/assets/images/products-images/image-kids-9.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Radiant Elite",
  //   original_price: 899,
  //   discounted_price: 799,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 4.6,
  //   reviews: 47,
  //   description:
  //     "These urban leather sandals embody simplicity and sophistication, with their clean lines, premium materials, and understated elegance.",
  //   trending: false,
  //   size: 10,
  //   img: "/assets/images/products-images/image-kids-10.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Ignite Pro X",
  //   original_price: 399,
  //   discounted_price: 299,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 3.3,
  //   reviews: 200,
  //   description:
  //     "These premium Oxford shoes feature a modern twist on a classic design, with urban-inspired details and impeccable craftsmanship.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-kids-11.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Luminary Evo",
  //   original_price: 999,
  //   discounted_price: 899,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 4.0,
  //   reviews: 222,
  //   description:
  //     "Combining urban aesthetics with a touch of edginess, these platform sneakers boast premium materials, unique textures, and a comfortable lift.",
  //   trending: false,
  //   size: 6,
  //   img: "/assets/images/products-images/image-kids-12.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Velocity Boost",
  //   original_price: 699,
  //   discounted_price: 599,
  //   category_name: "kid",
  //   is_stock: false,
  //   rating: 3.1,
  //   reviews: 29,
  //   description:
  //     "These urban leather loafers offer a refined and polished look, with their premium construction, sleek silhouette, and exquisite detailing.",
  //   trending: true,
  //   size: 6,
  //   img: "/assets/images/products-images/image-kids-13.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Synthesis Xcel",
  //   original_price: 999,
  //   discounted_price: 899,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 2.3,
  //   reviews: 25,
  //   description:
  //     "These sneakers push the boundaries of urban footwear with their innovative materials, geometric patterns, and avant-garde design elements.",
  //   trending: false,
  //   size: 7,
  //   img: "/assets/images/products-images/image-kids-14.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Momentum Prime",
  //   original_price: 799,
  //   discounted_price: 699,
  //   category_name: "kid",
  //   is_stock: false,
  //   rating: 1.7,
  //   reviews: 14,
  //   description:
  //     "These ankle boots feature a sleek urban silhouette, premium leather, and a statement zipper detail, adding a modern edge to any outfit.",
  //   trending: false,
  //   size: 8,
  //   img: "/assets/images/products-images/image-kids-15.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Optimum Stride",
  //   original_price: 399,
  //   discounted_price: 299,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 4.3,
  //   reviews: 144,
  //   description:
  //     "These urban sneakers combine breathable knit fabric with premium accents, offering a modern and comfortable footwear option.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-kids-16.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Empower Pro X",
  //   original_price: 999,
  //   discounted_price: 999,
  //   category_name: "kid",
  //   is_stock: false,
  //   rating: 4.2,
  //   reviews: 89,
  //   description:
  //     "These brogues feature a blend of classic charm and urban style, with their intricate perforations, luxurious leather, and urban-inspired finishes.",
  //   trending: true,
  //   size: 9,
  //   img: "/assets/images/products-images/image-kids-17.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Elite Reactor",
  //   original_price: 1299,
  //   discounted_price: 1199,
  //   category_name: "kid",
  //   is_stock: false,
  //   rating: 4.9,
  //   reviews: 398,
  //   description:
  //     "Combining athletic functionality with urban aesthetics, these sneakers offer exceptional comfort, premium materials, and stylish design elements.",
  //   trending: false,
  //   size: 6,
  //   img: "/assets/images/products-images/image-kids-18.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Catalyst Hyper",
  //   original_price: 199,
  //   discounted_price: 99,
  //   category_name: "kid",
  //   is_stock: false,
  //   rating: 4.7,
  //   reviews: 433,
  //   description:
  //     "These premium leather sneakers embody urban sophistication with their sleek design, high-quality craftsmanship, and attention to detail.",
  //   trending: true,
  //   size: 5,
  //   img: "/assets/images/products-images/image-kids-19.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Fusion Element",
  //   original_price: 79,
  //   discounted_price: 69,
  //   category_name: "kid",
  //   is_stock: true,
  //   rating: 4.4,
  //   reviews: 19,
  //   description:
  //     "These derbies embody urban sophistication with their clean lines, premium leather, and a modern twist on a timeless silhouette.",
  //   trending: false,
  //   size: 6,
  //   img: "/assets/images/products-images/image-kids-20.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Triumph Elite",
  //   original_price: 1499,
  //   discounted_price: 999,
  //   category_name: "kid",
  //   is_stock: false,
  //   rating: 4.3,
  //   reviews: 132,
  //   description:
  //     "These urban joggers combine sporty design elements with luxurious materials, creating a unique and stylish footwear option for urban explorers.",
  //   trending: false,
  //   size: 7,
  //   img: "/assets/images/products-images/image-kids-21.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Evolve Pro X",
  //   original_price: 699,
  //   discounted_price: 599,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 5.0,
  //   reviews: 132,
  //   description:
  //     "These ballet flats feature soft, premium leather, a refined urban silhouette, and a comfortable fit, offering a chic and versatile choice for urban dwellers.",
  //   trending: true,
  //   size: 7,
  //   img: "/assets/images/products-images/image-men-1.png",
  // },

  // {
  //   _id: uuid(),
  //   name: "Innovate Optima",
  //   original_price: 299,
  //   discounted_price: 199,
  //   category_name: "men",
  //   is_stock: false,
  //   rating: 4.8,
  //   reviews: 654,
  //   description:
  //     "Crafted from plush suede, these sneakers exude urban luxury with their refined silhouette, attention to detail, and superior comfort.",
  //   trending: true,
  //   size: 8,
  //   img: "/assets/images/products-images/image-men-4.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Phoenix Fusion",
  //   original_price: 499,
  //   discounted_price: 399,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 3.9,
  //   reviews: 65,
  //   description:
  //     "Designed for urban explorers, these hiking boots feature a durable construction, rugged tread, and urban-inspired accents, ensuring both style and functionality.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-men-5.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Turbo Impact",
  //   original_price: 1499,
  //   discounted_price: 999,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 3.5,
  //   reviews: 43,
  //   description:
  //     "These monk strap shoes redefine urban sophistication with their premium leather, sleek buckle closure, and contemporary silhouette.",
  //   trending: false,
  //   size: 7,
  //   img: "/assets/images/products-images/image-men-6.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Aether Ultra",
  //   original_price: 999,
  //   discounted_price: 899,
  //   category_name: "men",
  //   is_stock: false,
  //   rating: 2.5,
  //   reviews: 99,
  //   description:
  //     "These sandals combine urban style with warm-weather comfort, featuring a cushioned footbed, premium materials, and a trendy streetwear-inspired design.",
  //   trending: true,
  //   size: 5,
  //   img: "/assets/images/products-images/image-men-7.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Precision Glide",
  //   original_price: 299,
  //   discounted_price: 199,
  //   category_name: "men",
  //   is_stock: false,
  //   rating: 4.9,
  //   reviews: 1809,
  //   description:
  //     "Perfect for summer, these slip-on espadrilles showcase an urban twist with their premium materials, jute-wrapped sole, and effortless style.",
  //   trending: true,
  //   size: 6,
  //   img: "/assets/images/products-images/image-men-8.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Luminous Elite",
  //   original_price: 399,
  //   discounted_price: 299,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 4.0,
  //   reviews: 65,
  //   description:
  //     "Blurring the lines between sneakers and boots, these hybrid shoes feature a sleek urban design, premium materials, and a comfortable fit.",
  //   trending: false,
  //   size: 5,
  //   img: "/assets/images/products-images/image-men-9.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Surge Pro X",
  //   original_price: 599,
  //   discounted_price: 499,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 4.8,
  //   reviews: 78,
  //   description:
  //     "These Chelsea sneakers offer a unique blend of urban style and sporty appeal, featuring a slip-on design, premium materials, and a contemporary silhouette.",
  //   trending: false,
  //   size: 12,
  //   img: "/assets/images/products-images/image-men-10.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Quantum Evo",
  //   original_price: 1499,
  //   discounted_price: 1399,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 5.0,
  //   reviews: 45,
  //   description:
  //     "These wingtip shoes exude urban elegance with their detailed broguing, premium leather, and a modern interpretation of a classic design.",
  //   trending: false,
  //   size: 11,
  //   img: "/assets/images/products-images/image-men-11.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Momentum Boost",
  //   original_price: 799,
  //   discounted_price: 699,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 3.5,
  //   reviews: 123,
  //   description:
  //     "Combining sporty functionality with urban aesthetics, these sandals feature adjustable straps, cushioned footbeds, and a sleek design, perfect for on-the-go comfort.",
  //   trending: false,
  //   size: 10,
  //   img: "/assets/images/products-images/image-men-12.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Harmony Xcel",
  //   original_price: 1199,
  //   discounted_price: 1099,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 4.2,
  //   reviews: 987,
  //   description:
  //     "These low-top sneakers showcase a minimalist urban aesthetic with their clean lines, premium materials, and versatile color options.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-men-13.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Propel Prime",
  //   original_price: 399,
  //   discounted_price: 299,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 4.3,
  //   reviews: 654,
  //   description:
  //     "These derby boots offer a contemporary twist on a classic silhouette, combining premium leather, urban-inspired details, and a comfortable fit.",
  //   trending: false,
  //   size: 8,
  //   img: "/assets/images/products-images/image-men-14.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Dynamo Stride",
  //   original_price: 199,
  //   discounted_price: 99,
  //   category_name: "men",
  //   is_stock: false,
  //   rating: 4.3,
  //   reviews: 89,
  //   description:
  //     "These lightweight slip-on shoes feature a breathable knit upper, flexible sole, and a modern urban design, providing comfort and style for everyday wear.",
  //   trending: true,
  //   size: 9,
  //   img: "/assets/images/products-images/image-men-15.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Enigma Pro X",
  //   original_price: 1099,
  //   discounted_price: 999,
  //   category_name: "men",
  //   is_stock: false,
  //   rating: 4.6,
  //   reviews: 43,
  //   description:
  //     "These penny loafers exude urban sophistication with their polished leather, refined silhouette, and timeless style, suitable for both casual and formal occasions.",
  //   trending: true,
  //   size: 8,
  //   img: "/assets/images/products-images/image-men-16.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Zenith Reactor",
  //   original_price: 1699,
  //   discounted_price: 1599,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 4.7,
  //   reviews: 76,
  //   description:
  //     "These sneaker wedges combine urban chic with added height, featuring a concealed wedge heel, premium materials, and a fashion-forward design.",
  //   trending: true,
  //   size: 6,
  //   img: "/assets/images/products-images/image-men-17.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Catalyst Hyperion",
  //   original_price: 1699,
  //   discounted_price: 1599,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 4.8,
  //   reviews: 89,
  //   description:
  //     "Inspired by desert footwear, these sandals feature a blend of urban style and comfort, with premium materials, adjustable straps, and a cushioned footbed.",
  //   trending: false,
  //   size: 8,
  //   img: "/assets/images/products-images/image-men-18.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Fusion Prodigy",
  //   original_price: 1799,
  //   discounted_price: 1699,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 1.2,
  //   reviews: 78,
  //   description:
  //     "Blending the elegance of oxford shoes with the comfort of sneakers, these urban sneakers offer a sleek design, premium materials, and versatile styling options.",
  //   trending: true,
  //   size: 9,
  //   img: "/assets/images/products-images/image-men-19.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Vanguard Accelerate",
  //   original_price: 1899,
  //   discounted_price: 1799,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 1.6,
  //   reviews: 43,
  //   description:
  //     "These boat shoes boast an urban twist with their slip-on design, premium leather, and a non-slip sole, offering both style and functionality.",
  //   trending: false,
  //   size: 10,
  //   img: "/assets/images/products-images/image-men-20.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Nova Ignition",
  //   original_price: 1499,
  //   discounted_price: 1399,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 2.6,
  //   reviews: 54,
  //   description:
  //     "These slip-on mules offer an effortless urban style with their premium materials, backless design, and a comfortable yet sophisticated look.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-men-21.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Ascend Velocity",
  //   original_price: 1999,
  //   discounted_price: 1899,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 2.4,
  //   reviews: 9,
  //   description:
  //     "These wingtip boots combine urban edge with classic details, featuring premium leather, brogue accents, and a sturdy construction for all-day comfort.",
  //   trending: true,
  //   size: 6,
  //   img: "/assets/images/products-images/image-men-22.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Velocity Quantum",
  //   original_price: 2099,
  //   discounted_price: 1999,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 4.9,
  //   reviews: 555,
  //   description:
  //     "These sock-style sneakers redefine urban footwear with their sleek silhouette, stretch-knit fabric, and contemporary design elements.",
  //   trending: false,
  //   size: 8,
  //   img: "/assets/images/products-images/image-men-23.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Equinox Dynamo",
  //   original_price: 2199,
  //   discounted_price: 2099,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 4.8,
  //   reviews: 325,
  //   description:
  //     "These platform sneakers make a bold urban statement with their chunky sole, premium materials, and a fashion-forward design that stands out from the crowd.",
  //   trending: false,
  //   size: 5,
  //   img: "/assets/images/products-images/image-men-24.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Precision Apex",
  //   original_price: 1399,
  //   discounted_price: 1299,
  //   category_name: "men",
  //   is_stock: false,
  //   rating: 4.6,
  //   reviews: 986,
  //   description:
  //     "These slingback flats offer a modern urban twist with their sleek silhouette, premium materials, and a comfortable yet chic design that pairs well with any outfit.",
  //   trending: true,
  //   size: 5,
  //   img: "/assets/images/products-images/image-men-25.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Apex Quantum X",
  //   original_price: 1199,
  //   discounted_price: 999,
  //   category_name: "men",
  //   is_stock: false,
  //   rating: 3.2,
  //   reviews: 777,
  //   description:
  //     "These chukka boots feature urban-inspired details, such as premium leather, contrasting stitching, and a versatile design suitable for both casual and dressier occasions.",
  //   trending: false,
  //   size: 7,
  //   img: "/assets/images/products-images/image-men-26.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Quantum Velocity",
  //   original_price: 1499,
  //   discounted_price: 1399,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 3.8,
  //   reviews: 432,
  //   description:
  //     "These slip-on sandals combine urban flair with warm-weather comfort, featuring premium materials, a cushioned footbed, and a minimalist yet stylish design.",
  //   trending: true,
  //   size: 8,
  //   img: "/assets/images/products-images/image-men-27.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Elevation Dynamo X",
  //   original_price: 1099,
  //   discounted_price: 999,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 3.7,
  //   reviews: 457,
  //   description:
  //     "These wedge ankle boots elevate your urban style with their sleek silhouette, premium materials, and a comfortable wedge heel that adds height and sophistication.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-men-28.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Radiant Momentum",
  //   original_price: 999,
  //   discounted_price: 899,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 3.4,
  //   reviews: 34,
  //   description:
  //     "These sneaker booties fuse urban edge with a sporty vibe, featuring a high-top silhouette, premium materials, and bold design elements for a standout look.",
  //   trending: false,
  //   size: 10,
  //   img: "/assets/images/products-images/image-men-29.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Ignite Precision",
  //   original_price: 799,
  //   discounted_price: 599,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 5.0,
  //   reviews: 976,
  //   description:
  //     "These driving moccasins offer a refined urban style with their premium leather, comfortable fit, and a versatile design suitable for both casual and dressier occasions.",
  //   trending: false,
  //   size: 12,
  //   img: "/assets/images/products-images/image-men-30.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Luminary Synthesis",
  //   original_price: 699,
  //   discounted_price: 599,
  //   category_name: "men",
  //   is_stock: true,
  //   rating: 4.8,
  //   reviews: 322,
  //   description:
  //     "These slip-on loafers embody simplicity and urban sophistication, featuring clean lines, premium materials, and a sleek design that effortlessly elevates any outfit.",
  //   trending: false,
  //   size: 11,
  //   img: "/assets/images/products-images/image-men-31.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Velocity Momentum X",
  //   original_price: 499,
  //   discounted_price: 399,
  //   category_name: "men",
  //   is_stock: false,
  //   rating: 4.5,
  //   reviews: 56,
  //   description:
  //     "These platform sandals exude urban chic with their elevated sole, premium materials, and a trendy design that adds a fashionable touch to your summer wardrobe.",
  //   trending: false,
  //   size: 10,
  //   img: "/assets/images/products-images/image-men-32.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Synthesis Optimum",
  //   original_price: 99,
  //   discounted_price: 89,
  //   category_name: "men",
  //   is_stock: false,
  //   rating: 4.1,
  //   reviews: 345,
  //   description:
  //     "These Chelsea sneakers blend urban style with athletic elements, featuring premium leather, elastic side panels, and a sporty yet sophisticated design.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-men-33.png",
  // },

  // {
  //   _id: uuid(),
  //   name: "Optimum Elite",
  //   original_price: 599,
  //   discounted_price: 499,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.8,
  //   reviews: 1609,
  //   description:
  //     "These suede driving shoes combine urban sophistication with a touch of casual style, featuring premium suede, comfortable fit, and a versatile design.",
  //   trending: false,
  //   size: 5,
  //   img: "/assets/images/products-images/image-women-1.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Empower Catalyst",
  //   original_price: 149,
  //   discounted_price: 99,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.3,
  //   reviews: 109,
  //   description:
  //     "These high-top sneakers showcase a modern urban aesthetic with their breathable knit fabric, premium materials, and a streetwear-inspired design that stands out.",
  //   trending: false,
  //   size: 5,
  //   img: "/assets/images/products-images/image-women-2.png",
  // },

  // {
  //   _id: uuid(),
  //   name: "Catalyst Apex X",
  //   original_price: 1299,
  //   discounted_price: 1199,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.9,
  //   reviews: 65,
  //   description:
  //     "These gladiator sandals offer a bold urban look with their premium leather construction, multiple straps, and a stylish lace-up design that adds a trendy edge to your outfit.",
  //   trending: false,
  //   size: 7,
  //   img: "/assets/images/products-images/image-women-4.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Fusion Quantum",
  //   original_price: 1799,
  //   discounted_price: 1699,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.6,
  //   reviews: 765,
  //   description:
  //     "These slip-on oxfords combine urban sophistication with ease of wear, featuring premium leather, a sleek silhouette, and a convenient slip-on design for a polished yet effortless look.",
  //   trending: false,
  //   size: 8,
  //   img: "/assets/images/products-images/image-women-5.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Triumph Ignite",
  //   original_price: 1099,
  //   discounted_price: 999,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.7,
  //   reviews: 45,
  //   description:
  //     "These platform oxford shoes elevate your urban style with their chunky sole, premium materials, and a contemporary design that adds height and fashion-forward appeal.",
  //   trending: false,
  //   size: 5,
  //   img: "/assets/images/products-images/image-women-6.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Evolve Luminary",
  //   original_price: 99,
  //   discounted_price: 89,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.8,
  //   reviews: 99,
  //   description:
  //     "These suede sneaker boots blend the versatility of sneakers with the warmth and style of boots, featuring premium suede, a mid-top silhouette, and a trendy urban design.",
  //   trending: false,
  //   size: 5,
  //   img: "/assets/images/products-images/image-women-7.png",
  // },

  // {
  //   _id: uuid(),
  //   name: "Accelerate Equinox",
  //   original_price: 1499,
  //   discounted_price: 999,
  //   category_name: "women",
  //   is_stock: false,
  //   rating: 4.9,
  //   reviews: 543,
  //   description:
  //     "These moccasin sneakers combine the comfort of moccasins with the urban style of sneakers, featuring premium leather, a sporty silhouette, and a versatile design suitable for various occasions.",
  //   trending: false,
  //   size: 8,
  //   img: "/assets/images/products-images/image-women-9.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Innovate Precision X",
  //   original_price: 1599,
  //   discounted_price: 1499,
  //   category_name: "women",
  //   is_stock: false,
  //   rating: 3.0,
  //   reviews: 78,
  //   description:
  //     " These T-strap sandals showcase a modern urban aesthetic with their premium materials, adjustable straps, and a stylish design that adds a touch of sophistication to your warm-weather looks.",
  //   trending: true,
  //   size: 11,
  //   img: "/assets/images/products-images/image-women-10.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Phoenix Apex",
  //   original_price: 1399,
  //   discounted_price: 1299,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 3.3,
  //   reviews: 5,
  //   description:
  //     "These Chelsea boots exude urban coolness with their premium leather, studded accents, and a sleek silhouette that effortlessly blends style and attitude.",
  //   trending: false,
  //   size: 12,
  //   img: "/assets/images/products-images/image-women-11.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Turbo Quantum X",
  //   original_price: 1199,
  //   discounted_price: 1099,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 3.4,
  //   reviews: 11,
  //   description:
  //     "These slip-on sneaker mules offer a chic and effortless urban style with their premium materials, backless design, and a modern twist on a classic sneaker look.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-women-12.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Aether Elevation",
  //   original_price: 1099,
  //   discounted_price: 999,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.5,
  //   reviews: 22,
  //   description:
  //     "These slingback pumps elevate your urban elegance with their premium leather, sleek silhouette, and a comfortable heel height that adds sophistication to your outfits.",
  //   trending: false,
  //   size: 7,
  //   img: "/assets/images/products-images/image-women-13.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Precision Surge",
  //   original_price: 499,
  //   discounted_price: 399,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.2,
  //   reviews: 97,
  //   description:
  //     "These sneaker boots combine the ruggedness of hiking boots with the urban appeal of sneakers, featuring durable materials, a grippy outsole, and a sporty design perfect for urban adventures.",
  //   trending: false,
  //   size: 5,
  //   img: "/assets/images/products-images/image-women-14.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Luminous Momentum X",
  //   original_price: 399,
  //   discounted_price: 299,
  //   category_name: "women",
  //   is_stock: false,
  //   rating: 4.3,
  //   reviews: 245,
  //   description:
  //     "These slide sandals embody minimalist urban style with their premium leather, clean lines, and a simple yet refined design that effortlessly complements any outfit.",
  //   trending: true,
  //   size: 7,
  //   img: "/assets/images/products-images/image-women-15.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Surge Optimum",
  //   original_price: 299,
  //   discounted_price: 199,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 2.9,
  //   reviews: 43,
  //   description:
  //     "These wedge sneakers add a touch of urban glamour with their metallic accents, premium materials, and a comfortable wedge heel that adds height and style.",
  //   trending: true,
  //   size: 10,
  //   img: "/assets/images/products-images/image-women-16.png",
  // },

  // {
  //   _id: uuid(),
  //   name: "Momentum Elite",
  //   original_price: 2099,
  //   discounted_price: 1999,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 3.3,
  //   reviews: 99,
  //   description:
  //     "These moto boots exude urban edge with their rugged leather construction, buckle accents, and a sturdy design that combines style with durability.",
  //   trending: false,
  //   size: 8,
  //   img: "/assets/images/products-images/image-women-18.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Harmony Catalyst",
  //   original_price: 1499,
  //   discounted_price: 1399,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 1.4,
  //   reviews: 109,
  //   description:
  //     "These cutout booties offer a trendy urban look with their unique design, premium materials, and a modern silhouette that adds a fashionable touch to your footwear collection.",
  //   trending: false,
  //   size: 7,
  //   img: "/assets/images/products-images/image-women-19.png",
  // },

  // {
  //   _id: uuid(),
  //   name: "Enigma Nova X",
  //   original_price: 1799,
  //   discounted_price: 1899,
  //   category_name: "women",
  //   is_stock: false,
  //   rating: 4.3,
  //   reviews: 2133,
  //   description:
  //     "These Oxford flats offer a stylish urban twist with their premium materials, lace-up closure, and a sleek silhouette that adds a touch of sophistication to any outfit.",
  //   trending: false,
  //   size: 11,
  //   img: "/assets/images/products-images/image-women-22.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Zenith Ascend",
  //   original_price: 159,
  //   discounted_price: 99,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 3.5,
  //   reviews: 34,
  //   description:
  //     "These sock booties showcase a modern urban aesthetic with their stretchy knit fabric, snug fit, and a sleek design that hugs your ankles for a trendy and comfortable look.",
  //   trending: false,
  //   size: 12,
  //   img: "/assets/images/products-images/image-women-23.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Catalyst Velocity X",
  //   original_price: 199,
  //   discounted_price: 99,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 3.4,
  //   reviews: 689,
  //   description:
  //     "These tassel loafers exude urban charm with their premium leather, classic silhouette, and stylish tassel detailing, making them a versatile choice for both casual and formal occasions.",
  //   trending: true,
  //   size: 11,
  //   img: "/assets/images/products-images/image-women-24.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Fusion Equinox",
  //   original_price: 1299,
  //   discounted_price: 1199,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.0,
  //   reviews: 36,
  //   description:
  //     "These platform sandals elevate your urban style with their chunky sole, premium materials, and a trendy design that adds height and fashion-forward flair to your summer wardrobe.",
  //   trending: false,
  //   size: 10,
  //   img: "/assets/images/products-images/image-women-25.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Vanguard Precision",
  //   original_price: 1099,
  //   discounted_price: 999,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.1,
  //   reviews: 67,
  //   description:
  //     "These studded sneakers offer an edgy urban vibe with their premium materials, metallic stud accents, and a unique design that adds a rebellious touch to your footwear collection.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-women-26.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Nova Apex X",
  //   original_price: 1899,
  //   discounted_price: 1799,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.2,
  //   reviews: 67,
  //   description:
  //     "These lace-up booties combine urban chic with a touch of ruggedness, featuring premium leather, a stacked heel, and a versatile design that pairs well with various outfits.",
  //   trending: false,
  //   size: 9,
  //   img: "/assets/images/products-images/image-women-27.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Ascend Quantum",
  //   original_price: 1699,
  //   discounted_price: 1599,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.3,
  //   reviews: 109,
  //   description:
  //     "These suede espadrilles showcase a modern urban aesthetic with their premium materials, jute-wrapped sole, and a stylish design that effortlessly blends comfort and style.",
  //   trending: true,
  //   size: 6,
  //   img: "/assets/images/products-images/image-women-28.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Velocity Triumph",
  //   original_price: 899,
  //   discounted_price: 799,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 4.7,
  //   reviews: 235,
  //   description:
  //     "These chunky heel mules offer an urban flair with their premium materials, comfortable block heel, and a contemporary design that adds a trendy touch to your footwear collection.",
  //   trending: true,
  //   size: 8,
  //   img: "/assets/images/products-images/image-women-29.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Equinox Evolve",
  //   original_price: 599,
  //   discounted_price: 499,
  //   category_name: "women",
  //   is_stock: false,
  //   rating: 3.7,
  //   reviews: 543,
  //   description:
  //     "These ballet flats exude urban sophistication with their premium leather, refined silhouette, and a timeless design that complements both casual and dressier looks.",
  //   trending: true,
  //   size: 11,
  //   img: "/assets/images/products-images/image-women-30.png",
  // },
  // {
  //   _id: uuid(),
  //   name: "Precision Stellar X",
  //   original_price: 399,
  //   discounted_price: 299,
  //   category_name: "women",
  //   is_stock: true,
  //   rating: 3.5,
  //   reviews: 69,
  //   description:
  //     "These slip-on sneaker boots combine the ease of slip-on shoes with the style of boots, featuring premium materials, a mid-top silhouette, and a fashion-forward design that effortlessly elevates your urban outfits.",
  //   trending: false,
  //   size: 8,
  //   img: "/assets/images/products-images/image-women-31.png",
  // },
];
