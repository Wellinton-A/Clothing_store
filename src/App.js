import { Route, Routes } from "react-router-dom";

import Home from "./routes/home";
import Navigationbar from "./routes/navbar";
import SignInRoute from "./routes/signIn";
import Shop from "./routes/shop";

import CheckoutPage from "./routes/checkout";

import GlobalStyle, { Container } from "./style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Navigationbar />}>
            <Route index element={<Home />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/sign-in" element={<SignInRoute />} />
            <Route path="/checkout" element={<CheckoutPage />}/>
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;