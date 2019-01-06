import * as list from './list.json';

export const request = async (url: string, headers:{}) => {
    return new Promise((resolve, reject) => {
        const id = 1;
        process.nextTick(() =>
          list.filter(item=>item.id === id)
            ? resolve(list.filter(item=>item.id === id)[0])
            : reject({
                error: 'Beer with ' + id + ' not found.',
              }),
        );
      });
}
