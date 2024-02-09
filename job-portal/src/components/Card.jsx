import React from 'react'
import { Link } from 'react-router-dom';
import {FiCalendar, FiClock, FiDollarSign, FiMapPin} from "react-icons/fi"

const Card = ({data}) => {
    const {CompanyName, JobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation,employmentType, postingDate, description, postedBy} = data;
  return (
    <section className="card">
        <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
            <img src={companyLogo} alt="" />
            <div>
                <h4 className="text-primary">{CompanyName}</h4>
                <h3 className="text-base font-semibold mb-2">{JobTitle}</h3>
                <div className="text-primary/70 text-sm flex flex-wrap gap-2 mb-2">
                    <span className="flex items-center gap-2"><FiMapPin /> {jobLocation}</span>
                    <span className="flex items-center gap-2"><FiClock /> {employmentType}</span>
                    <span className="flex items-center gap-2"><FiDollarSign /> {minPrice}-{maxPrice}</span>
                    <span className="flex items-center gap-2"><FiCalendar /> {postingDate}</span>
                </div>

                <p className="text-sm text-primary/70">{description}</p>
                <p className="text-xs float-end mt-4 text-primary/70">{postedBy}</p>



            </div>
        </Link>
    </section>
  )
}

export default Card
