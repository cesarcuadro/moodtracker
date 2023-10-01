import ResponsiveAppBar from "./navbar";

function Layout({ children }) {
  return (
    <div>
      <ResponsiveAppBar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
