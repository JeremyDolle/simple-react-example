import { useMemo } from 'react';

const INITIAL_STATE = {
  data: [],
  columns: [],
  total: 0,
};

/**
 * Hook to format data for DataTable
 * @description it will generate columns and data for DataTable based on the keys
 * @param data
 * @param excludedColumns
 * @return {unknown}
 */
export default (data, excludedColumns = []) => useMemo(() => {
  // check if data is a non-empty array
  if (!data || (Array.isArray(data) && data.length <= 0)) {
    return INITIAL_STATE;
  }

  const normalizedTableData = data.reduce((acc, item) => {
    // check if current object has a key that is not in the accumulator and add it
    const newColumns = Object.keys(item).map((key) => {
      if (!acc.columns.includes(key) && !excludedColumns.includes(key)) {
        return key;
      }
      return null;
    }).filter((probablyNull) => !!probablyNull);

    // remove from item excluded columns
    const normalizedItem = Object.keys(item).reduce((itemAcc, key) => {
      if (!excludedColumns.includes(key)) {
        return {
          ...itemAcc,
          [key]: item[key],
        };
      }
      return itemAcc;
    }, {});

    return {
      data: [...acc.data, normalizedItem],
      columns: [...acc.columns, ...newColumns],
      total: acc.total + 1,
    };
  }, INITIAL_STATE);

  return {
    normalizedTableData,
  };
}, [data]);
