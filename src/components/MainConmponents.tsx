import { use } from "react";
import FilterJobs from "./FilterJobs";
import JobSection from "./JobSection";
import NavBar from "./NavBar";
import type { Tjob } from "../job";

type TJobsMainSectinProps={
    jobsPromise:Promise<Tjob[]>
}

const MainConmponents = ({jobsPromise}:TJobsMainSectinProps) => {
    const jobsData=use(jobsPromise)
  return (
    <div>
      <NavBar />
      <FilterJobs />
      <JobSection jobsData={jobsData}/>
    </div>
  );
};

export default MainConmponents;
