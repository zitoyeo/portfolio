import { lazy, Suspense } from "react";
import { GlobalStyle } from "./globalStyles";

//Suspense를 사용하면 컴포넌트가 렌더링되기 전까지 기다릴 수 있습니다

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
