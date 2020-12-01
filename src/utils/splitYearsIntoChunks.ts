import { SearchFormValues } from "../pages/home/search-form/SearchForm";

export const splitYearsIntoChunks = (values: SearchFormValues, chunkSize = 2): number[][] => {
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
