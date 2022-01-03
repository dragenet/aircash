import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const resolvePathRelativeToFile = (path) => resolve(dirname(fileURLToPath(import.meta.url)), path);

export const filterAircashContainers = (containersList, regex) => {
    return containersList
        .filter(({Names}) => regex.test(Names[0]))
        .map(({Id, Names}) => {
        return {
            Id,
            Name: Names[0]
        }
    })};

