import { TodoTypes } from 'store/actions/types';

const nextID = (items: TodoTypes[]) =>
  items.length
    ? String(
        items.map(({ id }) => parseInt(id)).reduce((prev, curr) => (prev > curr ? prev : curr)) + 1
      )
    : '1';

export default nextID;
