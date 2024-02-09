//import all components used in this module
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJobs = () => {
  const [selectedOption, setselectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    data.skill = selectedOption;
    // console.log(data);
    fetch("http://localhost:3000/post-job", {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.acknowledged === true){
          alert("Job posted Successfully");
        }
        reset()
      });
  };

  const options = [
    {value: "Javascript", label:"Javascript"},
    {value: "C++", label:"C++"},
    {value: "HTML", label:"HTML"},
    {value: "CSS", label:"CSS"},
    {value: "React", label:"React"},
    {value: "Redux", label:"Redux"},
    {value: "Node", label:"Node"},
    {value: "Jquery", label:"Jquery"},
    {value: "Mongo DB", label:"Mongo DB"}
  ]

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* Form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* first row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job title</label>
              <input
                type="text"
                defaultValue={"Web developer"}
                {...register("JobTitle")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("CompanyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* second row */}

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* third row */}

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job location</label>
              <input
                type="text"
                placeholder="Ex: Nigeria"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* fourth row */}

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job posting date</label>
              <input
                type="date"
                placeholder="Ex: 2023-11-03"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Choose experience level</option>
                <option value="Any experience">Any experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* fifth row */}

          <div>
            <label className="block mb-2 text-lg">Required Skill set</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setselectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* sixth row */}

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company logo</label>
              <input
                type="url"
                placeholder="paste your company logo url: https://www.youtube.com/"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Choose employment option</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* seventh row */}

          <div className="w-full ">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus: outline-none placeholder:text-gray-700"
              rows={6}
              defaultValue={
                "demo text demo text demo text demo text demo text demo text demo text demo text demo text demo text demo text demo text"
              }
              placeholder="Job description"
              {...register("description")}
            />
          </div>

          {/* last row */}

          <div className="w-full">
          <label className="block mb-2 text-lg">Job Posted by</label>
          <input
                type="text"
                placeholder="Your mail"
                {...register("postedBy")}
                className="create-job-input"
              />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateJobs