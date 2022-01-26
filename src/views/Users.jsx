import React, { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { SRETables } from '../components/Atoms';
import useFormatDataTable from '../hooks/useFormatDataTable';

function Users() {
  const { data, isValidating } = useSWR('/users');

  const { normalizedTableData } = useFormatDataTable(data, [
    'address',
    'company',
  ]);

  // Data filtering
  const [filter, setFilter] = useState('');
  const filteredNormalizedData = useMemo(() => {
    if (!normalizedTableData?.data) {
      return normalizedTableData;
    }
    const filteredData = normalizedTableData.data.filter(
      (user) => user.name.toLowerCase().includes(filter.toLowerCase())
        || user.email.toLowerCase().includes(filter.toLowerCase()),
    );

    return {
      ...normalizedTableData,
      data: filteredData,
    };
  }, [normalizedTableData, filter]);

  const MemoizedNestedAction = useCallback((row) => (
    <td className="p-3">
      <Link to={`/users/${row.id}/posts`} className="text-indigo-600 hover:text-indigo-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </Link>
    </td>
  ), []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-5">List of users</h1>
        <div className="flex items-center justify-between">
          <input
            type="text"
            name="price"
            id="price"
            className="
              focus:ring-indigo-500
              focus:border-violeto-500
              py-1
              pl-3
              border-gray-500
              rounded-md
            "
            placeholder="Search by name..."
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

      </div>
      {
        isValidating
          ? (<div>Loading...</div>)
          : (
            <SRETables
              columns={filteredNormalizedData.columns}
              data={filteredNormalizedData.data}
              appendColumns={<th className="p-3 text-left bg-violet-500">Actions</th>}
              appendRows={MemoizedNestedAction}
            />
          )
      }
    </div>
  );
}

export default Users;
