import type { Tjob } from "../job";
import JobCard from "./JobCard";

type TjobsectionProps={
    jobsData:Tjob[]
}
const JobSection = ({ jobsData }:TjobsectionProps) => {
  return (
    <div className="container mx-auto flex justify-between">
      {/* latest job */}
      <div className="w-3/4">
        <div className="flex justify-between items-center gap-4">
          <h1 className="font-bold">Latest Jobs</h1>
          <p className="text-slate-400">6 Role Fond</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {jobsData.map((data) => (
            <JobCard job={data}/>
          ))}
        </div>
      </div>

      {/* save job */}
      <div className="1/4">
        <div className="flex justify-between items-center gap-6">
          <h1 className="font-bold">Save Jobs</h1>
          <p className="text-slate-400">2 saved</p>
        </div>
      </div>
    </div>
  );
};

export default JobSection;
