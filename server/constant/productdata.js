const products = [
    
    { 
        id: 'product6',
        url: 'https://th.bing.com/th/id/OIP.LBMUHdY2wI_HJT08ESBT_QHaE8?pid=ImgDet&rs=1', 
        detailUrl: 'https://th.bing.com/th/id/OIP.LBMUHdY2wI_HJT08ESBT_QHaE8?pid=ImgDet&rs=1',
        title: {
            shortTitle: 'Gear Cycle',
            longTitle: 'HERCULES TOP GEAR-S27 XR2 27.5 T Mountain Cycle  (21 Gear, White)'
        }, 
        price: {
            mrp: 22000,
            cost: 14099,
            discount: '35%'
        },
        description: 'single-speed Sprint Monk Hero Cycle that comes with nylon tyres and Bontrager wheels. The HRX Rustler comes with a carrier to carry goods and has wired brakes. If you’re looking for a cycle for your little one, the Eastman BMX Limber is an ideal option.  Although most bicycles are delivered unassembled, it is easy to assemble them at home. You can purchase gear cycles online on Flipkart from brands such as Hero, Hercules',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day',
        rating: 4.5,
        reviews: 48 
    },
    { 
        id: 'product7',
        url: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/381129/01/sv03/fnd/IND/fmt/png/PUMA-Backcourt-Mid-CyberWeek-Unisex-Shoes', 
        detailUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/381129/01/sv03/fnd/IND/fmt/png/PUMA-Backcourt-Mid-CyberWeek-Unisex-Shoes',
        title: {
            shortTitle: 'Puma Shoes',
            longTitle: 'Puma Unisex-Adult Interflex Modern Running Shoe'
        }, 
        price: {
            mrp: 3999,
            cost: 2169,
            discount: '46%'
        },
        description: 'Modern style meets streetwear fashion in the INTERFLEX Modern sneaker. These runners feature a bold contemporary design with an exaggerated tongue and contrast EVA foam midsole for a striking appearance. Ground-contact EVA at the outsole adds a lightweight feel and excellent cushioning, keeping these runners comfortable, no matter where your day takes you. DETAILS  Comfortable style by PUMA details Signature PUMA design elements',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day',
        rating: 4.6,
        reviews: 54  
    },
    { 
        id: 'product8',
        url: 'https://m.media-amazon.com/images/I/611rQWZa5rL._SX679_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/611rQWZa5rL._SX679_.jpg',
        title: {
            shortTitle: 'iQOO Neo 7 Pro',
            longTitle: 'iQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 | Independent Gaming Chip | Flagship 50MP OIS Camera | AG Glass Design',
        }, 
        price: {
            mrp: 39999,
            cost: 34999,
            discount: '12%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        rating: 4.2,
        reviews: 37  
    },
    { 
        id: 'product9',
        url: 'https://m.media-amazon.com/images/I/41xQevQYfPL._SX300_SY300_QL70_FMwebp_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/41xQevQYfPL._SX300_SY300_QL70_FMwebp_.jpg',
        title: {
            shortTitle: 'HP Pavilion Laptop',
            longTitle: 'HP Pavilion Laptop, 13th Gen Intel Core i7-1360P 15.6 inch(39.6cm) FHD, 16GB RAM, 1TB SSD, Intel Iris Xe Graphics, B&O, Backlit KB, FPR (Win 11, MSO 2021, Alexa, Natural Silver, 1.75 Kg) 15-eg3036TU',
        }, 
        price: {
            mrp: 102918,
            cost: 92196,
            discount: '10%'
        },
        description: 'Processor: Intel Core i7-1360P(up to 5.0 GHz with Intel Turbo Boost Technology(2g)18 MB L3 cache, 12 cores, 16 threads)|Memory: 16 GB DDR4-3200 MHz RAM (2 x 8 GB)|Storage:1 TB PCIe NVMe M.2 SSD Operating System & Preinstalled Software: Windows 11 Home 64 Single Language – HP recommends Windows 11 Pro for business |Microsoft Office Home & Student 2021',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        rating: 4.8,
        reviews: 110  
    },
    { 
        id: 'product10',
        url: 'https://m.media-amazon.com/images/I/71TAFUAM+sL._UY679_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71TAFUAM+sL._UY679_.jpg',
        title: {
            shortTitle: 'Lymio Casual Shirt',
            longTitle: 'Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (Karrey)',
        }, 
        price: {
            mrp: 4999,
            cost: 3690,
            discount: '23%'
        },
        description: 'Men casual shirt || men shirt casual || men shirt casual stylish || men shirt casual stylish cotton',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        rating: 3.7,
        reviews: 20  
    },
    { 
        id: 'product11',
        url: 'https://m.media-amazon.com/images/I/71Q5PJ-tYbL._UY679_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71Q5PJ-tYbL._UY679_.jpg',
        title: {
            shortTitle: 'Cargo Jogger Pants',
            longTitle: 'Urban Legends 6 Pocket Relaxed and Regular Fit Cotton Cargo Jogger Pants for Men. Design for Casual and Sporty Look',
        }, 
        price: {
            mrp: 1199,
            cost: 927,
            discount: '23%'
        },
        description: 'Shop from a wide range of Cargos from Urban Legends. Perfect for your everyday use you could pair it with a stylish t-shirt or shirt to complete the look.',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        rating: 4,
        reviews: 40  
    },
    { 
        id: 'product12',
        url: 'https://m.media-amazon.com/images/I/41Tkrexre2L._SX300_SY300_QL70_FMwebp_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/41Tkrexre2L._SX300_SY300_QL70_FMwebp_.jpg',
        title: {
            shortTitle: 'boAt Rockerz 550',
            longTitle: 'boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation with Mic (Black Symphony)',
        }, 
        price: {
            mrp: 4999,
            cost: 1999,
            discount: '60%'
        },
        description: 'Playback- The mighty 500mAh battery capacity offers a superior playback time of up to 20 Hours Drivers- Its 50mm dynamic drivers help pump out immersive audio all day long, Charging Time 2.5 hours.',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        rating: 4.8,
        reviews: 330  
    },
    { 
        id: 'product13',
        url: 'https://m.media-amazon.com/images/I/51TcWGvqLZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/51TcWGvqLZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        title: {
            shortTitle: 'The Hidden Hindu',
            longTitle: 'The Hidden Hindu: Science-Fiction meets Indian mythology in a nail biting thriller set in 2020',
        }, 
        price: {
            mrp: 250,
            cost: 170,
            discount: '30%'
        },
        description: 'About the Author: Akshat Gupta is a national bestselling author, a TEDx speaker and an excelling screenwriter and dialogue writer in the Indian film industry. The Hidden Hindu series, authored by him, has sold over 1 lakh copies, with each book a national bestseller. Akshat is well known in the publishing industry, as well as in the Indian film industry, with a number of films and web-series signed on his name.',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        rating: 3.4,
        reviews: 30  
    },
    { 
        id: 'product14',
        url: 'https://m.media-amazon.com/images/I/61MPGbBpC3L._UY679_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/61MPGbBpC3L._UY679_.jpg',
        title: {
            shortTitle: 'T-Shirt',
            longTitle: 'Veirdo White Oversized Cotton Crew Neck T-Shirt with Chest Print for Men',
        }, 
        price: {
            mrp: 1199,
            cost: 399,
            discount: '67%'
        },
        description: 'Veirdo White Oversized Cotton Crew Neck T-Shirt with Chest Print for Men.',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        rating: 4.4,
        reviews: 55  
    },
    { 
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day',
        rating: 3.9,
        reviews: 60  
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more',
        rating: 3.6,
        reviews: 45  
    },
    { 
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day',
        rating: 3.5,
        reviews: 47  
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        rating: 4.6,
        reviews: 102  
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more',
        rating: 4.5,
        reviews: 48  
    },
    { 
        id: 'product15',
        url: 'https://m.media-amazon.com/images/I/81+9LRBzz6L._SX425_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/81+9LRBzz6L._SX425_.jpg',
        title: {
            shortTitle: 'Digital SLR Camera',
            longTitle: 'Sony Alpha ILCE 6100L 24.2 MP Mirrorless Digital SLR Camera with 16-50 mm Power Zoom Lens (APS-C Sensor,Fast Auto Focus,Real-time Eye AF,Real-time Tracking,4K Vlogging Camera & Tiltable Screen), Black',
        }, 
        price: {
            mrp: 75990,
            cost: 66990,
            discount: '12%'
        },
        description: 'World fastest 0.02 Sec AF speed with 425 phase detection and contrast points;24.2MP, EXMOR CMOS sensor with outstanding light sensitivity 11 FPS continuous shooting with AF/AE;180 degree tilt able touch LCD screen',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        rating: 4.5,
        reviews: 97  
    }
]
module.exports = products;