import { createSelector, createSlice } from "@reduxjs/toolkit";
import { SearchFormValues } from "../../pages/home/search-form/SearchForm";
import axios, { AxiosResponse } from 'axios';
import { maxBy, minBy } from "lodash";

export interface OHLC {
    o: number;
    h: number;
    l: number;
    c: number;
}

export interface SearchFormState {
    from?: string;
    to?: string;
    loading: boolean;
    ready: boolean
    ohlc?: OHLC[]
}

const searchSlice = createSlice({
    initialState: { loading: false, ready: false } as SearchFormState,
    name: 'search',
    reducers: {
        setLoading: (state: SearchFormState, action) => {
            state.loading = action.payload;
        },
        setData: (state: SearchFormState, action) => {
            state.ohlc = action.payload;
        },
        setReady: (state: SearchFormState) => {
            state.ready = true
        }
    }
});

const pause = (ms: number) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(null);
        }, ms);
    })
}

const splitYearsIntoChunks = (values: SearchFormValues, chunkSize = 2): number[][] => {
    const chunks = [] as number[][];
    const valuesCopy = {
        from: parseInt(values.from as string),
        to: parseInt(values.to as string)
    } as SearchFormValues;

    let currentChunk = [] as number[];
    for (let from = valuesCopy.from as number; from <= valuesCopy.to; (from as number)++) {
        if (currentChunk.length < chunkSize) {
            currentChunk.push(from);
        } else {
            chunks.push(currentChunk);
            currentChunk = [];
            currentChunk.push(from);
        }
    }

    chunks.push(currentChunk);

    return chunks;
};

export const fetchData = (values: SearchFormValues) => {
    const API_URL = process.env.ROBOGATE_API_URL as string;
    return (dispatch: (action: { payload: any; type: string; }) => void, getState: () => SearchFormState) => {
        dispatch(setLoading(true));

        const yearChunks = splitYearsIntoChunks(values);
        let ohlcArray: OHLC[] = [];

        (async () => {
            for (let i = 0; i < yearChunks.length; i++) {
                const chunk = yearChunks[i];
                const promises = await chunk.map(year => {
                    return axios.get(`${API_URL}/candles_by_year`, {
                        params: {year}
                    });
                });
                const responses = await Promise.all(promises);
                responses.forEach((response: AxiosResponse) => {
                    ohlcArray.push(...response.data.ohlc);
                });
                await pause(500);
            }

            dispatch(setData(ohlcArray));
            dispatch(setLoading(false));
            dispatch(setReady());
        })();
    }
};

const selectSelf = (state: SearchFormState) => state;
export const selectMinMax = createSelector(
    selectSelf,
    state => {
        return state.ready ? {
            min: minBy(state.ohlc, item => item.l)!.l,
            max: maxBy(state.ohlc, item => item.h)!.h
        } : null;
    }
);

export const { setData, setLoading, setReady } = searchSlice.actions;

export default searchSlice.reducer;


