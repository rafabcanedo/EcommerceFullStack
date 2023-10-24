import { ElementType } from "react"

export interface IInputProps {
 placeholder: string
 type: string
}

export interface ISocialProps {
 text: string
 icon: ElementType
 href: string
}

export interface ICategory {
 category: 'TECNOLOGIA' | 'LAZER' | 'OUTROS'
}

// image?: HTMLImageElement
export interface IProduct {
 id?: number
 name: string
 price: number
 description?: string
 stock?: number
 image: string
 category?: ICategory
}

export interface IProductState {
 products: IProduct[];
 offset: number;
 status: 'loading' | 'error' | 'success' | 'idle'
}

export interface IUser {
 name: string
 email: string
 password: string
 confirm_password: string
}