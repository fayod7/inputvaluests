import { memo, useState, type ChangeEvent, type FormEvent } from 'react';
interface IState {
  name: string
  age: number
  address: string
  group: string
}
const initialState:IState = {
  name: '',
  age: 0,
  address: '',
  group: '',
}

const StudentsForm = () => {
  const [formData, setFormData] = useState<IState>(initialState)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    e.target
  }
  return (
    <div className="flex justify-center w-[70%]">
      <form onSubmit={handleSubmit} className='bg-white p-5 rounded-[10px] shadow-md flex flex-col gap-3'>
         <input onChange={handleChange} name='name' required type="text" placeholder='name' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'/>
         <input onChange={handleChange} name='age' required type="text" placeholder='age' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'/>
         <input onChange={handleChange} name='address' required type="text" placeholder='address' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'/>
         <input onChange={handleChange} name='group' required type="text" placeholder='group' className='py-[8px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'/>
         <button className='bg-slate-600 text-white text-[18px] px-[50px] py-[10px] mt-4 rounded-[7px] duration-200 hover:opacity-65 hover:cursor-pointer inline' type='submit'>submit</button>
      </form>
    </div>
  );
};

export default memo(StudentsForm);