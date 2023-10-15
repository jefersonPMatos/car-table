import React, { useState } from "react";
import { formatTimestamp } from "../utils/formatTimestap";
import { Modal } from "./Modal";
import { Cars } from "../types/CarType";

type CarsTableProps = {
  data: Cars[];
};

export const CarsTable: React.FC<CarsTableProps> = ({ data }) => {
  const [cars, setCars] = useState<Cars[]>(data);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOption, setSortOption] = useState("id");

  const filteredData = cars.filter((car) =>
    [
      car.nome_modelo.toLowerCase(),
      formatTimestamp(car.timestamp_cadastro).date,
      car.ano.toString(),
      car.combustivel.toLowerCase(),
      car.num_portas.toString(),
      car.cor.toLowerCase(),
      car.valor.toString(),
      car.brand.toString(),
      car.nome_modelo.toString(),
      car.modelo_id.toString(),
    ].some((value) => value.includes(searchValue.toLowerCase()))
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOption === "id") {
      return a.id - b.id;
    } else if (sortOption === "brand") {
      return a.brand - b.brand;
    } else if (sortOption === "modelId") {
      return a.modelo_id - b.modelo_id;
    } else if (sortOption === "model") {
      return a.nome_modelo.localeCompare(b.nome_modelo);
    } else if (sortOption === "color") {
      return a.cor.localeCompare(b.cor);
    } else if (sortOption === "year") {
      return a.ano - b.ano;
    } else if (sortOption === "fuel") {
      return a.combustivel.localeCompare(b.combustivel);
    } else if (sortOption === "doors") {
      return a.num_portas - b.num_portas;
    } else if (sortOption === "price") {
      return a.valor - b.valor;
    } else if (sortOption === "createdAt") {
      return a.timestamp_cadastro - b.timestamp_cadastro;
    }
    return 0;
  });

  const itemsPerPage = 5;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = sortedData.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col md:gap-4 w-full h-full px-4 md:px-12">
      <div className="flex flex-col items-center overflow-x-hidden">
        <div className="flex justify-between items-end lg:items-start w-full mb-3 lg:h-10 ">
          <Modal onSave={setCars} />
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="border border-black/40 p-2 rounded w-44 lg:w-60 mb-2 h-10"
            />
            <select
              id="small"
              className="px-2 border border-black/40 rounded h-10"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option selected>Organizar por: </option>
              <option value="id">ID</option>
              <option value="brand">Marca</option>
              <option value="modelId">ID Modelo</option>
              <option value="model">Modelo</option>
              <option value="color">Cor</option>
              <option value="year">Ano</option>
              <option value="fuel">Combustível</option>
              <option value="doors">Nº de portas</option>
              <option value="price">Preço</option>
              <option value="createdAt">Cadastrado</option>
            </select>
          </div>
        </div>

        <div className="hidden md:flex md:justify-between bg-slate-200 w-full px-4 py-2 rounded-t border border-black/40 font-semibold text-slate-800 mb-1">
          <div className="w-10">ID</div>
          <div className="w-20">Marca</div>
          <div className="w-20">ID Modelo</div>
          <div className="w-32">Modelo</div>
          <div className="w-24">Cor</div>
          <div className="w-20">Ano</div>
          <div className="w-24">Combustível</div>
          <div className="w-24">Nº de portas</div>
          <div className="w-24">Preço</div>
          <div className="w-40">Cadastrado</div>
        </div>

        <div className="overflow-hidden w-full space-y-4 lg:space-y-1">
          {displayedData.map((car) => {
            const dateTime = formatTimestamp(car.timestamp_cadastro);

            return (
              <div
                key={car.id}
                className="flex flex-col md:flex-row md:justify-between px-4 border border-black/40 py-2 shadow"
              >
                <div className="flex justify-between items-center border-b border-black/40 md:border-none py-2 text-sm text-gray-800 md:w-10">
                  <span className="flex md:hidden font-bold">Id:</span>
                  {car.id}
                </div>

                <div className="flex justify-between items-center border-b border-black/40 md:border-none py-2 text-sm text-gray-800 md:w-20">
                  <span className="flex md:hidden font-bold">Brand:</span>
                  {car.brand}
                </div>

                <div className="flex justify-between items-center border-b border-black/40 md:border-none py-2 text-sm text-gray-800 md:w-20">
                  <span className="flex md:hidden font-bold">ID Modelo:</span>
                  {car.modelo_id}
                </div>

                <div className="flex justify-between items-center border-b border-black/40 md:border-none py-2 text-sm text-gray-800 md:w-32">
                  <span className="flex md:hidden font-bold">Modelo:</span>
                  {car.nome_modelo}
                </div>

                <div className="flex justify-between items-center border-b border-black/40 md:border-none py-2 text-sm text-gray-800 md:w-24">
                  <span className="flex md:hidden font-bold">Cor:</span>
                  {car.cor}
                </div>

                <div className="flex justify-between items-center border-b border-black/40 md:border-none py-2 text-sm text-gray-800 md:w-20">
                  <span className="flex md:hidden font-bold">Ano:</span>
                  {car.ano}
                </div>

                <div className="flex justify-between items-center border-b border-black/40 md:border-none py-2 text-sm text-gray-800 md:w-24">
                  <span className="flex md:hidden font-bold">Combustível:</span>
                  {car.combustivel}
                </div>

                <div className="flex justify-between items-center border-b border-black/40 md:border-none py-2 text-sm text-gray-800 md:w-24">
                  <span className="flex md:hidden font-bold">
                    Nº de portas:
                  </span>
                  {car.num_portas}
                </div>

                <div className="flex justify-between items-center border-b border-black/40 md:border-none py-2 text-sm text-gray-800 md:w-24">
                  <span className="flex md:hidden font-bold">Valor:</span>
                  R$ {car.valor}
                </div>

                <div className="flex justify-between items-center py-2 text-sm text-gray-800 md:w-40">
                  <span className="flex md:hidden font-bold">
                    Cadastrado em:
                  </span>
                  {`${dateTime.date} às ${dateTime.time}`}
                </div>
              </div>
            );
          })}
          {!filteredData.length && (
            <div className="flex w-full justify-center items-center py-4 px-4 mx-auto h-40">
              Não foram encontrados resultados para a busca
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end items-center gap-4 my-6 md:mt-0">
        <div className=" text-lg">
          Página {currentPage + 1} de{" "}
          {Math.ceil(filteredData.length / itemsPerPage)}
        </div>
        <div className="space-x-2">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
            className="border border-black rounded-full p-1 cursor-pointer hover:opacity-70 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={displayedData.length < itemsPerPage}
            className="border border-black rounded-full p-1 cursor-pointer hover:opacity-70 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
