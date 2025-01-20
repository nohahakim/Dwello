import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "@/context/GlobalContext";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "Dwello",
  keywords: "rental, property, real estate",
  description: "Find your next rental property with Dwello",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html suppressHydrationWarning>
          <body className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
