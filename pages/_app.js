import '../styles/styles.scss';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}

export default MyApp;
