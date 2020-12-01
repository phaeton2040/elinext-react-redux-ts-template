import { createSelector, createSlice } from "@reduxjs/toolkit";
import { SearchFormValues } from "../../pages/home/search-form/SearchForm";
import axios, { AxiosResponse } from 'axios';
import { maxBy, minBy } from "lodash";
import { splitYearsIntoChunks } from "../../utils/splitYearsIntoChunks";

export interface OHLC {
    o: number;
    h: number;
    l: number;
    c: number;
}

export interface OHLCState {
    loading: boolean;
    items?: OHLC[];
    error: string;
}

const searchSlice = createSlice({
    initialState: { loading: false, items: [] as OHLC[] } as OHLCState,
    name: 'ohlc',
    reducers: {
        setLoading: (state: OHLCState, action) => {
            state.loading = action.payload;
        },
        setData: (state: OHLCState, action) => {
            state.items = action.payload;
        },
        setError: (state: OHLCState, action) => {
            state.error = action.payload;
        }
    }
});

const {
    setData,
    setLoading,
    setError
} = searchSlice.actions;

export const fetchData = (values: SearchFormValues) => {
    const API_URL = process.env.ROBOGATE_API_URL as string;
    return (dispatch: (action: { payload: any; type: string; }) => void, getState: () => OHLCState) => {
        dispatch(setLoading(true));

        console.log(getState());
        const yearChunks = splitYearsIntoChunks(values);
        let ohlcArray: OHLC[] = [];

        (async () => {
            for (let i = 0; i < yearChunks.length; i++) {
                const chunk = yearChunks[i];

                try {
                    const promises = await chunk.map(year => {
                        return axios.get(`${API_URL}/candles_by_year`, {
                            params: {year}
                        });
                    });
                    const responses = await Promise.all(promises);

                    responses.forEach((response: AxiosResponse) => {
                        ohlcArray.push(...response.data.ohlc);
                    });
                } catch (err) {
                    dispatch(setLoading(false));

                    return dispatch(setError(err.response.data.error));
                }
            }

            dispatch(setData(ohlcArray));
            dispatch(setLoading(false));
        })();
    }
};

const selectSelf = (state: OHLCState) => state;
export const selectMinMax = createSelector(
    selectSelf,
    state => {
        return state.items?.length ? {
            min: minBy(state.items, item => item.l)!.l,
            max: maxBy(state.items, item => item.h)!.h
        } : null;
    }
);

export default searchSlice.reducer;


