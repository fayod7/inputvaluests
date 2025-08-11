import { memo, type FC } from 'react';
import type { IStudent } from '../../pages/student';
import student from '../../assets/student.jpg'
interface Props {
  data:IStudent[]
  onDelete: (id: number) => void
}
const StudentsWrapper:FC<Props> = ({ data, onDelete }) => {
    
  return (
    <div className="grid grid-cols-4 container py-[50px] gap-3">
      {
        data?.map((item:IStudent) => (
            <div className='flex flex-col gap-3 bg-white p-5 rounded-2xl shadow-xl' key={item.id}>
                <div className='flex justify-center'>
                  <img className='rounded-full size-18' src={student} alt="" />
                </div>
                <div className='flex flex-col gap-1 text-center'>
                  <h2 className='text-xl'>{item.name}</h2>
                  <p className='text-[#333]'>{item.age} years old</p>
                  <p className='text-[#333]'>Address: {item.address}</p>
                  <p className='text-[#333]'>Group: {item.group}</p>
                  <button onClick={() => onDelete(item.id)} className='bg-slate-600 text-white text-[18px] px-[50px] py-[10px] rounded-[7px] duration-200 hover:opacity-65 hover:cursor-pointer' type='button'>delete</button>
                </div>
            </div>
        ))
      }
    </div>
  );
};

export default memo(StudentsWrapper);