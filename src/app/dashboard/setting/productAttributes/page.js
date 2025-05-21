'use client'
import { usePathname } from 'next/navigation';
import { TableComponent, Button } from '@/app/components';
import { ProductAttributesTable, ProductAttributesTablecolums} from '@/app/constants/settingManusData/ProductAttributesTable';
 const ProductAttributes = () => {
  const path=usePathname()
  return (
    <div className='w-full'>
    
     <div className='flex flex-col justify-between  mt-6 px-6 py-6 bg-white rounded shadow-lg'>

      <div className='flex justify-between items-center'>
        <div>
          <span className='text-[#6E7191] font-medium'>{path.split('/').filter(Boolean).pop()}</span>
        </div>
      <div className='flex gap-3'>
 
    {/* check till here */}
<Button label='Add Product Attribute' path="/MainLayout"/>
</div>
</div>

   
     {/* ..........table sec...... */}
     <div className="flex justify-center">
      <TableComponent columns={ProductAttributesTablecolums} data={ProductAttributesTable}/>
     </div>
     </div>
    </div>
  );
}
export default ProductAttributes



