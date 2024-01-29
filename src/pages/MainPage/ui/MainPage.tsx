import Kitten from 'shared/assets/pictures/Kitten.png';
import { fetchCurrencies } from 'entities/Currencies/model/currenciesModel';
import { useEffect } from 'react';
import { CurrenciesSelect } from 'features/CurrenciesSelec/ui/CurrenciesSelect';
import { CurrencyDisplay } from 'features/CurrencyDisplay/ui/CurrencyDisplay';
import cls from './MainPage.module.scss';

const MainPage = () => {
    useEffect(() => {
        fetchCurrencies();
    }, []);

    return (
        <div className={cls.MainPage}>
            <div className={cls.header}>
                <div className={cls['text-container']}>
                    <h1>CAT</h1>

                    <p>
                        currencies
                        {' '}
                        <br />
                        academic
                        {' '}
                        <br />
                        terms
                    </p>
                </div>

                <CurrenciesSelect />

                <img className={cls.picture} src={Kitten} alt="kitten" />
            </div>

            <div className={cls.hero}>
                <CurrencyDisplay />
            </div>
        </div>
    );
};

export default MainPage;
