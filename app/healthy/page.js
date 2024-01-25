'use client';
import React from 'react';
import HealthReport from '@/components/healthReport';
import useStore from '@/store/useStore';
const Home = () => {
  const jsonData = useStore((state) => state.jsonData);
  return (
    <div>
      <h1 className='text-3xl font-bold mt-10 flex justify-center'>
        Your Health Report
      </h1>
      {jsonData && <HealthReport data={jsonData} />}
    </div>
  );
};

export default Home;
