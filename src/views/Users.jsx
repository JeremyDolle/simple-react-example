import React, { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';
import { SRETables } from '../components/Atoms';
import useFormatDataTable from '../hooks/useFormatDataTable';

function Users() {
  const { data, isValidating } = useSWR('/users');

  const { normalizedTableData } = useFormatDataTable(data, [
    'id',
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

  const MemoizedNestedAction = useCallback(() => (
    <td className="p-3">
      <a href="#">
        See Posts
      </a>
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
