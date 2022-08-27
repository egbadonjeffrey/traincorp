import Navigation from "../component/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <div className={styles.navigation}>
        <Navigation />
      </div>
    </div>
  );
};

const styles = {
  navigation: `
        fixed
        bottom-0
        w-[100%]
        h-[100vp]
    `,
};

export default Layout;
