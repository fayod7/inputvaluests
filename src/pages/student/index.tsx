import { memo, useState } from 'react';
import StudentsForm from '../../components/studentsForm'
import StudentsWrapper from '../../components/studentsWrapper';
export interface IStudent{
  id: number 
  name: string
  age: number
  address: string
  group: string
} 
const Students = () => {
   const [data, setData] = useState<IStudent[]>([])
   console.log(data);
  const handleDelete = (id: number) => {
    setData(prev => prev.filter(item => item.id !== id))
  }
  return (
    <div className="w-full flex flex-col">
    <StudentsForm setData={setData}/>
    <StudentsWrapper data={data} onDelete={handleDelete}/>
    </div>
  );
};

export default memo(Students);