import App from "./App";
import Home from "./components/Home";
import Store from "./components/Store";

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
            }
        ]
    }
]

export default routes