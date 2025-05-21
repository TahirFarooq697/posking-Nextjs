
import { Button,FilterInput } from '@/app/components';
const SearchStockForm = ({
  filters,
  onChange,
  onSearch,
  onClear,
  inputClass,
  btnClass,
}) => {
  return (
    <form className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <FilterInput
          label="Name"
          type="text"
          name="name"
          value={filters.name}
          onChange={onChange}
          className={inputClass}
        />
        <FilterInput
          label="Status"
          type="text"
          name="status"
          value={filters.status}
          onChange={onChange}
          className={inputClass}
        />
      </div>
      <div>
        <Button type="button" label="Search" className={btnClass} onClick={onSearch} />
        <Button type="button" label="Clear" className={btnClass} onClick={onClear} />
      </div>
    </form>
  );
};
export default SearchStockForm