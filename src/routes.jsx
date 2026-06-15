import App from "./App";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";

const routes =[
    {
        path: "/", 
        Component: App, 
        children: [
            {
                index: true, 
                Component: Home
            }, 
            {
                path: "store/:currentItemID?", 
                Component: Store
            }, 
            {
                path: 'cart', 
                Component: Cart
            }
        ]
    }
]

export default routes