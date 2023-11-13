import { Dispatch } from 'react'

export type Nav_link_types = {
    title: string;
    icon: JSX.Element;
    close: Dispatch<React.SetStateAction<boolean>>;
    currentTab: string;
    setTab:Dispatch<React.SetStateAction<string>>;
}
export type Toggle_types={
    type: string;
    icon: JSX.Element;
    showBadge?: boolean;
}

export type categoryType= {
    name: string;
    quantity: number;
    icon: string;
}

export type FoodCardType = {
    id: string;
    name: string;
    imgUrl:string,
    reduction: string;
    isRecomended: boolean;
    price: number;
    reductionPrice: number;
}