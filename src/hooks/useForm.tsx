import { FormEvent, ChangeEvent, useState } from 'react';

type callbackType = (value: string) => void;

export const useForm = (callback: callbackType) => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    value && callback(value);
    setValue('');
  };

  return { value, onSubmit, onChange };
};
