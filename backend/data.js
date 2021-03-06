import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Kacper',
            email: 'kacper@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Diet 2500kcal',
            category: 'Diet',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Diet 2000kcal',
            category: 'Diet',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Diet 3000kcal',
            category: 'Diet',
            image: '/images/p3.jpg',
            price: 100,
            countInStock: 20,
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Diet 4000kcal',
            category: 'Diet',
            image: '/images/p4.jpg',
            price: 100,
            countInStock: 20,
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Diet 4500kcal',
            category: 'Diet',
            image: '/images/p5.jpg',
            price: 100,
            countInStock: 20,
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Diet 5000kcal',
            category: 'Diet',
            image: '/images/p6.jpg',
            price: 100,
            countInStock: 20,
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
    ],
};
export default data;
