const mongoose =require('mongoose');
const product = require('../models/productSchema');
const QRCode = require('qrcode'); 

    const seedProducts = [
    {
        "name": "Rich bake Lebanese Bread, 20cm",
        "description": "Lebanese bread perfect for wraps",
        "price": 13.95,
      
        "category": "Bakery",
        "imageUrl": "https://richbake.com/wp-content/uploads/2023/03/Lebanese-Bread-Mockup-min-1024x1024.png",
        "stock": 130,
        "sizes": [
            {
                "size": "20cm",
                "price": 13.95,
                "stock": 130
            }
        ]
    },
    {
        "name": "Rich bake Lebanese Bread, 30cm",
        "description": "Lebanese bread perfect for wraps",
        "price": 17.95,
        "category": "Bakery",
        "imageUrl": "https://richbake.com/wp-content/uploads/2023/03/Lebanese-Bread-Mockup-min-1024x1024.png",
        "stock": 90,
        "sizes": [
            {
                "size": "30cm",
                "price": 17.95,
                "stock": 90
            }
        ]
    },
    {
        "name": "Rich Bake Toast Bran, 500g",
        "description": "This chewy brown bread is perfect for your everyday sandwiches for a healthier option",
        "price": 45.45,
        "category": "Bakery",
        "imageUrl": "https://richbake.com/wp-content/uploads/2023/03/white-toast-min-1086x1536.png",
        "stock": 120,
        "sizes": [
            {
                "size": "500g",
                "price": 45.45,
                "stock": 120
            }
        ]
    },
    {
        "name": "Rich Bake High Fiber Toast, 500g",
        "description": "This toast is perfect for your everyday sandwiches for a healthier option",
        "price": 59.95,
        "category": "Bakery",
        "imageUrl": "https://gourmetegypt.com/media/catalog/product/6/2/6223003192037.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        "stock": 120,
        "sizes": [
            {
                "size": "500g",
                "price": 59.95,
                "stock": 120
            }
        ]
    },
    {
        "name": "Rich Bake Toast Bread with Cumin, 180g",
        "description": "This toast is perfect for your everyday sandwiches for a healthier option",
        "price": 47.95,
        "category": "Bakery",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223000430132.jpg",
        "stock": 120,
        "sizes": [
            {
                "size": "180g",
                "price": 47.95,
                "stock": 120
            }
        ]
    },
    {
        "name": "Rich Bake Multi Grain Bread Toast, 500g",
        "description": "brown bread contains wheat bran, wheat bran contains more protine than white flour",
        "price": 59.95,
        "category": "Bakery",
        "imageUrl": "https://richbake.com/wp-content/uploads/2023/03/multi-grain-min-1086x1536.png",
        "stock": 80,
        "sizes": [
            {
                "size": "500g",
                "price": 59.95,
                "stock": 80
            }
        ]
    },
    {
        "name": "Domty Plain Fino Bread, 4 Pieces",
        "description": "The freshness of the bread reflects in its delicious taste, this bread can be served with various foods",
        "price": 22.45,
        "category": "Bakery",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/67b1cdca142e4a60101c7efc.JPG?size=520",
        "stock": 70,
        "sizes": [
            {
                "size": "200g",
                "price": 22.45,
                "stock": 70
            }
        ]
    },
    {
        "name": "Breadway Milk Toast, 500g",
        "description": "Looking for a delicious and easy breakfast? Breadway Milk toast is high in protine, fats and fibers",
        "price": 44.95,
        "category": "Bakery",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223007290012.JPG",
        "stock": 70,
        "sizes": [
            {
                "size": "500g",
                "price": 44.95,
                "stock": 70
            }
        ]
    },
    {
        "name": "Breadway Brioche Toast, 500g",
        "description": "Made from top-quality ingredients",
        "price": 54.95,
        "category": "Bakery",
        "imageUrl": "https://gourmetegypt.com/media/catalog/product/6/2/6223007290081-.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        "stock": 110,
        "sizes": [
            {
                "size": "500g",
                "price": 54.95,
                "stock": 110
            }
        ]
    },
    {
        "name": "Breadway Multigrain Toast, 500g",
        "description": "Breadway Multigrain Toast is a real baked treat!",
        "price": 54.95,
        "category": "Bakery",
        "imageUrl": "https://gourmetegypt.com/media/catalog/product/6/2/6223007290074_na18x58e1vrqhvwf.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:7",
        "stock": 100,
        "sizes": [
            {
                "size": "500g",
                "price": 54.95,
                "stock": 100
            }
        ]
    },
    {
        "name": "Rich Bake Burger Bread, 225g",
        "description": "It is all what you need for perfect burger sandwich",
        "price": 24.95,
        "category": "Bakery",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6223000431009_225g.jpg",
        "stock": 100,
        "sizes": [
            {
                "size": "225g",
                "price": 24.95,
                "stock": 100
            }
        ]
    },
    {
        "name": "Breadway Plain Tortilla, 240g",
        "description": "Can be used to create a variety of food and snacks",
        "price": 34.95,
        "category": "Bakery",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/651476/1742809203/651476_main.jpg?im=Resize=1700",
        "stock": 95,
        "sizes": [
            {
                "size": "240g",
                "price": 34.95,
                "stock": 95
            }
        ]
    },
    {
        "name": "Rich Bake Rusk, 400g",
        "description": "Fine bread crumbs perfect for your fried or oven baked creations",
        "price": 22.95,
        "category": "Bakery",
        "imageUrl": "https://metro-website-images.s3.eu-west-1.amazonaws.com/products/AD00585.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "400g",
                "price": 22.95,
                "stock": 90
            }
        ]
    },
    {
        "name": "Rich Bake Rusk, 200g",
        "description": "Fine bread crumbs perfect for your fried or oven baked creations",
        "price": 12.95,
        "category": "Bakery",
        "imageUrl": "https://metro-website-images.s3.eu-west-1.amazonaws.com/products/AD00585.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "200g",
                "price": 12.95,
                "stock": 90
            }
        ]
    },
    {
        "name": "Rich Bake Premium pane mix, 500g",
        "description": "Best ingredients for a better pane dish",
        "price": 44.95,
        "category": "Bakery",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223000433126.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "500g",
                "price": 44.95,
                "stock": 90
            }
        ]
    },
    {
        "name": "Rich Bake Premium spicy pane mix, 170g",
        "description": "Spicy breading mix offers amazing taste",
        "price": 44.95,
        "category": "Bakery",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223000433096.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "170g",
                "price": 44.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Rich Bake Crispy Premium pane mix, 170g",
        "description": "Best ingredients for a better pane dish",
        "price": 44.95,
        "category": "Bakery",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223000433089.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "170g",
                "price": 44.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "BiscoMisr Kahk Walnut, 1kg",
        "description": "Traditional egyptain sweet perfect for festive occasions and everyday indulgence",
        "price": 355.0,
        "category": "Bakery",
        "imageUrl": "https://m.media-amazon.com/images/I/51vUmoyOcdL._AC_SX679_.jpg",
        "stock": 30,
        "sizes": [
            {
                "size": "1kg",
                "price": 355.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "BiscoMisr Kahk Date, 1kg",
        "description": "Traditional egyptain sweet with dates perfect for festive occasions and everyday indulgence",
        "price": 329.5,
        "category": "Bakery",
        "imageUrl": "https://m.media-amazon.com/images/I/51cigd91oLL._AC_SX679_.jpg",
        "stock": 30,
        "sizes": [
            {
                "size": "1kg",
                "price": 329.5,
                "stock": 30
            }
        ]
    },
    {
        "name": "Molto Magnum Mix Chocolate & Cream Croissant, 85g",
        "description": "Croissant",
        "price": 15.0,
        "category": "Bakery",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6223000497852_magnum-mix---choco.jpg",
        "stock": 30,
        "sizes": [
            {
                "size": "85g",
                "price": 15.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "Molto Magnum Mix Strawberry Cheesecake & Cream Croissant, 85g",
        "description": "Croissant",
        "price": 15.0,
        "category": "Bakery",
        "imageUrl": "https://edita.com.eg/wp-content/uploads/2023/01/Magnum-mix-straw.png",
        "stock": 60,
        "sizes": [
            {
                "size": "85g",
                "price": 15.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Molto Magnum Mix Salted Caramel & Cream Croissant, 85g",
        "description": "Croissant",
        "price": 15.0,
        "category": "Bakery",
        "imageUrl": "https://erposcar.msol.dev/focus/products/6223000497890.webp",
        "stock": 60,
        "sizes": [
            {
                "size": "85g",
                "price": 15.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Domty Cream Cheese Sandwich",
        "description": "Jumbo Sandwich",
        "price": 9.5,
        "category": "Bakery",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/6809fbe55e0c1a06eedb662d.JPG?size=520",
        "stock": 80,
        "sizes": [
            {
                "size": "85g",
                "price": 9.5,
                "stock": 80
            }
        ]
    },
    {
        "name": "Domty Creamy Roumy Sandwich",
        "description": "Jumbo Sandwich",
        "price": 9.5,
        "category": "Bakery",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/6809fbe65e0c1a06eedb662f.JPG",
        "stock": 80,
        "sizes": [
            {
                "size": "85g",
                "price": 9.5,
                "stock": 80
            }
        ]
    },
    {
        "name": "Domty Toffee Croissant, 90g",
        "description": "Croissant",
        "price": 11.95,
        "category": "Bakery",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRcX2-ymZiHgg1VxVFubJr65qA9cxPHEKhDIwNDvXe7L9j637XhlIZoAIqzFGyfmP1hE&usqp=CAU",
        "stock": 60,
        "sizes": [
            {
                "size": "90g",
                "price": 11.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Domty Spicy Jalapeno Sandwich",
        "description": "Jumbo Sandwich",
        "price": 9.5,
        "category": "Bakery",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/6809fbe95e0c1a06eedb6635.JPG",
        "stock": 80,
        "sizes": [
            {
                "size": "85g",
                "price": 9.5,
                "stock": 80
            }
        ]
    },
    {
        "name": "Domty Chocolate Sandwich",
        "description": "Jumbo Sandwich",
        "price": 9.5,
        "category": "Bakery",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/6809fbe75e0c1a06eedb6631.JPG",
        "stock": 70,
        "sizes": [
            {
                "size": "85g",
                "price": 9.5,
                "stock": 70
            }
        ]
    },
    {
        "name": "Elano Water, 1.5L",
        "description": "Pure Water",
        "price": 9.45,
        "category": "Beverages",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6225000378834.jpg",
        "stock": 120,
        "sizes": [
            {
                "size": "1.5L",
                "price": 9.45,
                "stock": 120
            }
        ]
    },
    {
        "name": "Elano Water, 600ml",
        "description": "Pure Water",
        "price": 6.25,
        "category": "Beverages",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6225000378834.jpg",
        "stock": 120,
        "sizes": [
            {
                "size": "600ml",
                "price": 6.25,
                "stock": 120
            }
        ]
    },
    {
        "name": "V7 Vitamin Lemon Mint Sparkling Drink, 300ml",
        "description": "Anti-stress & immune booster, enriched with vitamins B1 & B12",
        "price": 15.0,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6224011241106_300ml.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "300ml",
                "price": 15.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "V7 Vitamin Pina Colade Sparkling Drink, 300ml",
        "description": "Enriched with vitamins D",
        "price": 15.0,
        "category": "Beverages",
        "imageUrl": "https://cittamart.com/wp-content/uploads/2023/11/V7-Vitamin-Sparkling-Drink-Pinacolada-300-ML-1-300x300.webp",
        "stock": 90,
        "sizes": [
            {
                "size": "300ml",
                "price": 15.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "V7 Vitamin Blueberry Sparkling Drink, 300ml",
        "description": "Anti-oxidant & immune booster, enriched with vitamins B1 & B12",
        "price": 15.0,
        "category": "Beverages",
        "imageUrl": "https://gourmetegypt.com/media/catalog/product/6/2/6224011241083_vykhafr1l3vqldof.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=350&width=350&canvas=350:350",
        "stock": 90,
        "sizes": [
            {
                "size": "300ml",
                "price": 15.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "V Super Soda Lemon Lime Soda Can, 300ml",
        "description": "Super soda",
        "price": 15.0,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6224011241519d300ml.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "300ml",
                "price": 15.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "V Super Soda Diet Cola Soda Can, 300ml",
        "description": "Super soda",
        "price": 15.0,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6224011241427-300ml.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "300ml",
                "price": 15.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "V Super Soda Cola Soda Can, 300ml",
        "description": "Super soda",
        "price": 15.0,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6224011241366-300ml.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "300ml",
                "price": 15.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Spiro Spathis Soda Lemon, 330ml",
        "description": "Soda",
        "price": 11.0,
        "category": "Beverages",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/67598b9a4f3029deb25d9818.jpg?size=520",
        "stock": 50,
        "sizes": [
            {
                "size": "330ml",
                "price": 11.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Spiro Spathis Soda Pineapple, 330ml",
        "description": "Soda",
        "price": 11.0,
        "category": "Beverages",
        "imageUrl": "https://spirospathis.com/wp-content/uploads/2023/08/Pineapple-Transparent.png",
        "stock": 50,
        "sizes": [
            {
                "size": "330ml",
                "price": 11.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Spiro Spathis Soda Apple, 330ml",
        "description": "Soda",
        "price": 11.0,
        "category": "Beverages",
        "imageUrl": "https://spirospathis.com/wp-content/uploads/2023/08/Apple-Transparent.png",
        "stock": 50,
        "sizes": [
            {
                "size": "330ml",
                "price": 11.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Spiro Spathis Soda Greek Grape, 330ml",
        "description": "Soda",
        "price": 11.0,
        "category": "Beverages",
        "imageUrl": "https://spirospathis.com/wp-content/uploads/2023/08/Grape-Transparent.png",
        "stock": 50,
        "sizes": [
            {
                "size": "330ml",
                "price": 11.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Spiro Spathis Soda Mandarin, 330ml",
        "description": "Soda",
        "price": 11.0,
        "category": "Beverages",
        "imageUrl": "https://img.freepik.com/premium-psd/spiro-spathis-bottle-png-mandarine_921584-5.jpg",
        "stock": 50,
        "sizes": [
            {
                "size": "330ml",
                "price": 11.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Spiro Spathis Soda Peach, 330ml",
        "description": "Soda",
        "price": 11.0,
        "category": "Beverages",
        "imageUrl": "https://spirospathis.com/wp-content/uploads/2023/08/Peach-Transparent.png",
        "stock": 50,
        "sizes": [
            {
                "size": "330ml",
                "price": 11.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Spiro Spathis Soda Kiwi, 330ml",
        "description": "Soda",
        "price": 11.0,
        "category": "Beverages",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7z58kmMs9NHjh2F8k_AK09vDlJH5PmhxSHAZy58f8CWAqIkNzu2w3ciw2IYDIybJAVv8&usqp=CAU",
        "stock": 50,
        "sizes": [
            {
                "size": "330ml",
                "price": 11.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Double Dare Pinacolade Carbonated Drink, 250ml",
        "description": "Soda Can",
        "price": 18.75,
        "category": "Beverages",
        "imageUrl": "https://portal.elsupplier.com/backend/public/storage/products/images/6224008082262617931978.jpeg",
        "stock": 80,
        "sizes": [
            {
                "size": "250ml",
                "price": 18.75,
                "stock": 80
            }
        ]
    },
    {
        "name": "Double Dare Lemon Mint Carbonated Drink, 250ml",
        "description": "Soda Can",
        "price": 18.75,
        "category": "Beverages",
        "imageUrl": "https://portal.elsupplier.com/backend/public/storage/products/images/6224008082262617931978.jpeg",
        "stock": 80,
        "sizes": [
            {
                "size": "250ml",
                "price": 18.75,
                "stock": 80
            }
        ]
    },
    {
        "name": "Double Dare Grape Carbonated Drink, 250ml",
        "description": "Soda Can",
        "price": 18.75,
        "category": "Beverages",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/642902/1730986205/642902_main.jpg",
        "stock": 80,
        "sizes": [
            {
                "size": "250ml",
                "price": 18.75,
                "stock": 80
            }
        ]
    },
    {
        "name": "Double Dare Watermelon Carbonated Drink, 250ml",
        "description": "Soda Can",
        "price": 18.75,
        "category": "Beverages",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/672736d01beefab9db05ff0a.JPG",
        "stock": 80,
        "sizes": [
            {
                "size": "250ml",
                "price": 18.75,
                "stock": 80
            }
        ]
    },
    {
        "name": "Double Dare Mandarin Carbonated Drink, 250ml",
        "description": "Soda Can",
        "price": 18.75,
        "category": "Beverages",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/642903/1730986205/642903_main.jpg",
        "stock": 80,
        "sizes": [
            {
                "size": "250ml",
                "price": 18.75,
                "stock": 80
            }
        ]
    },
    {
        "name": "Double Dare Carbonated Sensual Pomegranate Drink, 275ml",
        "description": "Soft drink bottle",
        "price": 17.0,
        "category": "Beverages",
        "imageUrl": "https://m.media-amazon.com/images/I/31i4u2WqtIL._AC_.jpg",
        "stock": 80,
        "sizes": [
            {
                "size": "275ml",
                "price": 17.0,
                "stock": 80
            }
        ]
    },
    {
        "name": "Double Dare Carbonated Dazzling Tangerine Flavoured Drink, 275ml",
        "description": "Soft drink bottle",
        "price": 17.0,
        "category": "Beverages",
        "imageUrl": "https://m.media-amazon.com/images/I/31i4u2WqtIL._AC_.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "275ml",
                "price": 17.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Double Dare Carbonated Charming Pinacolade Flavoured Drink, 275ml",
        "description": "Soft drink bottle",
        "price": 17.0,
        "category": "Beverages",
        "imageUrl": "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchkrZuB4ij0MWHmWTusZ2j0yTVjekG_osUKVPrHYRTi9w-L0KPs2hBhit4hpKzj3Fhw0&usqp=CAU",
        "stock": 90,
        "sizes": [
            {
                "size": "275ml",
                "price": 17.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Double Dare Carbonated Lovely Lemon Flavoured Drink, 275ml",
        "description": "Soft drink bottle",
        "price": 17.0,
        "category": "Beverages",
        "imageUrl": "https://alkhan-mart.com/images/thumbs/0001827_-275-_450.jpeg",
        "stock": 90,
        "sizes": [
            {
                "size": "275ml",
                "price": 17.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Double Dare Carbonated Grape Flavoured Drink, 275ml",
        "description": "Soft drink bottle",
        "price": 17.0,
        "category": "Beverages",
        "imageUrl": "https://img.ananinja.com/media/bra-public-files/services-admin/files/57074c3b-6ec8-46c3-921a-53d01976e094?w=1920&q=75",
        "stock": 90,
        "sizes": [
            {
                "size": "275ml",
                "price": 17.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Double Dare Carbonated Lemon Mastic Malt Flavoured Drink, 275ml",
        "description": "Soft drink bottle",
        "price": 17.0,
        "category": "Beverages",
        "imageUrl": "https://gourmetegypt.com/media/catalog/product/6/2/6224008082101.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        "stock": 90,
        "sizes": [
            {
                "size": "275ml",
                "price": 17.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Red Bull Energy Drink, 250ml",
        "description": "Energy drink Special formula, Regular",
        "price": 50.0,
        "category": "Beverages",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/218919/1735050603/218919_main.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "250ml",
                "price": 50.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Red Bull Energy Drink, 250ml",
        "description": "Energy drink Special formula, Sugar free",
        "price": 50.0,
        "category": "Beverages",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/440021/1735050603/440021_main.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "250ml",
                "price": 50.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Red Bull Coconut & Berry Energy Drink, 250ml",
        "description": "Energy drink Special formula, White edition",
        "price": 50.0,
        "category": "Beverages",
        "imageUrl": "https://cheersegypt.com/wp-content/uploads/2023/11/Redbull-White.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "250ml",
                "price": 50.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Red Bull Raspberry Energy Drink, 250ml",
        "description": "Energy drink Special formula, Pink edition",
        "price": 50.0,
        "category": "Beverages",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/652006/1743931803/652006_main.jpg?im=Resize=480",
        "stock": 90,
        "sizes": [
            {
                "size": "250ml",
                "price": 50.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Red Bull Acai Berry Energy Drink, 250ml",
        "description": "Energy drink Special formula, Purple edition",
        "price": 50.0,
        "category": "Beverages",
        "imageUrl": "https://cheersegypt.com/wp-content/uploads/2023/11/Redbull-Purple.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "250ml",
                "price": 50.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Red Bull Blueberry Energy Drink, 250ml",
        "description": "Energy drink Special formula, Blue edition",
        "price": 50.0,
        "category": "Beverages",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/633142/1735050603/633142_main.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "250ml",
                "price": 50.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Red Bull Fig Apple Energy Drink, 250ml",
        "description": "Energy drink Special formula, Green edition",
        "price": 50.0,
        "category": "Beverages",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/642721/1735050603/642721_main.jpg?im=Resize=480",
        "stock": 90,
        "sizes": [
            {
                "size": "250ml",
                "price": 50.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Juhayna Classic Mango Juice, 235ml",
        "description": "Healthy juice",
        "price": 9.5,
        "category": "Beverages",
        "imageUrl": "https://m.media-amazon.com/images/I/61TXDoMVm0L._AC_SX679_.jpg",
        "stock": 70,
        "sizes": [
            {
                "size": "235ml",
                "price": 9.5,
                "stock": 70
            }
        ]
    },
    {
        "name": "Juhayna Classic Mango Juice, 1L",
        "description": "Healthy juice",
        "price": 34.0,
        "category": "Beverages",
        "imageUrl": "https://gourmetegypt.com/media/catalog/product/_/6/_6222014336133-.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=",
        "stock": 50,
        "sizes": [
            {
                "size": "1L",
                "price": 34.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Juhayna Classic Apple Juice, 235ml",
        "description": "Healthy juice",
        "price": 9.5,
        "category": "Beverages",
        "imageUrl": "https://www.juhayna.com/app/uploads/2016/11/1625749562_211_125933_classicappleen.png",
        "stock": 70,
        "sizes": [
            {
                "size": "235ml",
                "price": 9.5,
                "stock": 70
            }
        ]
    },
    {
        "name": "Juhayna Classic Apple Juice, 1L",
        "description": "Healthy juice",
        "price": 34.0,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6222014336188_3_-.jpg",
        "stock": 50,
        "sizes": [
            {
                "size": "1L",
                "price": 34.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Juhayna Classic pineapple Juice, 1L",
        "description": "Healthy juice",
        "price": 34.0,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6222014330544.jpg",
        "stock": 50,
        "sizes": [
            {
                "size": "1L",
                "price": 34.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Juhayna Classic Pineapple Juice, 235ml",
        "description": "Healthy juice",
        "price": 9.5,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6222014330544.jpg",
        "stock": 70,
        "sizes": [
            {
                "size": "235ml",
                "price": 9.5,
                "stock": 70
            }
        ]
    },
    {
        "name": "Juhayna Classic Cocktail Juice, 1L",
        "description": "Healthy juice",
        "price": 34.0,
        "category": "Beverages",
        "imageUrl": "https://m.media-amazon.com/images/I/71NYbQFYycL.__AC_SX300_SY300_QL70_ML2_.jpg",
        "stock": 50,
        "sizes": [
            {
                "size": "1L",
                "price": 34.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Juhayna Classic Cocktail Juice, 235ml",
        "description": "Healthy juice",
        "price": 9.5,
        "category": "Beverages",
        "imageUrl": "https://maxmartonline.com/images/thumbs/0010937_juhayna-cocktail-juice-235ml_510.jpeg",
        "stock": 70,
        "sizes": [
            {
                "size": "235ml",
                "price": 9.5,
                "stock": 70
            }
        ]
    },
    {
        "name": "Juhayna Classic Grape Juice, 1L",
        "description": "Healthy juice",
        "price": 34.0,
        "category": "Beverages",
        "imageUrl": "https://www.qebox.app/qebox/wp-content/themes/wolmart/assets/images/lazy.png",
        "stock": 50,
        "sizes": [
            {
                "size": "1L",
                "price": 34.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Juhayna Classic Grape Juice, 235ml",
        "description": "Healthy juice",
        "price": 9.5,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6222014330742-235ml-.jpg",
        "stock": 70,
        "sizes": [
            {
                "size": "235ml",
                "price": 9.5,
                "stock": 70
            }
        ]
    },
    {
        "name": "Juhayna Classic Mix Berries Juice, 1L",
        "description": "Healthy juice",
        "price": 34.0,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6222014330742-235ml-.jpg",
        "stock": 50,
        "sizes": [
            {
                "size": "1L",
                "price": 34.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Juhayna Classic Mix Berries Juice, 235ml",
        "description": "Healthy juice",
        "price": 9.5,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6222014330742-235ml-.jpg",
        "stock": 70,
        "sizes": [
            {
                "size": "235ml",
                "price": 9.5,
                "stock": 70
            }
        ]
    },
    {
        "name": "Juhayna Classic Guava Juice, 235ml",
        "description": "Healthy juice",
        "price": 9.5,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6222014330513-.jpg",
        "stock": 70,
        "sizes": [
            {
                "size": "235ml",
                "price": 9.5,
                "stock": 70
            }
        ]
    },
    {
        "name": "Juhayna Pure Pomegranate Juice, 235ml",
        "description": "Healthy juice",
        "price": 15.95,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6222014332814_1.jpg",
        "stock": 70,
        "sizes": [
            {
                "size": "235ml",
                "price": 15.95,
                "stock": 70
            }
        ]
    },
    {
        "name": "Juhayna Pure Pomegranate Juice, 1L",
        "description": "Healthy juice",
        "price": 57.0,
        "category": "Beverages",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6222014335655.JPG?size=520",
        "stock": 50,
        "sizes": [
            {
                "size": "1L",
                "price": 57.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Juhayna Classic Guava Juice, 1L",
        "description": "Healthy juice",
        "price": 34.0,
        "category": "Beverages",
        "imageUrl": "https://m.media-amazon.com/images/S/aplus-media/sota/458c318e-66eb-4025-955c-410a48e9ea79.__CR0,0,300,300_PT0_SX300_V1___.jpg",
        "stock": 50,
        "sizes": [
            {
                "size": "1L",
                "price": 34.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Suntop Pineapple Fruit Drink, 250ml",
        "description": "Refreshing and great taste juice",
        "price": 12.75,
        "category": "Beverages",
        "imageUrl": "https://www.qebox.app/qebox/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-30-at-11.30.47-AM.jpeg",
        "stock": 30,
        "sizes": [
            {
                "size": "250ml",
                "price": 12.75,
                "stock": 30
            }
        ]
    },
    {
        "name": "Suntop Guava Fruit Drink, 250ml",
        "description": "Refreshing and great taste juice",
        "price": 12.75,
        "category": "Beverages",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yOGuI-ij1W54BTgT44a7zIhfGVyjgwvLu9eW0kMNj1ghn-kHMeeJGUr3wsxDZHI6X7E&usqp=CAU",
        "stock": 30,
        "sizes": [
            {
                "size": "250ml",
                "price": 12.75,
                "stock": 30
            }
        ]
    },
    {
        "name": "Suntop Blackcurrant Fruit Drink, 250ml",
        "description": "Refreshing and great taste juice",
        "price": 12.75,
        "category": "Beverages",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkoR4tEIiNniIH2hpGI7H2UNy39kpZ2ykdBHyTfPyLkBW309SnT5B5WqdRalYAWcDoNto&usqp=CAU",
        "stock": 30,
        "sizes": [
            {
                "size": "250ml",
                "price": 12.75,
                "stock": 30
            }
        ]
    },
    {
        "name": "Suntop Orange Fruit Drink, 250ml",
        "description": "Refreshing and great taste juice",
        "price": 12.75,
        "category": "Beverages",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkoR4tEIiNniIH2hpGI7H2UNy39kpZ2ykdBHyTfPyLkBW309SnT5B5WqdRalYAWcDoNto&usqp=CAU",
        "stock": 30,
        "sizes": [
            {
                "size": "250ml",
                "price": 12.75,
                "stock": 30
            }
        ]
    },
    {
        "name": "Suntop Mixed Fruits Drink, 250ml",
        "description": "Refreshing and great taste juice",
        "price": 12.75,
        "category": "Beverages",
        "imageUrl": "https://www.suntop.com/wp-content/uploads/sites/4/2019/05/Suntop-250ml-MixedFruit-Leaf-UK-front-_RGB_Merged.png",
        "stock": 30,
        "sizes": [
            {
                "size": "250ml",
                "price": 12.75,
                "stock": 30
            }
        ]
    },
    {
        "name": "Suntop Pink Lemon Fruit Drink, 250ml",
        "description": "Refreshing and great taste juice",
        "price": 12.75,
        "category": "Beverages",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/645014/1733320804/645014_main.jpg",
        "stock": 30,
        "sizes": [
            {
                "size": "250ml",
                "price": 12.75,
                "stock": 30
            }
        ]
    },
    {
        "name": "Suntop Mango Fruit Drink, 250ml",
        "description": "Refreshing and great taste juice",
        "price": 12.75,
        "category": "Beverages",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6224008267034_-_250ml_2_.jpg",
        "stock": 30,
        "sizes": [
            {
                "size": "250ml",
                "price": 12.75,
                "stock": 30
            }
        ]
    },
    {
        "name": "Suntop Berry Mix Fruit Drink, 250ml",
        "description": "Refreshing and great taste juice",
        "price": 12.75,
        "category": "Beverages",
        "imageUrl": "https://cittamart.com/wp-content/uploads/2023/12/Sun-Top-Fruit-Drink-Berry-Mix-250-ML-1-700x700.webp",
        "stock": 30,
        "sizes": [
            {
                "size": "250ml",
                "price": 12.75,
                "stock": 30
            }
        ]
    },
    {
        "name": "Juhayna Greek Strawberry Yoghurt, 180g",
        "description": "Yummy twist and high protein",
        "price": 43.0,
        "category": "Dairy",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6222014353109.JPG",
        "stock": 30,
        "sizes": [
            {
                "size": "180g",
                "price": 43.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "Juhayna Greek Mixed Berries Yoghurt, 180g",
        "description": "Yummy twist and high protein",
        "price": 43.0,
        "category": "Dairy",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6222014353116.JPG",
        "stock": 30,
        "sizes": [
            {
                "size": "180g",
                "price": 43.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "Juhayna Greek Peach Yoghurt, 180g",
        "description": "Yummy twist and high protein",
        "price": 43.0,
        "category": "Dairy",
        "imageUrl": "https://cittamart.com/wp-content/uploads/2024/12/Juhayna-Greek-Yogurt-Peach-180g2.webp",
        "stock": 30,
        "sizes": [
            {
                "size": "180g",
                "price": 43.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "Juhayna Greek French Vanilla Bean Yoghurt, 180g",
        "description": "Yummy twist and high protein",
        "price": 43.0,
        "category": "Dairy",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6222014353147.JPG",
        "stock": 30,
        "sizes": [
            {
                "size": "180g",
                "price": 43.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "Juhayna Thick Cooking Cream, 200ml",
        "description": "Perfect for bechamel and cheese sauces",
        "price": 58.0,
        "category": "Dairy",
        "imageUrl": "https://gourmetegypt.com/media/catalog/product/6/2/6223000356326.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        "stock": 20,
        "sizes": [
            {
                "size": "200ml",
                "price": 58.0,
                "stock": 20
            }
        ]
    },
    {
        "name": "Juhayna Plain Yoghurt, 105g",
        "description": "Enrich your diet with smooth and creamy yoghurt",
        "price": 10.0,
        "category": "Dairy",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6223000351321d.png",
        "stock": 120,
        "sizes": [
            {
                "size": "105g",
                "price": 10.0,
                "stock": 120
            }
        ]
    },
    {
        "name": "Juhayna Whipping Cream, 200ml",
        "description": "Easy to whip",
        "price": 240.0,
        "category": "Dairy",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6223000350386-200ml.jpg",
        "stock": 20,
        "sizes": [
            {
                "size": "200ml",
                "price": 240.0,
                "stock": 20
            }
        ]
    },
    {
        "name": "Domty Feta Plus Cheese, 250g",
        "description": "Smooth consistency",
        "price": 24.44,
        "category": "Dairy",
        "imageUrl": "https://www.domty.org/uploads/products/272585_Domty-TP-Fetadetails.png",
        "stock": 20,
        "sizes": [
            {
                "size": "250g",
                "price": 24.44,
                "stock": 20
            }
        ]
    },
    {
        "name": "Domty Feta Plus Cheese, 125g",
        "description": "Smooth consistency",
        "price": 14.99,
        "category": "Dairy",
        "imageUrl": "https://www.domty.org/uploads/products/272585_Domty-TP-Fetadetails.png",
        "stock": 60,
        "sizes": [
            {
                "size": "125g",
                "price": 14.99,
                "stock": 60
            }
        ]
    },
    {
        "name": "Domty Feta Plus Cheddar, 250g",
        "description": "Smooth consistency",
        "price": 24.44,
        "category": "Dairy",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/61e911016b08e4d7501d81c8.jpg?size=520",
        "stock": 30,
        "sizes": [
            {
                "size": "250g",
                "price": 24.44,
                "stock": 30
            }
        ]
    },
    {
        "name": "Domty Feta Cheese With Pastrami, 500g",
        "description": "Smooth consistency",
        "price": 48.94,
        "category": "Dairy",
        "imageUrl": "https://erposcar.msol.dev/focus/products/6223000758878.webp",
        "stock": 30,
        "sizes": [
            {
                "size": "500g",
                "price": 48.94,
                "stock": 30
            }
        ]
    },
    {
        "name": "Domty Feta Cheese With Olives, 1kg",
        "description": "Smooth consistency",
        "price": 90.0,
        "category": "Dairy",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6223000757550-1kg-----.jpg",
        "stock": 30,
        "sizes": [
            {
                "size": "1kg",
                "price": 90.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "Domty Creamy Cheese Spread Paprika, 380g",
        "description": "Smooth consistency",
        "price": 114.95,
        "category": "Dairy",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7_ZcqZAjw8GODQTKQNkK06pwKRW8BDK_VuPBSOlLdbZjvs-e25GRMYeiutHgBxD0z9g&usqp=CAU",
        "stock": 30,
        "sizes": [
            {
                "size": "380g",
                "price": 114.95,
                "stock": 30
            }
        ]
    },
    {
        "name": "Domty Burger Cheese Spread, 220g",
        "description": "Smooth consistency",
        "price": 66.74,
        "category": "Dairy",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/6811d2f1ccf8140c804d9205.jpg?size=520",
        "stock": 30,
        "sizes": [
            {
                "size": "220g",
                "price": 66.74,
                "stock": 30
            }
        ]
    },
    {
        "name": "Juhayna Labneh Plain, 250g",
        "description": "Smooth Spread",
        "price": 99.95,
        "category": "Dairy",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/679b4ba828332cb7dafeed64.png?size=520",
        "stock": 30,
        "sizes": [
            {
                "size": "250g",
                "price": 99.95,
                "stock": 30
            }
        ]
    },
    {
        "name": "Almarai Natural Unsalted Butter, 100g",
        "description": "Spreading, cooking and baking",
        "price": 100.8,
        "category": "Dairy",
        "imageUrl": "https://gourmetegypt.com/media/catalog/product/6/2/6281007033190.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=",
        "stock": 40,
        "sizes": [
            {
                "size": "100g",
                "price": 100.8,
                "stock": 40
            }
        ]
    },
    {
        "name": "Nescafe Latte Iced Coffee, 220ml",
        "description": "Latte",
        "price": 35.0,
        "category": "Beverages",
        "imageUrl": "https://gourmetegypt.com/media/catalog/product/8/9/8992696526303.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
        "stock": 30,
        "sizes": [
            {
                "size": "220ml",
                "price": 35.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "Nescafe Spanish Latte Iced Coffee, 220ml",
        "description": "Spanish Latte",
        "price": 35.0,
        "category": "Beverages",
        "imageUrl": "https://www.nescafe.com/mena/sites/default/files/2024-08/SPANISH%20LATTE_0.png",
        "stock": 30,
        "sizes": [
            {
                "size": "220ml",
                "price": 35.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "Nescafe Cappuccino Iced Coffee, 220ml",
        "description": "Cappuccino",
        "price": 35.0,
        "category": "Beverages",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/672cc7bb75e26928dcf59111.jpg",
        "stock": 30,
        "sizes": [
            {
                "size": "220ml",
                "price": 35.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "Nescafe Mocha Iced Coffee, 220ml",
        "description": "Mocha",
        "price": 35.0,
        "category": "Beverages",
        "imageUrl": "https://media.supermart.ae/16966-large_default/nescafe-mocha-iced-coffee-on-the-go-225ml.jpg",
        "stock": 30,
        "sizes": [
            {
                "size": "220ml",
                "price": 35.0,
                "stock": 30
            }
        ]
    },
    {
        "name": "Chiclets Strawberry Chewing Gum, 10pc",
        "description": "10 Pieces",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/sys-master-root/h86/h32/49832829419550/412511_main.jpg?im=Resize=480",
        "stock": 40,
        "sizes": [
            {
                "size": "30g",
                "price": 10.0,
                "stock": 40
            }
        ]
    },
    {
        "name": "Chiclets Spearmint Chewing Gum, 10pc",
        "description": "10 Pieces",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/68050777666794a73198f6f5.jpg?size=520",
        "stock": 40,
        "sizes": [
            {
                "size": "30g",
                "price": 10.0,
                "stock": 40
            }
        ]
    },
    {
        "name": "Mimix Frulla Strawberry Stick, 28g",
        "description": "8 Pieces",
        "price": 7.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/67050a56d1cc1f1eef0e6073.jpg",
        "stock": 40,
        "sizes": [
            {
                "size": "28g",
                "price": 7.0,
                "stock": 40
            }
        ]
    },
    {
        "name": "Mimix Frulla Cherry Stick, 28g",
        "description": "8 Pieces",
        "price": 7.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/61bEqU8kAQL._AC_UF894,1000_QL80_.jpg",
        "stock": 40,
        "sizes": [
            {
                "size": "28g",
                "price": 7.0,
                "stock": 40
            }
        ]
    },
    {
        "name": "Magical Marshzone Marshmallows Mini Twist, 150g",
        "description": "Fluffy texture that melts in your mouth",
        "price": 47.75,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/51kxdDwERgL.__AC_SX300_SY300_QL70_ML2_.jpg",
        "stock": 20,
        "sizes": [
            {
                "size": "150g",
                "price": 47.75,
                "stock": 20
            }
        ]
    },
    {
        "name": "Magical Marshzone Marshmallows Mix Rolls, 150g",
        "description": "Fluffy texture that melts in your mouth",
        "price": 46.25,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/51dAvBwLX-L.__AC_SX300_SY300_QL70_ML2_.jpg",
        "stock": 20,
        "sizes": [
            {
                "size": "150g",
                "price": 46.25,
                "stock": 20
            }
        ]
    },
    {
        "name": "Magical Marshzone Marshmallows Pink & White, 150g",
        "description": "Fluffy texture that melts in your mouth",
        "price": 50.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/511Tf1JGTCL.__AC_SX300_SY300_QL70_ML2_.jpg",
        "stock": 20,
        "sizes": [
            {
                "size": "150g",
                "price": 50.0,
                "stock": 20
            }
        ]
    },
    {
        "name": "Halls Menthol Flavor Candy, 22.4g",
        "description": "Refreshing and Soothing sensation",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/sys-master-root/h31/h6f/49727356731422/592198_main.jpg?im=Resize=480",
        "stock": 90,
        "sizes": [
            {
                "size": "22.4g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Halls Cherry Flavor Candy, 22.4g",
        "description": "Refreshing and Soothing sensation",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/592196/1742110203/592196_main.jpg?im=Resize=480",
        "stock": 90,
        "sizes": [
            {
                "size": "22.4g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Bebeto Lovely Fruit Jelly, 80g",
        "description": "Delicious candies with real fruit juice",
        "price": 36.0,
        "category": "Snacks",
        "imageUrl": "https://www.dubaigrocers.com/cdn/shop/files/be-5fdce5852925d.jpg?v=1719940282&width=1000",
        "stock": 90,
        "sizes": [
            {
                "size": "80g",
                "price": 36.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Bebeto Funny Bear Candy, 80g",
        "description": "sour bite offers a sweet and sour taste",
        "price": 36.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/nv-jo/Dalal%20Taha/MCE-Asnaf%20Askaryeh/8690146658313-removebg-preview.png?size=520",
        "stock": 90,
        "sizes": [
            {
                "size": "80g",
                "price": 36.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Toffix Small Bag, 54g",
        "description": "With fruit flavor",
        "price": 8.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/67222dcd0e3365ffbc483d79.JPG?size=520",
        "stock": 90,
        "sizes": [
            {
                "size": "54g",
                "price": 8.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Freska Bar Hazelnut, 15.6g",
        "description": "Wafer bar, 1pc",
        "price": 5.0,
        "category": "Snacks",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6223000498200.jpg",
        "stock": 100,
        "sizes": [
            {
                "size": "15.6g",
                "price": 5.0,
                "stock": 100
            }
        ]
    },
    {
        "name": "Freska Choco Sticks, 18.6g",
        "description": "Chocolate Sticks, 2pc",
        "price": 5.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/676e5ff9f8fd5beef0b1397e.png?size=520",
        "stock": 100,
        "sizes": [
            {
                "size": "18.6g",
                "price": 5.0,
                "stock": 100
            }
        ]
    },
    {
        "name": "Freska Coated Sticks, 37.2g",
        "description": "Chocolate Sticks, 2pc",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://edita.com.eg/wp-content/uploads/2023/07/freska-choco-sticks-new-logo.png",
        "stock": 100,
        "sizes": [
            {
                "size": "37.2g",
                "price": 10.0,
                "stock": 100
            }
        ]
    },
    {
        "name": "Freska Block Hazelnut Cream Wafer, 25g",
        "description": "Wafer, 1pc",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://edita.com.eg/wp-content/uploads/2023/07/freska-block-hazelnut-new-logo.png",
        "stock": 100,
        "sizes": [
            {
                "size": "25g",
                "price": 10.0,
                "stock": 100
            }
        ]
    },
    {
        "name": "Cocoa Lovers Cookies Chocolate, 40g",
        "description": "Cookies & cream, 4pc",
        "price": 7.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6222001114607.JPG",
        "stock": 90,
        "sizes": [
            {
                "size": "40g",
                "price": 7.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Cocoa Lovers Cookies Cream, 40g",
        "description": "Cookies & cream, 4pc",
        "price": 7.0,
        "category": "Snacks",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6222001114775.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "40g",
                "price": 7.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Bisco Luxe Biscuit, 40g",
        "description": "Plain biscuit, 8pc",
        "price": 5.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/62fe20c61b2cd015d16b705a.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "40g",
                "price": 5.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Bisco Luxe Cocoa Biscuit, 40g",
        "description": "Cocoa biscuit, 8pc",
        "price": 4.5,
        "category": "Snacks",
        "imageUrl": "https://thetasteofegypt.com/cdn/shop/files/63d663c9863381b8de2b3dff_540x@2x.jpg?v=1720328443",
        "stock": 90,
        "sizes": [
            {
                "size": "40g",
                "price": 4.5,
                "stock": 90
            }
        ]
    },
    {
        "name": "Cocoa Lovers Biscuit with Cocoa Cream, 42g",
        "description": "Cookies & cream, 1pc",
        "price": 7.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/6683ba82d9bca3a6477db56c.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "42g",
                "price": 7.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Cocoa Lovers Vanilla Biscuit with Cocoa Cream, 42g",
        "description": "Cookies & cream, 1pc",
        "price": 7.0,
        "category": "Snacks",
        "imageUrl": "https://alhabeebmarket.com/storage/product/45104/16313.webp",
        "stock": 90,
        "sizes": [
            {
                "size": "42g",
                "price": 7.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "EL Abd Vanilla Cookies with Chocolate Chips, 85.5g",
        "description": "Cookies, 6pc",
        "price": 29.21,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/71mRz+Y3uLL._AC_SX679_.jpg",
        "stock": 40,
        "sizes": [
            {
                "size": "85.5g",
                "price": 29.21,
                "stock": 40
            }
        ]
    },
    {
        "name": "EL Abd Chocolate Cookies with Chocolate Chips, 27g",
        "description": "Cookies, 2pc",
        "price": 10.12,
        "category": "Snacks",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6224008630647-.jpg",
        "stock": 40,
        "sizes": [
            {
                "size": "27g",
                "price": 10.12,
                "stock": 40
            }
        ]
    },
    {
        "name": "Nawaem Soft Plain Biscuits, 6 Pieces",
        "description": "Cookies, 6pc",
        "price": 39.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/71FF9LbYlUL.jpg",
        "stock": 50,
        "sizes": [
            {
                "size": "200g",
                "price": 39.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Mini Katakito Wafer Biscuits Stuffed and Covered with Chocolate, 1 Piece",
        "description": "Chocolate Wafer, 1pc",
        "price": 3.5,
        "category": "Snacks",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6221030009120_65g.jpg",
        "stock": 50,
        "sizes": [
            {
                "size": "35g",
                "price": 3.5,
                "stock": 50
            }
        ]
    },
    {
        "name": "Katakito Wafer Biscuits Stuffed and Covered with Chocolate, 1 Piece",
        "description": "Chocolate Wafer, 1pc",
        "price": 26.0,
        "category": "Snacks",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6221030009120_65g.jpg",
        "stock": 50,
        "sizes": [
            {
                "size": "100g",
                "price": 26.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Blazo Wafer Rolled Filled with Hazelnut & Peanuts, 35g",
        "description": "King size",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/609589/1724666403/609589_main.jpg?im=Resize=1700",
        "stock": 50,
        "sizes": [
            {
                "size": "35g",
                "price": 10.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Blazo Wafer Rolled Filled with Strawberry Cream, 35g",
        "description": "King size",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/648671/1739358003/648671_main.jpg?im=Resize=1700",
        "stock": 50,
        "sizes": [
            {
                "size": "35g",
                "price": 10.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Freska Chocolate Coated Wafer Bar, 100g",
        "description": "Larger Size",
        "price": 5.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/sys-master-root/hee/h85/64357423808542/634464_main.jpg?im=Resize=480",
        "stock": 50,
        "sizes": [
            {
                "size": "100g",
                "price": 5.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "Freska Coated With Halawa, 100g",
        "description": "Larger Size",
        "price": 5.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/51ZsE2p9goL._AC_UF894,1000_QL80_DpWeblab_.jpg",
        "stock": 50,
        "sizes": [
            {
                "size": "100g",
                "price": 5.0,
                "stock": 50
            }
        ]
    },
    {
        "name": "HOHOS Rolled Chocolate Cake Filled with Cream and Coated with Cocoa, 40g",
        "description": "yummy Chocolate cake",
        "price": 7.45,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/676e6087f8fd5beef0b13b3d.png",
        "stock": 90,
        "sizes": [
            {
                "size": "40g",
                "price": 7.45,
                "stock": 90
            }
        ]
    },
    {
        "name": "Twinkies Vanilla Icing Cake, 41.5g",
        "description": "1pc",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/61bF-T3PZgL._AC_UF894,1000_QL80_.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "41.5g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Twinkies Chocolate Icing Cake, 41.5g",
        "description": "1pc",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/31Ae7s6np8L._AC_UF894,1000_QL80_.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "41.5g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "TODO BOMB, 50g",
        "description": "1pc",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/7192WPsYiyL._AC_UF894,1000_QL80_.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "50g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "TODO Chocolate Brownies Cake, 50g",
        "description": "Stored at 20-25c",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/61-RqC-RmiL.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "50g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "TODO Chocolate Cupcake Filled with Chocolate",
        "description": "1 pc",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/71XSrGIGN7L._AC_UF894,1000_QL80_.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "50g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "TODO Red Velvet Cupcake Filled with Cream Cheese",
        "description": "1 pc",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/676e60a7f8fd5beef0b13c94.png",
        "stock": 90,
        "sizes": [
            {
                "size": "50g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "HOHOS Mix Salted Caramel & Chocolate Rolled Cake, 50g",
        "description": "yummy cake",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/676e6009f8fd5beef0b1399a.png?size=520",
        "stock": 90,
        "sizes": [
            {
                "size": "50g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "HOHOS King Rolled Chocolate Rolled Cake with Cream, 50g",
        "description": "king size cake",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://edita.com.eg/wp-content/uploads/2024/07/Hohos-KING.png",
        "stock": 90,
        "sizes": [
            {
                "size": "50g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Twinkies DUO Cream X Strawberry Cake, 45g",
        "description": "1pc",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/652059/1743931803/652059_main.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "45g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Tiger Excellence Smoked Cheese Chips, 75g",
        "description": "Smoked cheese",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/71+9H787G7L._AC_UF894,1000_QL80_.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "75g",
                "price": 10.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Tiger Excellence Smoked Cheese Chips, 102g",
        "description": "Smoked cheese",
        "price": 15.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/71+9H787G7L._AC_UF894,1000_QL80_.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "102g",
                "price": 15.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Tiger Excellence Sea Salt & Vinegar Chips, 102g",
        "description": "Chips",
        "price": 15.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/81rb+JhZfhL._AC_UF894,1000_QL80_.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "102g",
                "price": 15.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Tiger Excellence Thai Sweet Chili Chips, 102g",
        "description": "Chips",
        "price": 15.0,
        "category": "Snacks",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6222035205715_80-90g.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "102g",
                "price": 15.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Tiger Excellence Premium Lime Coriander Chips, 102g",
        "description": "Chips",
        "price": 15.0,
        "category": "Snacks",
        "imageUrl": "https://gourmetegypt.com/media/catalog/product/6/2/6222035228240.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=",
        "stock": 60,
        "sizes": [
            {
                "size": "102g",
                "price": 15.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Flaminco Snack Mexican Blazin Hot, 35g",
        "description": "Healthy Snack",
        "price": 5.25,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224000045654.jpg?size=520",
        "stock": 60,
        "sizes": [
            {
                "size": "35g",
                "price": 5.25,
                "stock": 60
            }
        ]
    },
    {
        "name": "Flaminco Snack Tomato, 35g",
        "description": "Healthy Snack",
        "price": 5.25,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/nv-eg/Quick%2024/5%20July/6224000045074.png",
        "stock": 60,
        "sizes": [
            {
                "size": "35g",
                "price": 5.25,
                "stock": 60
            }
        ]
    },
    {
        "name": "Flaminco Snack Chili & Lemon, 35g",
        "description": "Healthy Snack",
        "price": 5.25,
        "category": "Snacks",
        "imageUrl": "https://static.wixstatic.com/media/18965a_3a8493e121d747cdb269527db114de9f~mv2.jpg/v1/fill/w_625,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/18965a_3a8493e121d747cdb269527db114de9f~mv2.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "35g",
                "price": 5.25,
                "stock": 60
            }
        ]
    },
    {
        "name": "Spuds Craft Cooked Hot Sriracha Potato Chips, 45g",
        "description": "Crunchy and delicious",
        "price": 13.0,
        "category": "Snacks",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4x2-ttlgtEzaMcWzqL-Q_PZwgtnscOzvaB0kDH8Tdp-vlOf5UbBuRGxV4Wmdpx1XxYc&usqp=CAU",
        "stock": 60,
        "sizes": [
            {
                "size": "45g",
                "price": 13.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Spuds Craft Cooked Sea Salt Potato Chips, 45g",
        "description": "Crunchy and delicious",
        "price": 13.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/64edbc498d63f86d7f14e72f.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "45g",
                "price": 13.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Spuds Craft Cooked Sour Cream & Onion Potato Chips, 45g",
        "description": "Crunchy and delicious",
        "price": 13.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223009441177.JPG?size=520",
        "stock": 60,
        "sizes": [
            {
                "size": "45g",
                "price": 13.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Spuds Craft Cooked Sweet & Chili Salsa Potato Chips, 45g",
        "description": "Crunchy and delicious",
        "price": 13.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/71Ff24YNjsL._AC_UF894,1000_QL80_.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "45g",
                "price": 13.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Spuds Craft Cooked Lime Fusion Potato Chips, 45g",
        "description": "Crunchy and delicious",
        "price": 13.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/61LnYJUSLLL.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "45g",
                "price": 13.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Balance Sweet Lemon Premium Bread Snack Protein Crackers, 75g",
        "description": "Healthy and delicious Snack",
        "price": 15.45,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/41k06qmuF9L.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "75g",
                "price": 15.45,
                "stock": 60
            }
        ]
    },
    {
        "name": "Balance Sour Cream & Onion Protein Crackers, 75g",
        "description": "Healthy and delicious Snack",
        "price": 15.45,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/61d5Gn+jR7L.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "75g",
                "price": 15.45,
                "stock": 60
            }
        ]
    },
    {
        "name": "Jaguar Sour Cream & Onion Snacks, 56g",
        "description": "Snack",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://www.qebox.app/qebox/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-25-at-3.22.32-PM.jpeg",
        "stock": 90,
        "sizes": [
            {
                "size": "56g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Jaguar Lime & Coriander Cones, 58g",
        "description": "Snack",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://f.nooncdn.com/products/pzsku/Z97E3840249F624FF3B97Z/45/_/1736940846/a6ed59a5-2d13-45a3-b858-9afe6f368e4c.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "58g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Jaguar Cheese Balls, 65g",
        "description": "Snack",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/71QMbAgPsnL.jpg",
        "stock": 90,
        "sizes": [
            {
                "size": "65g",
                "price": 10.0,
                "stock": 90
            }
        ]
    },
    {
        "name": "Flaminco Snack Seasoned Cheese, 35g",
        "description": "Healthy Snack",
        "price": 5.25,
        "category": "Snacks",
        "imageUrl": "https://static.wixstatic.com/media/18965a_9a6f3e0f25a2440ab1274688da005f3c~mv2.jpeg/v1/fill/w_480,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/18965a_9a6f3e0f25a2440ab1274688da005f3c~mv2.jpeg",
        "stock": 60,
        "sizes": [
            {
                "size": "35g",
                "price": 5.25,
                "stock": 60
            }
        ]
    },
    {
        "name": "Flaminco Snack Sweet Chili, 35g",
        "description": "Healthy Snack",
        "price": 5.25,
        "category": "Snacks",
        "imageUrl": "https://static.wixstatic.com/media/18965a_9072cd611def48a3a885ac4c25b1a243~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "35g",
                "price": 5.25,
                "stock": 60
            }
        ]
    },
    {
        "name": "Flaminco Snack Meaty Mix Grill, 35g",
        "description": "Healthy Snack",
        "price": 5.25,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224000045678.jpg?size=520",
        "stock": 60,
        "sizes": [
            {
                "size": "35g",
                "price": 5.25,
                "stock": 60
            }
        ]
    },
    {
        "name": "Jaguar Prime Sweet Cheese Snacks, 110g",
        "description": "Crunchy Snack",
        "price": 15.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/646467/1735208476/646467_main.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "110g",
                "price": 15.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Jaguar Prime Sweet Heat Premium Snacks, 63g",
        "description": "Crunchy Snack",
        "price": 10.0,
        "category": "Snacks",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dw5oinxSoe_H57QnixalMmqxOMi1Rv2gejSN7l5Ukp3Rpm8w30TKn_hEgJpJeJD6tLw&usqp=CAU",
        "stock": 60,
        "sizes": [
            {
                "size": "63g",
                "price": 10.0,
                "stock": 60
            }
        ]
    },
    {
        "name": "Big Chips Premium Parmesan Cheese & Pesto Kettle Cooked Chips, 110g",
        "description": "Crunchy Snack",
        "price": 20.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/672dc67f75e26928dcf59402.png?size=520",
        "stock": 80,
        "sizes": [
            {
                "size": "110g",
                "price": 20.0,
                "stock": 80
            }
        ]
    },
    {
        "name": "Big Chips Premium Sea Salt & Vinegar Kettle Cooked Chips, 110g",
        "description": "Crunchy Snack",
        "price": 20.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/81oRM2mN+EL._AC_UF894,1000_QL80_.jpg",
        "stock": 80,
        "sizes": [
            {
                "size": "110g",
                "price": 20.0,
                "stock": 80
            }
        ]
    },
    {
        "name": "Big Chips Premium Sour Cream Kettle Cooked Chips, 110g",
        "description": "Crunchy Snack",
        "price": 20.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/81BG37l8DhL.jpg",
        "stock": 80,
        "sizes": [
            {
                "size": "110g",
                "price": 20.0,
                "stock": 80
            }
        ]
    },
    {
        "name": "Big Chips Premium Spiced Cheese Kettle Cooked Chips, 110g",
        "description": "Crunchy Snack",
        "price": 20.0,
        "category": "Snacks",
        "imageUrl": "https://m.media-amazon.com/images/I/81BG37l8DhL.jpg",
        "stock": 80,
        "sizes": [
            {
                "size": "110g",
                "price": 20.0,
                "stock": 80
            }
        ]
    },
    {
        "name": "Balance Sweet Heat Protein Shots, 78g",
        "description": "Healthy Snack",
        "price": 20.0,
        "category": "Snacks",
        "imageUrl": "https://images.deliveryhero.io/image/product-information-management/66b9d38020dbde1610cc113a.JPG",
        "stock": 80,
        "sizes": [
            {
                "size": "78g",
                "price": 20.0,
                "stock": 80
            }
        ]
    },
    {
        "name": "Balance Sweet Corn Protein Shots, 78g",
        "description": "Healthy Snack",
        "price": 20.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/637773/1724056803/637773_main.jpg?im=Resize=400",
        "stock": 80,
        "sizes": [
            {
                "size": "78g",
                "price": 20.0,
                "stock": 80
            }
        ]
    },
    {
        "name": "Bonz Sweet Hot Chili Premium Snacks, 50g",
        "description": "Premium Snack Product",
        "price": 12.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/646761/1735824603/646761_main.jpg",
        "stock": 80,
        "sizes": [
            {
                "size": "50g",
                "price": 12.0,
                "stock": 80
            }
        ]
    },
    {
        "name": "Bonz Tangy Vinegar Premium Snacks, 50g",
        "description": "Premium Snack Product",
        "price": 12.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/646760/1735824603/646760_main.jpg",
        "stock": 80,
        "sizes": [
            {
                "size": "50g",
                "price": 12.0,
                "stock": 80
            }
        ]
    },
    {
        "name": "Bonz Glazed Cheese Premium Snacks, 50g",
        "description": "Premium Snack Product",
        "price": 12.0,
        "category": "Snacks",
        "imageUrl": "https://cdn.mafrservices.com/pim-content/EGY/media/product/646759/1735824603/646759_main.jpg?im=Resize=400",
        "stock": 80,
        "sizes": [
            {
                "size": "50g",
                "price": 12.0,
                "stock": 80
            }
        ]
    },
    {
        "name": "Flaminco Snack Sweet Peanut, 35g",
        "description": "Healthy Snack",
        "price": 5.25,
        "category": "Snacks",
        "imageUrl": "https://static.wixstatic.com/media/4d4dab_e18effad4e824aecbcbb2e6302e2d39a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        "stock": 60,
        "sizes": [
            {
                "size": "35g",
                "price": 5.25,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Banana, 1kg",
        "description": "Fresh",
        "price": 54.95,
        "category": "Fruits",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TZrxXlX3LydHMyku-OsPjspD7mC1tO3fS7Z38RhyhaRPii_s7HfJFZkyV43b3Sj6vts&usqp=CAU",
        "stock": 60,
        "sizes": [
            {
                "size": "1kg",
                "price": 54.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Italian Red Apple, 1kg",
        "description": "Fresh",
        "price": 129.95,
        "category": "Fruits",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/2/3/2394534000000.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "1kg",
                "price": 129.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Cucumber, 1kg",
        "description": "Fresh",
        "price": 24.95,
        "category": "Vegetables",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/2/3/2394050000003kg.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "1kg",
                "price": 24.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Tomato, 1kg",
        "description": "Fresh",
        "price": 21.95,
        "category": "Vegetables",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4Ys8OICBcNRGgcP3Ftz_hUUmoIoZYd2IWhzy3QQDSoz1m7a7pvbMdInW7HbzYz6hjRU&usqp=CAU",
        "stock": 60,
        "sizes": [
            {
                "size": "1kg",
                "price": 21.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Cherry Tomato, 250g",
        "description": "Fresh",
        "price": 16.95,
        "category": "Vegetables",
        "imageUrl": "https://www.freshaisle.com/cdn/shop/products/fresh-cherry-tomato-red-200-gm-exotic-vegetables-617.jpg?v=1739195244",
        "stock": 60,
        "sizes": [
            {
                "size": "250g",
                "price": 16.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Carrots, 1kg",
        "description": "Fresh",
        "price": 14.95,
        "category": "Vegetables",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/9/2/9220018000002.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "1kg",
                "price": 14.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Potato, 1kg",
        "description": "Fresh",
        "price": 18.95,
        "category": "Vegetables",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37lOW4xvwfkofT6kCESGmXV1UTtawLwVMvWx0aS7oJ9mVSPJraYmG9HH3JHl0Ow4s7Iw&usqp=CAU",
        "stock": 60,
        "sizes": [
            {
                "size": "1kg",
                "price": 18.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Mix Pepper, 500g",
        "description": "Fresh",
        "price": 39.95,
        "category": "Vegetables",
        "imageUrl": "https://taylorproduce.co.uk/wp-content/uploads/2021/03/Mixed-Peppers.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "500g",
                "price": 39.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Green Pepper, 500g",
        "description": "Fresh",
        "price": 24.95,
        "category": "Vegetables",
        "imageUrl": "https://produits.bienmanger.com/38827-0w600h600_Organic_Fresh_Green_Peppers.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "500g",
                "price": 24.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Onion, 1kg",
        "description": "Fresh",
        "price": 21.95,
        "category": "Vegetables",
        "imageUrl": "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/w/h/white_onions.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "1kg",
                "price": 21.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Lemon, 1kg",
        "description": "Fresh",
        "price": 116.95,
        "category": "Vegetables",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScT9DsXrGXtaRljvFKjx1lqxN20eh9B_IS98mmT2oLOyuPxBKrtyQc2b79pFc5-BX7A9s&usqp=CAU",
        "stock": 60,
        "sizes": [
            {
                "size": "1kg",
                "price": 116.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Garlic, 200g",
        "description": "Fresh",
        "price": 39.95,
        "category": "Vegetables",
        "imageUrl": "https://buymassry.com/images/detailed/22/fresh-garlic-removebg-preview.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "200g",
                "price": 39.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Chili Red, 250g",
        "description": "Fresh",
        "price": 21.95,
        "category": "Vegetables",
        "imageUrl": "https://buymassry.com/images/thumbnails/350/350/detailed/20/hot-chili.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "250g",
                "price": 21.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Avocado, 500g",
        "description": "Fresh",
        "price": 99.95,
        "category": "Vegetables",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1vz5w-CJ0mlRvqfqpuKJ6hounzs6VRfIlqkbec8ZOlU4OPaIp9NVjjy9sSwXb0ZwT2I&usqp=CAU",
        "stock": 60,
        "sizes": [
            {
                "size": "500g",
                "price": 99.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Ginger, 100g",
        "description": "Fresh",
        "price": 35.95,
        "category": "Vegetables",
        "imageUrl": "https://images.heb.com/is/image/HEBGrocery/prd-medium/000448930.jpg",
        "stock": 60,
        "sizes": [
            {
                "size": "100g",
                "price": 35.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Mushroom, 200g",
        "description": "Fresh",
        "price": 49.95,
        "category": "Vegetables",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS50MNbkgicdrJ9mXrJ5e8pOoJF25Yyt7V2KYL90XsYGWxUxGMNbpkXBBy79QDJ6sRLFg&usqp=CAU",
        "stock": 60,
        "sizes": [
            {
                "size": "200g",
                "price": 49.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Pineapple, 1pc",
        "description": "Fresh",
        "price": 214.95,
        "category": "Fruits",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26ylfmAHoMe-qnHpItbVbzsHSOsQlhvAxK7h-t0l0yrVMl3vn6bPH2wFRIQoNN6bkGUw&usqp=CAU",
        "stock": 60,
        "sizes": [
            {
                "size": "2kg",
                "price": 214.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Fresh Orange, 2kg",
        "description": "Fresh",
        "price": 89.95,
        "category": "Fruits",
        "imageUrl": "https://glycemic-index.net/images/rpaE64Cepa.webp",
        "stock": 60,
        "sizes": [
            {
                "size": "2kg",
                "price": 89.95,
                "stock": 60
            }
        ]
    },
    {
        "name": "Mafaza Chicken Fillet, 1kg",
        "description": "Halal",
        "price": 316.95,
        "category": "Meats and Fish",
        "imageUrl": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224000705787.JPG?size=520",
        "stock": 40,
        "sizes": [
            {
                "size": "1kg",
                "price": 316.95,
                "stock": 40
            }
        ]
    },
    {
        "name": "Mafaza Chicken Liver, 500g",
        "description": "Halal",
        "price": 109.95,
        "category": "Meats and Fish",
        "imageUrl": "https://erposcar.msol.dev/focus/products/6224000705909.webp",
        "stock": 40,
        "sizes": [
            {
                "size": "500g",
                "price": 109.95,
                "stock": 40
            }
        ]
    },
    {
        "name": "Mafaza Chicken Liver, 1kg",
        "description": "Halal",
        "price": 219.95,
        "category": "Meats and Fish",
        "imageUrl": "https://erposcar.msol.dev/focus/products/6224000705909.webp",
        "stock": 40,
        "sizes": [
            {
                "size": "1kg",
                "price": 219.95,
                "stock": 40
            }
        ]
    },
    {
        "name": "Mafaza Chicken Shish, 700g",
        "description": "Halal",
        "price": 208.95,
        "category": "Meats and Fish",
        "imageUrl": "https://erposcar.msol.dev/focus/products/6224000705800.webp",
        "stock": 40,
        "sizes": [
            {
                "size": "700g",
                "price": 208.95,
                "stock": 40
            }
        ]
    }
]


    const seedData = async () => {
      try {
        const productRow = [];
    
        for (let p of seedProducts) {
          const productData = { ...p };
          const qrData = `Product: ${p.name}, Price: ${p.price}, Description: ${p.description}`;
          productData.qrCode = await QRCode.toDataURL(qrData); // Add QR code (base64 string)
          productRow.push(productData); 
        }
    
        // Insert the products into the database
        await product.insertMany(productRow);
    
        console.log('Products seeded with data');
      } catch (err) {
        console.error('Error seeding products:', err); 
      } finally { 
        mongoose.disconnect();  // Close the connection
      }
    }; 
    
    module.exports = seedData;