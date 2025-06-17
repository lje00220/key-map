import { BiSearchAlt } from 'react-icons/bi';
import Input from './input';
import { ChangeEvent, InputHTMLAttributes, MouseEvent } from 'react';

type SearchBoxProps = {
  value: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchBox = ({ value, onChangeHandler, onClickHandler, ...props }: SearchBoxProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <Input
        placeholder="찾으시는 기능을 입력해주세요."
        className="pr-8"
        value={value}
        onChange={onChangeHandler}
        {...props}
      />
      <button
        aria-label="기능 검색"
        type="button"
        onClick={onClickHandler}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        <BiSearchAlt size={24} />
      </button>
    </div>
  );
};

export default SearchBox;
