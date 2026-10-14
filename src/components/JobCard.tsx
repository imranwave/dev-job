import type { Tjob } from "../job";

type TjobCardProps = {
  job: Tjob;
};
const JobCard = ({ job }: TjobCardProps) => {
  return (
    <div className="card bg-base-100 card-sm shadow-sm my-4">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{job.title}</h2>
          <h3>{job.jobType}</h3>
        </div>
        <p>{job.location}</p>

        <div className="justify-end card-actions items-center">
          
            <p className="text-xl font-bold">{job.salaryRange}</p>
            <button className="btn btn-primary">Saved</button>
          
        </div>
      </div>
    </div>
  );
};

export default JobCard;
