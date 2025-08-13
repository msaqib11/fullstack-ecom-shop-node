
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { userRequest } from "../../requestMethods";


function DashboardCard06() {
  const [monthlyUsersStats, setMonthlyUsersStates] = useState([]);
  const months = [
    "Jan", "Feb", "March", "April", "May", "June",
    "July", "August", "Sept", "Oct", "Nov", "Dec"
  ];
  useEffect(() => {
    async function getFinanceData() {
      try {
        const respose = await userRequest.get("/user/get-users-monthly-stats")
        const transformedData = respose.data.map((item) => ({
          _id: months[item._id - 1],
          total: item.total
        }))

        setMonthlyUsersStates(transformedData)

      } catch (error) {
        console.error("Error fetching finance data:", error);

      }
    }
    getFinanceData()
  }, [

  ])


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl ">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Monthly User Stats</h2>
      </header>
      <ResponsiveContainer width="100%" height="100%" className={"p-8"}>
        <LineChart data={monthlyUsersStats} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>


    </div>
  );
}

export default DashboardCard06;
