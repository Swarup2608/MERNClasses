import HeroImage from './HeroImage.jpg'
import cart from './cart.png'
import menu from './menu.png'
import profile from './profile.png'
import search from './search.png'
import about from './about.jpg'
import star from './star.png'
import star_dull from './star_dull.png'
import return1 from './return1.png'
import quality from './quality.png'
import contact from './contact.jpg'
import shirt_1 from './shirt_1.jpg'
import shirt_2 from './shirt_2.jpg'
import shirt_3 from './shirt_3.jpg'
import shirt_4 from './shirt_4.jpg'
import dress_1 from './dress_1.jpg'
import kids_1 from './kids_1.jpg'
import formal_blazer from './formal_blazer.jpg'
import exchange from './exchange.png'

export const assets = {
    HeroImage,
    cart,
    menu,
    profile,
    search,
    about,
    contact,
    exchange,
    return1,
    quality,
    star,
    star_dull
}

export const products = [
    {
        "_id": 1023,
        "name": "Casual Cotton Shirt",
        "description": "Made from premium lightweight cotton, this shirt offers exceptional breathability, making it ideal for warm summer days.The soft fabric gently drapes over the body, ensuring maximum comfort without compromising on style. Its versatile design pairs effortlessly with jeans, shorts, or chinos for a relaxed yet polished look. Perfect for casual strolls, beach trips, or evening gatherings, it’s the ultimate blend of comfort and summer-ready elegance.",
        "price": 34.99,
        "category": "Men",
        "subcategory": "TopWear",
        "sizes": ["M", "L", "XL"],
        "images" : [shirt_1,shirt_2,shirt_3,shirt_4],
        "bestseller": true
    },
    {
        "_id": 1045,
        "name": "Elegant Silk Dress",
        "description": "A graceful evening gown made with premium silk.",
        "price": 149.99,
        "category": "Women",
        "subcategory": "TopWear",
        "sizes": ["S", "M", "L"],
        "images" : [dress_1],
        "bestseller": true
    },
    {
        "_id": 1102,
        "name": "Kids Denim Shorts",
        "description": "Durable denim shorts for everyday play.",
        "price": 19.99,
        "category": "Kids",
        "subcategory": "BottomWear",
        "sizes": ["XS", "S", "M"],
        "images" : [kids_1],
        "bestseller": false
    },
    {
        "_id": 1120,
        "name": "Formal Blazer",
        "description": "Tailored fit blazer suitable for office or formal events.",
        "price": 89.99,
        "category": "Men",
        "subcategory": "TopWear",
        "sizes": ["M", "L", "XL"],
        "images" : [formal_blazer],
        "bestseller": true
    },
    {
        "_id": 1155,
        "name": "Summer Floral Skirt",
        "description": "Flared skirt with a bright floral pattern for summer days.",
        "price": 39.95,
        "category": "Women",
        "subcategory": "BottomWear",
        "sizes": ["S", "M", "L"],
        "images" : ['dummy.jpg'],
        "bestseller": false
    },
    {
        "_id": 1188,
        "name": "Graphic Kids Tee",
        "description": "Fun and colorful t-shirt for kids with graphic prints.",
        "price": 14.50,
        "category": "Kids",
        "subcategory": "TopWear",
        "sizes": ["XS", "S", "M"],
        "images" : ['dummy.jpg'],
        "bestseller": true
    },
    {
        "_id": 1211,
        "name": "Women's Winter Scarf",
        "description": "Cozy scarf to keep you warm and stylish.",
        "price": 25.00,
        "category": "Women",
        "subcategory": "Accessorices",
        "sizes": ["S", "M", "L"],
        "images" : ['dummy.jpg'],
        "bestseller": false
    },
    {
        "_id": 1234,
        "name": "Classic Men's Belt",
        "description": "Leather belt with adjustable buckle for perfect fit.",
        "price": 29.95,
        "category": "Men",
        "subcategory": "Accessorices",
        "sizes": ["M", "L", "XL"],
        "images" : ['dummy.jpg'],
        "bestseller": false
    },
    {
        "_id": 1256,
        "name": "Denim Jeans",
        "description": "Slim-fit jeans with a modern cut.",
        "price": 49.99,
        "category": "Men",
        "subcategory": "BottomWear",
        "sizes": ["M", "L", "XL"],
        "images" : ['dummy.jpg'],
        "bestseller": true
    },
    {
        "_id": 1277,
        "name": "Lace Blouse",
        "description": "Stylish lace blouse perfect for formal outings.",
        "price": 59.99,
        "category": "Women",
        "subcategory": "TopWear",
        "sizes": ["S", "M", "L"],
        "images" : ['dummy.jpg'],
        "bestseller": true
    },
    {
        "_id": 1301,
        "name": "Toddler Joggers",
        "description": "Comfortable joggers for active kids.",
        "price": 22.99,
        "category": "Kids",
        "subcategory": "BottomWear",
        "sizes": ["XS", "S", "M"],
        "images" : ['dummy.jpg'],
        "bestseller": false
    },
    {
        "_id": 1322,
        "name": "Wool Beanie",
        "description": "Soft and warm beanie ideal for winter.",
        "price": 17.00,
        "category": "Men",
        "subcategory": "Accessorices",
        "sizes": ["S", "M", "L"],
        "images" : ['dummy.jpg'],
        "bestseller": false
    },
    {
        "_id": 1344,
        "name": "Boys Cotton Hoodie",
        "description": "Soft hoodie for boys with front pockets.",
        "price": 35.49,
        "category": "Kids",
        "subcategory": "TopWear",
        "sizes": ["S", "M", "L"],
        "images" : ['dummy.jpg'],
        "bestseller": true
    },
    {
        "_id": 1370,
        "name": "Embroidered Kurta",
        "description": "Traditional Indian kurta with detailed embroidery.",
        "price": 54.99,
        "category": "Men",
        "subcategory": "TopWear",
        "sizes": ["M", "L", "XL"],
        "images" : ['dummy.jpg'],
        "bestseller": false
    },
    {
        "_id": 1391,
        "name": "Sequined Party Dress",
        "description": "Glamorous dress with shimmering sequins.",
        "price": 99.99,
        "category": "Women",
        "subcategory": "TopWear",
        "sizes": ["S", "M", "L"],
        "images" : ['dummy.jpg'],
        "bestseller": true
    },
    {
        "_id": 1405,
        "name": "Baby Knit Cap",
        "description": "Soft cap for babies made from organic cotton.",
        "price": 9.99,
        "category": "Kids",
        "subcategory": "Accessorices",
        "sizes": ["XS", "S", "M"],
        "images" : ['dummy.jpg'],
        "bestseller": false
    },
    {
        "_id": 1422,
        "name": "Men’s Workout Shorts",
        "description": "Breathable and flexible for active workouts.",
        "price": 27.89,
        "category": "Men",
        "subcategory": "BottomWear",
        "sizes": ["M", "L", "XL"],
        "images" : ['dummy.jpg'],
        "bestseller": true
    },
    {
        "_id": 1443,
        "name": "Girls Ballet Skirt",
        "description": "Light and frilly skirt for dance or play.",
        "price": 23.50,
        "category": "Kids",
        "subcategory": "BottomWear",
        "sizes": ["XS", "S", "M"],
        "images" : ['dummy.jpg'],
        "bestseller": true
    },
    {
        "_id": 1466,
        "name": "Designer Handbag",
        "description": "Elegant handbag with leather finish.",
        "price": 119.99,
        "category": "Women",
        "subcategory": "Accessorices",
        "sizes": ["M", "L", "XL"],
        "images" : ['dummy.jpg'],
        "bestseller": true
    },
    {
        "_id": 1490,
        "name": "Tunic Top",
        "description": "Loose-fitting tunic for comfort and style.",
        "price": 44.90,
        "category": "Women",
        "subcategory": "TopWear",
        "sizes": ["M", "L", "XL"],
        "images" : ['dummy.jpg'],
        "bestseller": false
    }

]