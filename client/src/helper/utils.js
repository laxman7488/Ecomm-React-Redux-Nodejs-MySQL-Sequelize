import { routes } from "../routes"

export const utils = {
    getProductByCategory: function(products, tag) {
        return products.filter(product => product.category === tag);
    },
    getPage: function (location) {
        let page = Object.values(routes).find(item => item.path == location.pathname);
        return page ? page : {name:location.pathname.split("/").pop()};
    },
}