import { memo, useState, type ChangeEvent, type Dispatch, type FC, type FormEvent, type SetStateAction } from 'react';
import type { IStudent } from '../../pages/student';
interface IState {
  name: string
  age: number
  address: string
  group: string
}
interface Props{
  setData: Dispatch<SetStateAction<IStudent[]>>
}
const initialState:IState = {
  name: '',
  age: 0,
  address: '',
  group: '',
}

const StudentsForm:FC<Props> = ({ setData }) => {
  const [formData, setFormData] = useState<IState>(initialState)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    let newStudent:IStudent = {
      ...formData,
      id: Date.now()
    }
    setData(prev => ([...prev, newStudent]))
    setFormData(initialState)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev, [name]: value
    }))

  }
  
  return (
    <div className="flex w-[500px] py-[50px] mx-auto">
      <form onSubmit={handleSubmit} className='bg-white p-5 rounded-[10px] shadow-md flex flex-col gap-3 w-full'>
        <h2 className='text-2xl text-slate-700'>Student form</h2>
         <input value={formData.name} onChange={handleChange} name='name' required type="text" placeholder='name' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'/>
         <input value={formData.age} onChange={handleChange} name='age' required type="number" placeholder='age' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'/>
         <input value={formData.address} onChange={handleChange} name='address' required type="text" placeholder='address' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'/>
         <input value={formData.group} onChange={handleChange} name='group' required type="text" placeholder='group' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'/>
         <button className='bg-slate-600 text-white text-[18px] px-[50px] py-[10px] mt-4 rounded-[7px] duration-200 hover:opacity-65 hover:cursor-pointer inline' type='submit'>submit</button>
      </form>
    </div>
  );
};

export default memo(StudentsForm);