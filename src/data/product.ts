export const ProductData = {
    id: 1,
    details: {
        product_name: 'Nudie Extendable Sofa for 3 persons.',
        product_rating: 23,
        average_rating: 4,
        actual_price: '$169',
        discount_price: '$149',
        image: 'assets/images/img-product-details.jpg',
        features: [
            {
                name: 'Assembly',
                description: 'Carpenter Assembly'
            },
            {
                name: 'Warranty',
                description: '12 Months Warranty'
            }
        ],
        delivery_policies: [
            {
                type: 'dispatch',
                description: 'Same day dispatch'
            },
            {
                type: 'return-policy',
                description: 'Easy-30 day return policy'
            }
        ],
        colors: [
            {
                id: 1,
                color: '#dad5ab'
            },
            {
                id: 2,
                color: '#181818'
            },
            {
                id: 3,
                color: '#ffffff'
            }
        ]
    },
    related: [
        {
            id: 1,
            name: 'Bamboo fiber gobo',
            actual_price: '$169',
            discount_price: '$149',
            image: 'assets/images/img-rel1.png'
        },
        {
            id: 2,
            name: 'Pearly white gold',
            actual_price: '$169',
            discount_price: '$149',
            image: 'assets/images/img-rel2.png'
        },
        {
            id: 3,
            name: 'Oled ringlight',
            actual_price: '$169',
            discount_price: '$149',
            image: 'assets/images/img-rel3.png'
        },
        {
            id: 4,
            name: 'Bamboo fiber gobo',
            actual_price: '$169',
            discount_price: '$149',
            image: 'assets/images/img-rel4.png'
        },
        {
            id: 5,
            name: 'Pearly white gold',
            actual_price: '$169',
            discount_price: '$149',
            image: 'assets/images/img-rel5.png'
        },
        {
            id: 6,
            name: 'Oled ringlight',
            actual_price: '$169',
            discount_price: '$149',
            image: 'assets/images/img-rel6.png'
        }
    ],
    descriptions: [
        {
            id: 1,
            type: 1,
            title: 'At vero eos et accusamus et iusto odio dignissimos',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie tempor leo, sed elementum quam accumsan eu. Curabitur eget hendrerit eros,',
            image: 'assets/images/img-product-desp1.jpg',
            accomodation: {}
        },
        {
            id: 2,
            type: 2,
            title: 'At vero eos et accusamus et iusto odio dignissimos',
            image: 'assets/images/img-product-desp2.jpg',
            video: 'no-link',
            accomodation: {}
        },
        {
            id: 3,
            type: 3,
            accomodation: {
                image: 'assets/images/img-product-desp3.jpg',
                thumb: 'assets/images/img-product-desp4.jpg',
                pdf: 'no-link'
            }
        }
    ],
    reviews:{
        product_id: 1,
        product_name: 'Nudie Extendable Sofa for 3 persons.',
        count: 23,
        average_rating: 4.31,
        post: [
            {
                id: 1,
                post_title: 'Excelent',
                post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie tempor leo, sed elementum quam accumsan eu. Curabitur eget hendrerit eros, at consectetur elit. Suspendisse libero risus, pharetra sed feugiat ac, tincidunt eu sapien. Fusce molestie ipsum nec tempor tristique. Sed sed mi congue, viverra ligula nec, laoreet ligula. Quisque neque enim, faucibus quis justo mattis, viverra vehicula libero. Integer pulvinar, erat quis rhoncus maximus, eros nulla laoreet arcu, quis varius nisi ipsum vel lorem. In vehicula, mauris sed lobortis pretium, lorem nisl ornare nisi, eu fringilla turpis risus vitae mi. Aenean iaculis varius nulla malesuada lobortis. In feugiat nisi vitae auctor fermentum. Etiam malesuada tincidunt dolor et ornare. Fusce quis odio non dolor viverra aliquet. In auctor pretium tortor. Nam ultrices eget risus non laoreet.',
                user_id: 1,
                username: 'Johnatan Doe',
                post_date: 'August 28, 2016',
                user_image: 'assets/images/user.jpg',
                user_rating: 4,
                comments: []  
            },
            {
                id: 2,
                post_title: 'Excelent',
                post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie tempor leo, sed elementum quam accumsan eu. Curabitur eget hendrerit eros, at consectetur elit. Suspendisse libero risus, pharetra sed feugiat ac, tincidunt eu sapien. Fusce molestie ipsum nec tempor tristique. Sed sed mi congue, viverra ligula nec, laoreet ligula. Quisque neque enim, faucibus quis justo mattis, viverra vehicula libero. Integer pulvinar, erat quis rhoncus maximus, eros nulla laoreet arcu, quis varius nisi ipsum vel lorem. In vehicula, mauris sed lobortis pretium, lorem nisl ornare nisi, eu fringilla turpis risus vitae mi. Aenean iaculis varius nulla malesuada lobortis. In feugiat nisi vitae auctor fermentum. Etiam malesuada tincidunt dolor et ornare. Fusce quis odio non dolor viverra aliquet. In auctor pretium tortor. Nam ultrices eget risus non laoreet.',
                user_id: 2,
                username: 'Johnatan Doe',
                post_date: 'August 28, 2016',
                user_image: 'assets/images/user.jpg',
                user_rating: 3,
                comments: []  
            }
        ]
    }    
}