import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useApp } from "@/app/contexts/AppContext";

export default function SearchBar() {
  const { project, setDisplayProject, setFilterProject } = useApp();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event, value) => {
    setSelectedValue(value);
  };

  // filter data after submit

  const filtered = ({ data, select }) => {
    return data.filter((item) => item.Tags.some((tag) => tag.name === select));
  };

  const handleSubmit = () => {
    if (selectedValue !== null) {
      const filterData = filtered({ data: project, select: selectedValue });
      setFilterProject(filterData);
      setDisplayProject(filterData.slice(0, 6));
    }
  };

  const handleClear = () => {
    setFilterProject(project);
    setDisplayProject(project.slice(0, 6));
  };

  // Get tag
  const tagNames = project.map((item) => {
    return item.Tags.map((tag) => tag.name);
  });

  // Flatten the array of arrays into one array
  const flatten = (arr) => arr.flat();
  const flattenedTags = flatten(tagNames);

  // Get unique values using Set and spread
  const uniqueTags = [...new Set(flattenedTags)];

  return (
    <div className="flex">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={uniqueTags}
        className="w-72 h-12 bg-white rounded-md"
        onChange={handleChange}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option}>
              {option}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField {...params} InputProps={{ ...params.InputProps }} />
        )}
      />
      <button
        className="w-16 h-12 bg-neutral-700 text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        className="w-12 h-12 bg-[#D10000] border-transparent rounded-r-md text-white"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
}
