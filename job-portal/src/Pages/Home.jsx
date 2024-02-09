// import all dependencies used in this module
import { useEffect, useState } from "react";
import Banner from "../components/Banner"
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
// calling the json file to display data
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/all-jobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // console.log(jobs)

// textbox read value
  const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }
    
    //filter jobs by title
    const filteredItems = jobs.filter(
      (job) => job.JobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    
    //****************Radio filtering**********************
    const handleChange =(event) => {
      setSelectedCategory(event.target.value)
    }

       //****************Button bbased filtering function**********************
       const handleClick =(event) => {
        setSelectedCategory(event.target.value)
      }


      //calculate the index range
      const calculatePageRange = () =>{
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return{startIndex, endIndex};
      }

      //function for the next page

      const nextPage = () => {
        if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
          setCurrentPage(currentPage + 1);
        }
      }

      //function for the previous page

      const prevPage = () => {
        if(currentPage > 1){
          setCurrentPage(currentPage - 1);
        }
      }

      //main function

      const filteredData = (jobs, selected, query) => {
        let filterJobs = jobs;
        //Filtering input items
        if(query){
          filterJobs = filteredItems;
        }

        //category
        if(selected){
          filterJobs = filterJobs.filter(
            ({
              jobLocation,
              maxPrice,
              experienceLevel,
              salaryType,
              employmentType,
              postingDate,
            }) =>
            jobLocation.toLowerCase() === selected.toLowerCase() ||
            parseInt(maxPrice) <= parseInt(selected) || postingDate >= selected ||
            salaryType.toLowerCase() === selected.toLowerCase() ||  experienceLevel.toLowerCase() === selected.toLowerCase() ||
            employmentType.toLowerCase() === selected.toLowerCase()
          );
          // console.log(filterJobs);
        }
        //slice the data based on current page
        const {startIndex, endIndex} = calculatePageRange();
        filterJobs = filterJobs.slice(startIndex, endIndex);
        return filterJobs.map((data, i) => <Card key={i} data={data}/>)
       
      }

      const result = filteredData(jobs, selectedCategory, query);

    //the return value of the home module
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-4 lg:px-4 py-12">
        {/* Leftside */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Job cards */}
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          )}

          {/* pagination here */}

          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover: underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover: underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Right side */}
        <div className="bg-white p-4 rounded"><NewsLetter/></div>
      </div>
    </div>
  );
}

export default Home
