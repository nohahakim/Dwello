import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Dwello",
  keywords: "rental, property, real estate",
  description: "Find your next rental property with Dwello",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
