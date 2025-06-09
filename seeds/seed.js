const mongoose =require('mongoose');
const product = require('../models/productSchema');
const QRCode = require('qrcode'); 

    const seedProducts = [
    {
        "name": "Rich bake Lebanese Bread, 20cm",
        "description": "Lebanese bread perfect for wraps",
        "price": 13.95,
        "category": "Bakery",
        "imageUrl": "https://images.app.goo.gl/ysCuabKbPysRBuCX9",
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
        "imageUrl": "https://images.app.goo.gl/ysCuabKbPysRBuCX9",
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
        "imageUrl": "https://images.app.goo.gl/S8UXg3YfDpshoNFD6",
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
        "imageUrl": "https://images.app.goo.gl/NDF4FjyUEApg61w77",
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
        "imageUrl": "https://images.app.goo.gl/4fPJh9rAxWzpvK3h7",
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
        "imageUrl": "https://images.app.goo.gl/taRR7zcsjPiDG5oT7",
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
        "imageUrl": "https://images.app.goo.gl/UmnCHKzBAkqjVoNL8",
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
        "imageUrl": "https://images.app.goo.gl/4mruYrRG7iQWEGGy8",
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
        "imageUrl": "https://images.app.goo.gl/AjhXuSUczb7y4Xtk6",
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
        "imageUrl": "https://images.app.goo.gl/1V2gngYQnDdip5Ja7",
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
        "imageUrl": "https://images.app.goo.gl/iSAp7UHQr8nzrFSQ8",
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
        "imageUrl": "https://images.app.goo.gl/zeAMcTWRDjScWdEH8",
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
        "imageUrl": "https://images.app.goo.gl/GPSMTWyzkDqbKn7s6",
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
        "imageUrl": "https://images.app.goo.gl/GPSMTWyzkDqbKn7s6",
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
        "imageUrl": "https://images.app.goo.gl/x2gy8D97tqbCAS6q6",
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
        "imageUrl": "https://images.app.goo.gl/qrSQNrd7BSZJyAgr6",
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
        "imageUrl": "https://images.app.goo.gl/QyKBJKy3urF2caKs9",
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
        "imageUrl": "https://images.app.goo.gl/6AduUB5i9SkPt7nC7",
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
        "imageUrl": "https://images.app.goo.gl/mBQFnRDo19CnwQxk7",
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
        "imageUrl": "https://images.app.goo.gl/1UBPWkgfUxrvmfaj8",
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
        "imageUrl": "https://images.app.goo.gl/UbAosV5XK215JUiM9",
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
        "imageUrl": "https://images.app.goo.gl/K1APadVzec7ayz9MA",
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
        "imageUrl": "https://images.app.goo.gl/vA3zKqyc7Xh93skx5",
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
        "imageUrl": "https://images.app.goo.gl/UZrjgWtMHZ5J9RZr8",
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
        "imageUrl": "https://images.app.goo.gl/NyV4GYTyYPLMJPTZ8",
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
        "imageUrl": "https://images.app.goo.gl/qW5m9VVmRADoRKcq6",
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
        "imageUrl": "https://images.app.goo.gl/jRG4ewjnaPcS5tyT8",
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
        "imageUrl": "https://images.app.goo.gl/kM94Wj2B2GfSHJ2J7",
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
        "imageUrl": "https://images.app.goo.gl/kM94Wj2B2GfSHJ2J7",
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
        "imageUrl": "https://images.app.goo.gl/A93Cg21aWi698Un8A",
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
        "imageUrl": "https://images.app.goo.gl/hvbDqhTAXyCNChT96",
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
        "imageUrl": "https://images.app.goo.gl/AZajvm479ihHge7Z8",
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
        "imageUrl": "https://images.app.goo.gl/9sRLYsPPwtCAqEgx6",
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
        "imageUrl": "https://images.app.goo.gl/rJDFnZs4ZYcNvAMi6",
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
        "imageUrl": "https://images.app.goo.gl/quX1naG3Atsb6CkW8",
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
        "imageUrl": "https://images.app.goo.gl/SNjEu9zp6hPaMrgt9",
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
        "imageUrl": "https://images.app.goo.gl/p4G3U9bVVdiyWpwK7",
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
        "imageUrl": "https://images.app.goo.gl/rSQm2CWRMgHE6tFL8",
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
        "imageUrl": "https://images.app.goo.gl/xMtTcpKQS3nEaKFo8",
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
        "imageUrl": "https://images.app.goo.gl/opSS1WZrLbfFt5wi6",
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
        "imageUrl": "https://images.app.goo.gl/oXb23oFS5N1FcAGUA",
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
        "imageUrl": "https://images.app.goo.gl/tPihHV3c6nqwnf9U6",
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
        "imageUrl": "https://images.app.goo.gl/Z4mkjcEHJRsvFU5j7",
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
        "imageUrl": "https://images.app.goo.gl/RdUWfEdUT2mPDdjaA",
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
        "imageUrl": "https://images.app.goo.gl/zwUK422VyCDE3wY8A",
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
        "imageUrl": "https://images.app.goo.gl/urBotrMqepUJP4HEA",
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
        "imageUrl": "https://images.app.goo.gl/ncE3naknyQVcgbxB8",
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
        "imageUrl": "https://images.app.goo.gl/ppzBDPZXaZ2oDwVp6",
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
        "imageUrl": "https://images.app.goo.gl/FtcUHzUJVVJR3pY86",
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
        "imageUrl": "https://images.app.goo.gl/mPxYH48MDj9vhEBh9",
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
        "imageUrl": "https://images.app.goo.gl/KmXBKSoysdKA5wgs8",
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
        "imageUrl": "https://images.app.goo.gl/tcpHSPHyYoMCpbS47",
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
        "imageUrl": "https://images.app.goo.gl/QtiwR1ysb9DFdu998",
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
        "imageUrl": "https://images.app.goo.gl/GnD1y1sEW8aqTRqi8",
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
        "imageUrl": "https://images.app.goo.gl/QRyUp98NofU4VRJT6",
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
        "imageUrl": "https://images.app.goo.gl/dZjuKL2AnajYMSkk8",
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
        "imageUrl": "https://images.app.goo.gl/Ek7HwczCHRbssSqk6",
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
        "imageUrl": "https://images.app.goo.gl/tbicWaVjAwSyDfyF6",
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
        "imageUrl": "https://images.app.goo.gl/4n6NycadE3QMkVfw9",
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
        "imageUrl": "https://images.app.goo.gl/Fak9zyGDPKVgNoJZ6",
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
        "imageUrl": "https://images.app.goo.gl/8bYCFqzLSja6H2R29",
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
        "imageUrl": "https://images.app.goo.gl/97KdtzALvQky8LXx7",
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
        "imageUrl": "https://images.app.goo.gl/5gYaaXafmDkNDWxk8",
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
        "imageUrl": "https://images.app.goo.gl/cRc8xGgtsdu9JGaz7",
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
        "imageUrl": "https://images.app.goo.gl/Jm1bv8rvW4ojVWKU9",
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
        "imageUrl": "https://images.app.goo.gl/3aPqvMZpVwpomgoQ9",
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
        "imageUrl": "https://images.app.goo.gl/oxkAdXBFsjqXm1fT9",
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
        "imageUrl": "https://images.app.goo.gl/thAXy61BPHiZjzbi6",
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
        "imageUrl": "https://images.app.goo.gl/WrZTnuKFEGyY4b5R7",
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
        "imageUrl": "https://images.app.goo.gl/77yNaRhfWF5s8ZUY8",
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
        "imageUrl": "https://images.app.goo.gl/Cn6DCgLVsPLXYSA76",
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
        "imageUrl": "https://images.app.goo.gl/GEHYyPvPMpWKHqth6",
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
        "imageUrl": "https://images.app.goo.gl/RoNmcSqeJTAGQcfK6",
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
        "imageUrl": "https://images.app.goo.gl/EJhDWJhVLs7rrMpj6",
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
        "imageUrl": "https://images.app.goo.gl/HL7Xb1JkTDRi5Aoz8",
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
        "imageUrl": "https://images.app.goo.gl/YyZLDNsTQfgPguC99",
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
        "imageUrl": "https://images.app.goo.gl/5zCRCcXHixxVepDL7",
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
        "imageUrl": "https://images.app.goo.gl/F9jxbv2AcuiEtSqk9",
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
        "imageUrl": "https://images.app.goo.gl/xpb4JMxAe6fXUfP67",
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
        "imageUrl": "https://images.app.goo.gl/rKmd5XeVNh4aePd39",
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
        "imageUrl": "https://images.app.goo.gl/to7TfuaBsTXWJJdGA",
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
        "imageUrl": "https://images.app.goo.gl/9i5tCYyJu2e1PSEh6",
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
        "imageUrl": "https://images.app.goo.gl/wVS6SmeqLcKfxdwB9",
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
        "imageUrl": "https://images.app.goo.gl/pP1dBynUiDpR1SXy8",
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
        "imageUrl": "https://images.app.goo.gl/ZvHk7cFSpudiNEJs9",
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
        "imageUrl": "https://images.app.goo.gl/Va8bMKuuqRurg89V9",
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
        "imageUrl": "https://images.app.goo.gl/ncijVys82xQK2FQ97",
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
        "imageUrl": "https://images.app.goo.gl/TqRL6oHhLw1wrDtj7",
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
        "imageUrl": "https://images.app.goo.gl/CfLMJDsDGnQf2mnQ6",
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
        "imageUrl": "https://images.app.goo.gl/bc25PnXwcWXo7a2n8",
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
        "imageUrl": "https://images.app.goo.gl/KN5WaBP4mi1zhKsPA",
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
        "imageUrl": "https://images.app.goo.gl/hBdkZ4dkmYXd5xsY6",
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
        "imageUrl": "https://images.app.goo.gl/hBdkZ4dkmYXd5xsY6",
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
        "imageUrl": "https://images.app.goo.gl/iJPyE5KbmppwKmbZ9",
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
        "imageUrl": "https://images.app.goo.gl/fzB1QjiYdFm6q4QY6",
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
        "imageUrl": "https://images.app.goo.gl/pP8Z5Z6WpwYEmNFh9",
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
        "imageUrl": "https://images.app.goo.gl/fordNHomH9XeVFPx9",
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
        "imageUrl": "https://images.app.goo.gl/pDWNmrRj6to1GJhW8",
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
        "imageUrl": "https://images.app.goo.gl/nfqQ2Sgq3qfdWGtA9",
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
        "imageUrl": "https://images.app.goo.gl/DDxTVy2S2SpYQSjm9",
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
        "imageUrl": "https://images.app.goo.gl/PSgu8DSArSw8TBcL8",
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
        "imageUrl": "https://images.app.goo.gl/4CThgTQTvgcDgS1BA",
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
        "imageUrl": "https://images.app.goo.gl/kt3uSUD4XjWSjHi17",
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
        "imageUrl": "https://images.app.goo.gl/S1oixhS5dYEE1aUf7",
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
        "imageUrl": "https://images.app.goo.gl/qMEJxK6mXM7fQrZz7",
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
        "imageUrl": "https://images.app.goo.gl/W69WN9pWDb5Ax1499",
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
        "imageUrl": "https://images.app.goo.gl/ozmAnibRJYcHWzM79",
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
        "imageUrl": "https://images.app.goo.gl/PALJ8ku8uRTubQ8A7",
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
        "imageUrl": "https://images.app.goo.gl/ATkw3ajxH6VtP6DZ9",
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
        "imageUrl": "https://images.app.goo.gl/oeBC5qEjWcsMcBB2A",
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
        "imageUrl": "https://images.app.goo.gl/Lyunn5wkFpixdoJF8",
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
        "imageUrl": "https://images.app.goo.gl/6TxoRkWWVhpLsr626",
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
        "imageUrl": "https://images.app.goo.gl/GNzGM7xHESaQEpc58",
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
        "imageUrl": "https://images.app.goo.gl/APxEyhKSNNYy2ZEQ7",
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
        "imageUrl": "https://images.app.goo.gl/rteeM56C35urE9Vv7",
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
        "imageUrl": "https://images.app.goo.gl/ZQ8PdMNfwBuVyrzq5",
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
        "imageUrl": "https://images.app.goo.gl/8mf5JNYbds7dwVM76",
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
        "imageUrl": "https://images.app.goo.gl/bHSVmnBvcwixwFsN9",
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
        "imageUrl": "https://images.app.goo.gl/Fgu4xXw4hEb28goi8",
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
        "imageUrl": "https://images.app.goo.gl/oiYAcwY2nzBd2Vh6A",
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
        "imageUrl": "https://images.app.goo.gl/BMnvPJ8dyanSgfxw5",
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
        "imageUrl": "https://images.app.goo.gl/zkFcaAN3bEH3s1GE7",
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
        "imageUrl": "https://images.app.goo.gl/ECqGjvJ1xJ9BSTLMA",
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
        "imageUrl": "https://images.app.goo.gl/itvm8ggFVHZfNb4S9",
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
        "imageUrl": "https://images.app.goo.gl/76vr9Squ5kV5moUd8",
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
        "imageUrl": "https://images.app.goo.gl/3zRrMg8X6K9GhZwt6",
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
        "imageUrl": "https://images.app.goo.gl/PGDYqDS4bac6HKW46",
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
        "imageUrl": "https://images.app.goo.gl/wTfZD2efPcSbCJZp9",
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
        "imageUrl": "https://images.app.goo.gl/uNY3s3XVHDqDtX9n7",
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
        "imageUrl": "https://images.app.goo.gl/4pVk2XPmLQFKeKLy8",
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
        "imageUrl": "https://images.app.goo.gl/g5hEg9DYJHZ5KiAj8",
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
        "imageUrl": "https://images.app.goo.gl/UirmRPKPaZFUe9UD7",
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
        "imageUrl": "https://images.app.goo.gl/zrqC2tMEi2JpV6kh8",
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
        "imageUrl": "https://images.app.goo.gl/Xe9YQQy4NNT1MDhY9",
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
        "imageUrl": "https://images.app.goo.gl/jtDsSHveT6rijQUy7",
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
        "imageUrl": "https://images.app.goo.gl/7yyd9L84tTxUpsD5A",
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
        "imageUrl": "https://images.app.goo.gl/i1WwFNrYZ7UjE3vt7",
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
        "imageUrl": "https://images.app.goo.gl/T5HNztGv6aKjE1Hg7",
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
        "imageUrl": "https://images.app.goo.gl/WWq78P9CpUpUT43v5",
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
        "imageUrl": "https://images.app.goo.gl/mfk147Xxdg6yP6Je9",
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
        "imageUrl": "https://images.app.goo.gl/xTxSBEEoPGM4uzra6",
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
        "imageUrl": "https://images.app.goo.gl/X5G1KdLrvMh3zGGRA",
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
        "imageUrl": "https://images.app.goo.gl/wb2CqVDtiXB53Efq5",
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
        "imageUrl": "https://images.app.goo.gl/TeR14wWerfppg5ZcA",
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
        "imageUrl": "https://images.app.goo.gl/6616hsBTh5DiZRUX7",
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
        "imageUrl": "https://images.app.goo.gl/vUpmke4Mte5ww43t6",
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
        "imageUrl": "https://images.app.goo.gl/vUpmke4Mte5ww43t6",
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
        "imageUrl": "https://images.app.goo.gl/jevTfp5nFGD8LzAm8",
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
        "imageUrl": "https://images.app.goo.gl/NR7innXa1igZjbvDA",
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
        "imageUrl": "https://images.app.goo.gl/tV7cj12rdjjJXE5D6",
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
        "imageUrl": "https://images.app.goo.gl/UesazGarCAAa4nXt9",
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
        "imageUrl": "https://images.app.goo.gl/ZJfbXX3heyw75andA",
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
        "imageUrl": "https://images.app.goo.gl/oT36YgHCK5wH3LHh8",
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
        "imageUrl": "https://images.app.goo.gl/ggp4rpoPj4BSKyFQ7",
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
        "imageUrl": "https://images.app.goo.gl/LvKpjoaAdQRU3KVJ9",
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
        "imageUrl": "https://images.app.goo.gl/DCg3aboVDzqGq6Jy9",
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
        "imageUrl": "https://images.app.goo.gl/76rzHdzcgEiqKji7A",
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
        "imageUrl": "https://images.app.goo.gl/pY9hq3Ko7EQHu7n9A",
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
        "imageUrl": "https://images.app.goo.gl/UYmjoNnR2UdtYKNa9",
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
        "imageUrl": "https://images.app.goo.gl/F4gAESRrgf8hDacw7",
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
        "imageUrl": "https://images.app.goo.gl/dZFYp9zCLbNbTFY79",
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
        "imageUrl": "https://images.app.goo.gl/fmDu3yJ9wRy398iS8",
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
        "imageUrl": "https://images.app.goo.gl/5XzsTbJ8XUV6iPTAA",
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
        "imageUrl": "https://images.app.goo.gl/TNUmMKu2fcHZKRg26",
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
        "imageUrl": "https://images.app.goo.gl/RTKbZmQbnnzhrVhKA",
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
        "imageUrl": "https://images.app.goo.gl/piLVpdVzch1cG6uZ7",
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
        "imageUrl": "https://images.app.goo.gl/9LAdEwKsKvPqNEro6",
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
        "imageUrl": "https://images.app.goo.gl/xcG7bfdq1yj5JDqe6",
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
        "imageUrl": "https://images.app.goo.gl/aQxRxJCzEWo81ijx9",
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
        "imageUrl": "https://images.app.goo.gl/UzZu2eSfyiNqVAkT9",
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
        "imageUrl": "https://images.app.goo.gl/tYGGNeGfk26h4wvU6",
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
        "imageUrl": "https://images.app.goo.gl/Mij7gTDnxvcRvDXh8",
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
        "imageUrl": "https://images.app.goo.gl/7gTMTq3zHmz5RVVo8",
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
        "imageUrl": "https://images.app.goo.gl/hQ8BRKjvA5wo8oQW6",
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
        "imageUrl": "https://images.app.goo.gl/1XxhwaYxBgxK4RT29",
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
        "imageUrl": "https://images.app.goo.gl/XpvPgtPfopin4TaS6",
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
        "imageUrl": "https://images.app.goo.gl/SnndEyKU1WVMoe9d8",
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
        "imageUrl": "https://images.app.goo.gl/sedTQcLY9oVvMf7CA",
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
        "imageUrl": "https://images.app.goo.gl/XUggAazcTbHhW1M77",
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
        "imageUrl": "https://images.app.goo.gl/zno7ejpiEEKSJcYH8",
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
        "imageUrl": "https://images.app.goo.gl/vonxeoGNMjush59K7",
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
        "imageUrl": "https://images.app.goo.gl/uXjeTkPRs89Gi22a6",
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
        "imageUrl": "https://images.app.goo.gl/Fwkp9SZiD7q6xGh18",
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
        "imageUrl": "https://images.app.goo.gl/vXS3NYGDuU3SCzhe7",
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
        "imageUrl": "https://images.app.goo.gl/4ja4QYVtKazTMNwR9",
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
        "imageUrl": "https://images.app.goo.gl/8wc7MteMZn5ye4w89",
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
        "imageUrl": "https://images.app.goo.gl/oh2bRbjYETWiY8hR6",
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
        "imageUrl": "https://images.app.goo.gl/rHFxVMXPFS8FHKDi7",
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
        "imageUrl": "https://images.app.goo.gl/wxFcJ75mGgskKBKP6",
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
        "imageUrl": "https://images.app.goo.gl/EBc5dFm3oZdgrCe58",
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
        "imageUrl": "https://images.app.goo.gl/j5UUk7myZvhQP6vW6",
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
        "imageUrl": "https://images.app.goo.gl/9M5Ye7SyvgpC4mF89",
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
        "imageUrl": "https://images.app.goo.gl/M7TLDajdnetWVvNc7",
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
        "imageUrl": "https://images.app.goo.gl/5GBmEhGRjptc5E2t7",
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
        "imageUrl": "https://images.app.goo.gl/1dosSy7sPteaiv8T6",
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
        "imageUrl": "https://images.app.goo.gl/RqvnffZzqphfNatD9",
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
        "imageUrl": "https://images.app.goo.gl/1daWrcKREkvrDXeb9",
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
        "imageUrl": "https://images.app.goo.gl/wMd8hEcTrFFWzRGj6",
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
        "imageUrl": "https://images.app.goo.gl/wMd8hEcTrFFWzRGj6",
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
        "imageUrl": "https://images.app.goo.gl/XWbeQQhykb9XQD838",
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