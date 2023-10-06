import ResponsiveAppBar from "./navbar";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div>
      <ResponsiveAppBar />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
