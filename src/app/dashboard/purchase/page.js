'use client'
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Button, TableComponent, DropdownButton, NormalButton,FilterInput } from '@/app/components';
import { PurchaseDetailsTable ,purchaseTableColumns} from '@/app/constants/PageDummyDatas/PurchaseDetailsTable';
const PurchsePage = ({ path }) => {
  const inputClass = 'border border-gray-300 rounded-md p-2';
  const btnClass =
    'w-20 bg-primary text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3';

  const [showFilterpurchse, isShowFilterpurchae] = useState(false);
  const [showRow, isShowRow] = useState(5);
  const [filters, setFilters] = useState({
    supplier: '',
    referenceNo: '',
    status: '',
  });
  const [filteredData, setFilteredData] = useState(PurchaseDetailsTable);

  const handleFilderPurchaseForm = () => {
    isShowFilterpurchae((prev) => !prev);
  };

  const handleRowChange = (value) => {
    isShowRow(value);
  };

  const handleExportSelect = (value) => {
    if (value === 'print') {
      window.print();
    } else if (value === 'xsl') {
      const exportData = PurchaseDetailsTable.slice(0, showRow);
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'purchase');
      const excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      const data = new Blob([excelBuffer], {
        type: 'application/octet-stream',
      });
      saveAs(data, 'purchase.xlsx');
    }
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
      setFilteredData(PurchaseDetailsTable);
      return;
    }

    const filtered = PurchaseDetailsTable.filter((item) => {
      return (
        (filters.supplier.trim() === '' ||
          item.supplier.toLowerCase().includes(filters.supplier.toLowerCase())) &&
        (filters.referenceNo.trim() === '' ||
          item.referenceNo
            .toLowerCase()
            .includes(filters.referenceNo.toLowerCase())) &&
        (filters.status.trim() === '' ||
          item.status.toLowerCase().includes(filters.status.toLowerCase()))
      );
    });

    setFilteredData(filtered);
  };

  const handleClear = () => {
    console.log('Clear clicked');
    setFilters({ supplier: '', referenceNo: '', status: '' });
    setFilteredData(PurchaseDetailsTable);
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

            <DropdownButton
              title="Export"
              options={[
                { label: 'Print', value: 'print' },
                { label: 'XSL', value: 'xsl' },
              ]}
              onSelect={handleExportSelect}
            />

            <Button label="+Add Purchase" path="/dashboard/addPurchase" />
          </div>
        </div>

        {/* Filter Form */}
        {showFilterpurchse && (
          <form className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
              <FilterInput
                label="Supplier"
                type="text"
                name="supplier"
                className={inputClass}
                onChange={handleFilterChange}
                value={filters.supplier}
              />
              <FilterInput
                label="Reference Number"
                type="text"
                name="referenceNo"
                className={inputClass}
                onChange={handleFilterChange}
                value={filters.referenceNo}
              />
              <FilterInput
                label="Status"
                type="text"
                name="status"
                className={inputClass}
                onChange={handleFilterChange}
                value={filters.status}
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
            columns={purchaseTableColumns}
            data={filteredData.slice(0, showRow)}
          />
        </div>
      </div>
    </div>
  );
};
export  default PurchsePage