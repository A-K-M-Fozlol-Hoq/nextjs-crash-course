import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Meta from './Meta';
const Layout = ({children}) => {
    return (
        <>
            <Meta></Meta>
            <Nav></Nav>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header/>
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;