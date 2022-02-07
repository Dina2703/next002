import styles from "../styles/Layout.module.css";
import Meta from "./Meta";
import Nav from "./Nav";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
