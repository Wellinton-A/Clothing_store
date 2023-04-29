import { Route, Routes } from "react-router-dom";

import Home from "./routes/home";
import Navigationbar from "./routes/navbar";
import SignInRoute from "./routes/signIn";
import Shop from "./routes/shop";

import './index.scss'

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigationbar />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-in" element={<SignInRoute />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;