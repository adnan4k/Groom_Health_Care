import React from 'react';
import Layout from '../layout/Layout';

function Table({ columns, rows }) {
  return (
    <Layout>
      <div className="relative overflow-x-auto w-full h-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-6 sm:px-16 py-3">
                  {column.label}
                </th>
              ))}
              <th scope="col" className="px-6 sm:px-16 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 sm:px-16 py-4">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
                <td className="px-6 sm:px-16 py-4 text-right">
                  {/* Example of actions you might have */}
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                  <button className="text-red-500 hover:text-red-700 ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Table;
