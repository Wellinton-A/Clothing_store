import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./routes/home";
import Navigationbar from "./routes/navbar";
import SignInRoute from "./routes/signIn";
import Shop from "./routes/shop";
import CheckoutPage from "./routes/checkout";
import { createUserDocumentFromAuth, getCollectionAndDocument, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import { setCategories } from "./store/category/category.reducer";

import GlobalStyle, { Container } from "./style";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) =>{
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [dispatch])

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryArray = await getCollectionAndDocument()
      dispatch(setCategories(categoryArray))
    }
    getCategoryMap()
  }, [dispatch])

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