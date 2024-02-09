import React from 'react'
import InputField from './InputField';

const EmploymentType = ({handleChange}) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Employment Type</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Experience
        </label>

        <InputField
          handleChange={handleChange}
          value="temporary"
          title="temporary"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value="part-time"
          title="part-time"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value="Full-time"
          title="Full-time"
          name="test"
        />
      </div>
    </div>
  );
}

export default EmploymentType