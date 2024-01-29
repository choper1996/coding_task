import { useStore } from 'effector-react';
import { $currentCurrency } from 'entities/Currencies/model/currenciesModel';
import cls from './CurrencyDisplay.module.scss';

export const CurrencyDisplay = () => {
    const currentCurrency = useStore($currentCurrency);

    return (
        <div className={cls.CurrencyDisplay}>
            {currentCurrency.name}
        </div>
    );
};
