import "@styles/globals.css";
import Nav from "@components/Nav";
export const metadata = {
  title: "promto",
  description: "discover and shre promt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div clasName="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
