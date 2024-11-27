import logo from './logo.svg';
import './App.css';
import Main from "./Components/Main";
import Body from "./Components/Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AllNotes from "./Components/AllNotes";
import Archive from "./Components/Archive";
import {Provider} from "react-redux";
import appStore from "./Utils/appStore";

function App() {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Body/>,
            children:[
                {
                    path:"/",
                    element:<Main/>
                },
                {
                    path:"/notes",
                    element:<AllNotes/>
                },
                {
                    path:"/archive",
                    element:<Archive/>
                }
            ]
        }
    ])
  return (
    <div className="">
        <Provider store={appStore}>
            <RouterProvider  router={appRouter}/>
        </Provider>

    </div>
  );
}

export default App;
