import React from 'react'
import InputField from './InputField';

const JobPostingData = ({handleChange}) => {
    const now = new Date();
    // console.log(now)
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 24 * 7 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now - 24 * 30 * 60 * 60 * 1000);
    // console.log(twentyFourHoursAgo);

    //convert date to a string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);
    // console.log(twentyFourHoursAgoDate)
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All time
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgo}
          title="Last 24 hours"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value={sevenDaysAgo}
          title="Last 7 days"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgo}
          title="Last month"
          name="test"
        />
      </div>
    </div>
  );
}

export default JobPostingData
