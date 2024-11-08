import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./components";
import {
  LandingPage,
  SignUpPage,
  PageNotFound,
  HomePage,
  AppLayOut,
  FilterResult,
  ProductDetails,
  Cart,
} from "./pages";
export const checkDefaultTheme = () => {
  //here we check if isDarkTheme true or false
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  // then if isDarkTheme is true will add class dark-theme to body , if false it will remove it
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 20,
      cacheTime: 1000 * 60 * 30,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          {/* when writing like under we dirctly go to /start not to / like in open cinema */}
          <Route index element={<Navigate replace to="start" />} />
          <Route path="start" element={<LandingPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route
            element={
              <ProtectedRoutes>
                <AppLayOut />
              </ProtectedRoutes>
            }
          >
            <Route path="homepage" element={<HomePage />} />
            <Route path="filter" element={<FilterResult />} />
            <Route path="productdetail" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12} // space between window and toaster
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 6000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "#000",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
