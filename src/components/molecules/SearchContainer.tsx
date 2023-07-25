import {AiOutlineSearch} from 'react-icons/ai';

export default function SearchContainer() {
  return (
    <form method="post">
      <label className={'relative'}>
        <input
          className="shadow appearance-none border border-fontGrey rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-fontGrey"
          type="text"
          placeholder="Search our store"
        />
        {/* change to button and add action */}
        <div className={'absolute cursor-pointer top-0 right-3'}>
          <AiOutlineSearch size={24} />
        </div>
      </label>
    </form>
  );
}
