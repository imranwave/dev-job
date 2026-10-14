import { Suspense } from "react";
import MainConmponents from "./components/MainConmponents";
import type { Tjob } from "./job";

const jobsPromise:Promise<Tjob[]> =fetch("/jobs.json").then(res=>res.json())
function App() {
  return (
    <>
      <Suspense fallback={<h1>loading.....</h1>}>
        <MainConmponents jobsPromise={jobsPromise}></MainConmponents>
      </Suspense>
    </>
  )
}

export default App
