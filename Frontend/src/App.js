import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";

import RoutesWithUserChatComponent from "./pages/user/RoutesWithUserChatComponent";

import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponents";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
// protected admin components
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProdcutPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
//Scroll to top
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />

      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/* public routes */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route
            path="/product-details/:id"
            element={<ProductDetailsPage />}
          ></Route>
          <Route path="/product-list" element={<ProductListPage />}></Route>
          <Route path="/product-list/:pageNumParam" element={<ProductListPage />}></Route>
          <Route path="/product-list/category/:categoryName" element={<ProductListPage />}></Route>
          <Route path="/product-list/category/:categoryName/:pageNumParam" element={<ProductListPage />}></Route>
          <Route path="/product-list/search/:searchQuery" element={<ProductListPage />}></Route>
          <Route path="/product-list/search/:searchQuery/:pageNumParam" element={<ProductListPage />}></Route>
          <Route path="/product-list/category/:categoryName/search/:searchQuery" element={<ProductListPage />}></Route>
          <Route path="/product-list/category/:categoryName/search/:searchQuery/:pageNumParam" element={<ProductListPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="*" element="Page Not Found 404"></Route>
        </Route>

        {/*User protected routes */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />}></Route>
          <Route path="/user/my-orders" element={<UserOrdersPage />}></Route>
          <Route
            path="/user/cart-details"
            element={<UserCartDetailsPage />}
          ></Route>
          <Route
            path="/user/order-details/:id"
            element={<UserOrderDetailsPage />}
          ></Route>
        </Route>

        {/* admin protected routes */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />}></Route>
          <Route
            path="/admin/edit-user/:id"
            element={<AdminEditUserPage />}
          ></Route>
          <Route path="/admin/products" element={<AdminProductsPage />}></Route>
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          ></Route>
          <Route
            path="/admin/edit-product/:id"
            element={<AdminEditProdcutPage />}
          ></Route>
          <Route path="/admin/orders" element={<AdminOrdersPage />}></Route>
          <Route
            path="/admin/order-details/:id"
            element={<AdminOrderDetailsPage />}
          ></Route>
          <Route path="/admin/chats" element={<AdminChatsPage />}></Route>
          <Route
            path="/admin/analytics"
            element={<AdminAnalyticsPage />}
          ></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
