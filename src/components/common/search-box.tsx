import { BiSearchAlt } from 'react-icons/bi';
import Input from './input';
import { InputHTMLAttributes } from 'react';

type SearchBoxProps = {
  value: string;
  onChangeHandler: () => void;
  onClickHandler: () => void;
};

const SearchBox = ({
  value,
  onChangeHandler,
  onClickHandler,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & SearchBoxProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <Input
        placeholder="찾으시는 기능을 입력해주세요."
        className="pr-8"
        value={value}
        onChange={onChangeHandler}
        {...props}
      />
      <button onClick={onClickHandler} className="absolute right-2 top-1/2 -translate-y-1/2">
        <BiSearchAlt size={24} />
      </button>
    </div>
  );
};

export default SearchBox;
