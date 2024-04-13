import React, { useRef } from "react";
import Layout from "../layout/Layout";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

function Table({ columns, initialRows, type }) {
  const handleDelete = async (id, type) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/${type}/delete-${type}/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching service data:", error);
    }
  };

  const PrintPdf = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: "Appointments",
      onAfterPrint: () => console.log("Printed PDF successfully!"),
    });

    return (
      <Layout>
        <div className="relative overflow-x-auto w-full h-full" ref={componentRef}>
          <div className="flex justify-center">
          <button className="bg-green-500 px-8 py-2 rounded-full text-center text-white" onClick={handlePrint}>Print</button>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} className="px-6 sm:px-16 py-3">
                    {column.label}
                  </th>
                ))}
                {type === "appointment" ? (
                  ""
                ) : (
                  <th scope="col" className="px-6 sm:px-16 py-3">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {initialRows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 sm:px-16 py-4">
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}
                  <td className="px-6 sm:px-16 py-4 text-right">
                    {type === "appointment" ? (
                      ""
                    ) : (
                      <>
                        <form action="">
                          <button
                            type="submit"
                            onClick={() => handleDelete(row.id, type)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <DeleteIcon />
                          </button>
                        </form>
                        <Link
                          to={`/admin/${type}`}
                          state={{ row: initialRows, index: rowIndex }}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <EditIcon />
                        </Link>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    );
  }

  return <PrintPdf />;
}

export default Table;