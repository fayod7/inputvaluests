import { memo } from 'react';
import StudentsForm from '../../components/studentsForm'
import StudentsWrapper from '../../components/studentsWrapper';
const Students = () => {
  return (
    <div className="w-full flex flex-col">
    <StudentsForm/>
    <StudentsWrapper/>
    </div>
  );
};

export default memo(Students);