import {
    createDomain,
    createEffect,
    createEvent,
    createStore, forward,
} from 'effector';
import { Currency } from 'entities/Currencies/model/types/currency';
import axios, { AxiosResponse } from 'axios';

export const fetchCurrencies = createEvent();
export const updateCurrentCurrency = createEvent<Currency>();

export const $currencies = createStore<Currency[]>([]);
export const $currentCurrency = createStore<Currency>({
    id: 'RUB',
    min_size: '0.01',
    name: 'Russian Ruble',
});

export const fetchCurrenciesFx = createEffect(() => {
    try {
        return axios.get('https://api.coinbase.com/v2/currencies')
            .then((res: AxiosResponse<{ data: Currency[] }>) => res.data.data);
    } catch (err) {
        throw new Error(err);
    }
});

forward({
    from: fetchCurrencies,
    to: fetchCurrenciesFx,
});

$currencies.on(fetchCurrenciesFx.doneData, (_, payload) => payload);
$currentCurrency.on(fetchCurrenciesFx.doneData, (_, payload) => payload[0]);
$currentCurrency.on(updateCurrentCurrency, (_, payload) => payload);
