import { TodoTypes } from 'store/actions/types';
import { BASE_URL } from 'utils/config';

export async function getFetchTodos(url: string) {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    return { todoList: data, count: data.length };
  } catch (error) {
    throw new Error();
  }
}

export async function postAddTodo(url: string, newTodo: TodoTypes) {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postToggleTodo(url: string, newTodo: TodoTypes) {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    return await res.json();
  } catch (error) {
    throw new Error();
  }
}

export async function postRemoveTodo(url: string) {
  const id = url.split(`/`)[2];

  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error();
  }
}
