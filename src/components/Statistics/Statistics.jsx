/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import { FunnelChart, Tooltip, Funnel, LabelList } from "recharts";

const Statistics = () => {
  const assign = useLoaderData();
  console.log(assign);
  return (
    <div className="mt-12 grid justify-center">
      <FunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel dataKey="value" data={assign} isAnimationActive>
          <LabelList
            position="right"
            fill="#000"
            stroke="none"
            dataKey="name"
          />
        </Funnel>
      </FunnelChart>
    </div>
  );
};

export default Statistics;
