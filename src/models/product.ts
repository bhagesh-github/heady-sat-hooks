export interface Features {
    name: string,
    description: string
}

export interface DeliverPolicies {
    type: string,
    description: string
}

export interface Color {
    id: number,
    color: string
}

export interface Details {
    product_name: string,
    product_rating: number,
    average_rating: number,
    actual_price: string,
    discount_price: string,
    features: Features[],
    delivery_policies: DeliverPolicies[], 
    colors: Color[],
    image: string
}

export interface RelatedProducts {
    id: number,
    name: string,
    actual_price: string,
    discount_price: string,
    image: string
}