'use client'
import { useState } from 'react';
import {  Button, TableComponent, DropdownButton, NormalButton,FilterInput } from '@/app/components';
import { CitiesTableCoums ,CitiesDetailsTable} from '@/app/constants/settingManusData/CitiesDetailsTable';
 const Cities = ({ path }) => {
  const inputClass = 'border border-gray-300 rounded-md p-2';
  const btnClass =
    'w-20 bg-primary text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3';

  const [showFilterpurchse, isShowFilterpurchae] = useState(false);
  const [showRow, isShowRow] = useState(5);
  const [filters, setFilters] = useState({
    name: '',
    state: '',
    
  });
  const [filteredData, setFilteredData] = useState(CitiesDetailsTable);

  const handleFilderPurchaseForm = () => {
    isShowFilterpurchae((prev) => !prev);
  };

  const handleRowChange = (value) => {
    isShowRow(value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const hasAtLeastOneFilter = Object.values(filters).some(
      (val) => val.trim() !== ''
    );
    if (!hasAtLeastOneFilter) {
      setFilteredData(CitiesDetailsTable);
      return;
    }

    const filtered = CitiesDetailsTable.filter((item) => {
      return (
        (filters.name.trim() === '' ||
          item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.state.trim() === '' ||
          item.state
            .toLowerCase()
            .includes(filters.state.toLowerCase())) 
      );
    });

    setFilteredData(filtered);
  };

  const handleClear = () => {
    console.log('Clear clicked');
    setFilters({ name: '', state: '' });
    setFilteredData(CitiesDetailsTable);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-between mt-6 px-6 py-6 bg-white rounded shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-secondry font-medium">{path}</span>
          </div>

          <div className="flex gap-3">
            <DropdownButton 
              title="5"
              options={[
                { label: '5', value: 5 },
                { label: '10', value: 10 },
                { label: '15', value: 15 },
              ]}
              onSelect={handleRowChange}
            />

            <NormalButton
              title="Filter"
              className="btnClassfilter"
              filter={handleFilderPurchaseForm}
            />
            <Button label="+Add city" path="" />
          </div>
        </div>

        {/* Filter Form */}
        {showFilterpurchse && (
          <form className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
              
              <FilterInput
                label="Name"
                type="text"
                name="name"
                className={inputClass}
                onChange={handleFilterChange}
                value={filters.name}
              />
              <FilterInput
                label="state"
                type="text"
                name="state"
                className={inputClass}
                onChange={handleFilterChange}
                value={filters.state}
              />
            </div>

            <div>
              <Button
                type="button"
                label="Search"
                className={btnClass}
                onClick={handleSearch}
              />
              <Button
                type="button"
                label="Clear"
                className={btnClass}
                onClick={handleClear}
              />
            </div>
          </form>
        )}

        {/* Table Section */}
        <div className="flex justify-center">
          <TableComponent
            columns={CitiesTableCoums}
            data={filteredData.slice(0, showRow)}
          />
        </div>
      </div>
    </div>
  );
};

export default Cities
