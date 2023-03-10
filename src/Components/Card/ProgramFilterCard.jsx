import React from 'react'
import ProgramsFilterList from '../ProgramsFilterList';

const ProgramFilterCard = (props) => {
  return (
    <div className="w-full bg-slate-200 rounded-2xl p-4 flex flex-col gap-5">
      <h1>{props.title}</h1>
      <ul className="flex flex-col gap-2 h-60 overflow-y-visible overflow-scroll scroll-m-4 rounded-xl">
        <ProgramsFilterList title="Android developer" />
        <ProgramsFilterList title="Frontend Developer" />
        <ProgramsFilterList title="Full Stack Developer" />
        <ProgramsFilterList title="Entrepreneur & Innovators" />
        <ProgramsFilterList title="Backend Developers" />
        <ProgramsFilterList title="Data analyst" />
        <ProgramsFilterList title="UI/UX Designer" />
      </ul>
    </div>
  );
}

export default ProgramFilterCard