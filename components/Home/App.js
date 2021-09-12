import ParentComponent from '../ParentComponent';
import styles from '../../styles/modules/App.module.scss';
// Imported Context from LanguageContext Component and used it to wrap around Parent Component
// Also gave the intial value of the context
import { Context } from '../Context/LanguageContext';

const App = () => (
    <div className={styles.container}>
        <Context.Provider value="English">
            <ParentComponent />
        </Context.Provider>
    </div>
);

export default App;
