import { useStore } from 'effector-react';
import {
    $currencies,
    $currentCurrency,
    updateCurrentCurrency,
} from 'entities/Currencies/model/currenciesModel';
import Select from 'react-select';
import { Currency } from 'entities/Currencies/model/types/currency';
import cls from './CurrenciesSelect.module.scss';

export const CurrenciesSelect = () => {
    const currencies = useStore($currencies);
    const currentCurrency = useStore($currentCurrency);

    const onOptionChange = (e: { value: Currency, label: Currency['id']}) => {
        updateCurrentCurrency(e.value);
    };

    return (
        <div className={cls.CurrenciesSelect}>
            <Select
                options={currencies.map((cur) => ({ value: cur, label: cur.id }))}
                onChange={onOptionChange}
                value={{ value: currentCurrency, label: currentCurrency.id }}
            />
        </div>
    );
};
