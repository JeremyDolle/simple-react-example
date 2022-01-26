import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import useFormatDataTable from '../hooks/useFormatDataTable';
import { SRETables } from '../components/Atoms';

function UserPost() {
  const { id } = useParams();
  const { data, isValidating } = useSWR(`/users/${id}/posts`);

  const { normalizedTableData } = useFormatDataTable(data, ['userId']);

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">List of user posts</h1>
        <button
          type="button"
          className="ml-3
            inline-flex
            justify-center
            py-2
            px-4
            border
            border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-500
            shadow-lg
            shadow-indigo-500/50
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500"
        >
          Create
        </button>

      </div>
      {
        isValidating
          ? (<div>Loading...</div>)
          : (
            <SRETables
              columns={normalizedTableData.columns}
              data={normalizedTableData.data}
            />
          )
      }
    </div>
  );
}

export default UserPost;
