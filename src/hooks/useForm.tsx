import { FormEvent, ChangeEvent, useState } from 'react';

type Props = (value: string) => void;

export const useForm = (callback: Props) => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    value && callback(value);
  };

  return { onSubmit, onChange };
};
