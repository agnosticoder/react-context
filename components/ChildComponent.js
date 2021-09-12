import styles from '../styles/modules/ChildComponent.module.scss';
// Imported useValue hook that was created in LanguageContext.js and used here to extract (consume) the value of context
import { useValue } from './Context/LanguageContext';

const ChildComponent = () => {
    const value = useValue();

    return (
        <div>
            <h1>
                Language you have selected is:
                <span className={styles.value}>{value}</span>
            </h1>
        </div>
    );
};

export default ChildComponent;
