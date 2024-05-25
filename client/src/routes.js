export const routes = {
   shop: {
      path: "/shop",
      name: 'Shop'

   },
   home: {
      path: "/",
      name: "Home"
   },
   shopDetail: {
      path: "/shop/:id",
      name: "Shop Detail"
   },
   product: {
      path: "/product",
      name: "Shop Detail"
   },
   cart: {
      path: "/cart",
      name: "Shopping Cart"
   },
   thankYou: {
      path: "/thank-you",
      name: "Thank You"
   },
   contact: {
      path: "/contact-us",
      name: "Contact Us"
   },

   notFound: {
      path: '*',
      name: "Not Found"
   }

}