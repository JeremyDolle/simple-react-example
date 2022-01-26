import React from 'react';
import {
  arrayOf, string, object, node, func,
} from 'prop-types';

function SreTables({
  columns, data, prependColumns, prependRows, appendColumns, appendRows,
}) {
  return (
    <div
      className="shadow-2xl shadow-indigo-500/50 overflow-hidden border-b border-gray-200 rounded-lg"
    >
      <table
        className="min-w-full"
      >
        <thead className="border-b text-white">
          <tr>
            {prependColumns}
            {
              columns.map((column) => (
                <th key={column} className="p-3 text-left bg-violet-500">{column}</th>
              ))
            }
            {appendColumns}
          </tr>
        </thead>
        <tbody>
          {
            data.map((row) => (
              <tr key={`row-${row.name}`} className="border-b">
                {prependRows(row)}
                {
                  Object.keys(row).map((column) => (
                    <td key={column} className="p-3">{row[column]}</td>
                  ))
                }
                {appendRows(row)}
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

SreTables.propTypes = {
  columns: arrayOf(string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: arrayOf(object).isRequired,
  prependColumns: node,
  prependRows: func,
  appendColumns: node,
  appendRows: func,
};

SreTables.defaultProps = {
  prependColumns: null,
  prependRows: () => null,
  appendColumns: null,
  appendRows: () => null,
};

export default SreTables;
