function Table({ data, config, keyFn }) {
  // heading of the table
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      // will create multiple cells for each row based on the data of array
      return (
        <td className='p-2' key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    // will create multiple rows to show cell data
    return (
      <tr className='border-b' key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
