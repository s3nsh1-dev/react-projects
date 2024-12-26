import { useState } from "react";

// we always have the record of the which latest table
// cell is sorted and in which order (asc / desc)

function useSort(data, config) {
  //ascending or descending
  const [sortOrder, setSortOrder] = useState(null);

  // Initialize state for sorting chosen cells
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    // if we used sorting on different cell and now we want
    // sorted result of another cell, making sure when button click
    // to sort another cell the sorting mechanism must follow ascending order
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    // By default no sort type (means null) when 1st click sortBy asc
    // 2nd click sortBy desc and if clicked again make sort type null
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue function and use it for sorting

  // well its not ideal way but yeah!... sortedData is having same properties as data
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    // copy and sort the data array in the correct order based on the sortValue function
    sortedData = [...data].sort((a, b) => {
      // in this type of sorting first value is marked as B and 2nd value is marked as A
      // and array.sort compare a to b and position itself based on result
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      // whole sorting mechanism is switched just by adding negative value to result
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      // handle sorting based on the type of the value (string or number)
      // localeCompare is used to make sure "A" and "a" is treated like same
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
}

export default useSort;
