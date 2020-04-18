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

export interface ProductInfo {
    product_name?: string,
    product_rating?: number,
    average_rating?: number,
    actual_price?: string,
    discount_price?: string,
    features: Features[],
    delivery_policies: DeliverPolicies[], 
    colors: Color[],
    image?: string
}

export interface RelatedProducts {
    id: number,
    name: string,
    actual_price: string,
    discount_price: string,
    image: string
}

export interface Accomodation {
    image: string,
    thumb: string,
    pdf: string
}

export interface Descriptions {
    id: number,
    type: number,
    title?: string,
    content?: string,
    image?: string,
    video?: string,
    accomodation?: Accomodation 
}

export interface ProductDetails {
    id: number,
    details: ProductInfo,
    related: RelatedProducts[],
    descriptions: Descriptions[]
}