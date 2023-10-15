import { CarsTable } from "../components/CarsTable";

import { cars } from "../contants/cars1.json";

export const Home = () => {
  return (
    <div className="flex flex-col items-center gap-16 min-w-full min-h-full">
      <h2 className="text-3xl font-bold">Carros</h2>
      <CarsTable data={cars} />
    </div>
  );
};
