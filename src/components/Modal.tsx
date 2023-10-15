import { useState, FC, Dispatch, SetStateAction } from "react";
import { useForm, Controller } from "react-hook-form";

import { Cars } from "../types/CarType";

type ModalProps = {
  onSave: Dispatch<SetStateAction<Cars[]>>;
};

export const Modal: FC<ModalProps> = ({ onSave }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Cars>();

  const onSubmit = (data: Cars) => {
    const uniqueID = Math.floor(Math.random() * (999 - 55 + 1)) + 55;
    const timestamp = Math.floor(Date.now() / 1000);
    const newCar = {
      ...data,
      id: uniqueID,
      timestamp_cadastro: timestamp,
    };
    onSave((prevCars) => [...prevCars, newCar]);
    alert("Carro cadastrado com sucesso!");
    setModalOpen(false);
  };

  return (
    <div>
      <button
        className="bg-slate-600 hover:bg-slate-700 rounded text-white px-4 py-2"
        onClick={() => setModalOpen(true)}
      >
        Novo carro +
      </button>

      {isModalOpen && (
        <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3  overflow-y-auto h-fit">
            <div className="border-b px-4 py-2 flex justify-between items-center">
              <h3 className="font-semibold text-xl">Cadastrar novo carro</h3>
              <button
                className="text-black close-modal"
                onClick={() => setModalOpen(false)}
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-4">
              <div>
                <label className="font-semibold">Modelo ID:</label>
                <Controller
                  name="modelo_id"
                  control={control}
                  rules={{ required: "Este campo é obrigatório" }}
                  render={({ field }) => (
                    <input
                      type="number"
                      {...field}
                      placeholder="ID do modelo"
                      className={`text-md block px-3 py-2 rounded-lg w-full
                      bg-white border-2 border-gray-300 placeholder-gray-600 focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none ${
                        errors.modelo_id ? "border-red-500" : ""
                      }`}
                    />
                  )}
                />
                {errors.modelo_id && (
                  <p className="text-red-500">{errors.modelo_id.message}</p>
                )}
              </div>

              <div>
                <label className="font-semibold">Ano:</label>
                <Controller
                  name="ano"
                  control={control}
                  rules={{ required: "Este campo é obrigatório" }}
                  render={({ field }) => (
                    <input
                      type="number"
                      {...field}
                      placeholder="1999"
                      className="text-md block px-3 py-2 rounded-lg w-full
                  bg-white border-2 border-gray-300 placeholder-gray-600   focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  )}
                />
                {errors.ano && (
                  <p className="text-red-500">{errors.ano.message}</p>
                )}
              </div>

              <div>
                <label className="font-semibold">Combustível:</label>
                <Controller
                  name="combustivel"
                  control={control}
                  rules={{ required: "Este campo é obrigatório" }}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder="Gasolina"
                      className="text-md block px-3 py-2 rounded-lg w-full
                  bg-white border-2 border-gray-300 placeholder-gray-600   focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  )}
                />
                {errors.combustivel && (
                  <p className="text-red-500">{errors.combustivel.message}</p>
                )}
              </div>

              <div>
                <label className="font-semibold">Número de Portas:</label>
                <Controller
                  name="num_portas"
                  control={control}
                  rules={{ required: "Este campo é obrigatório" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="2"
                      className="text-md block px-3 py-2 rounded-lg w-full
                  bg-white border-2 border-gray-300 placeholder-gray-600   focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  )}
                />
                {errors.num_portas && (
                  <p className="text-red-500">{errors.num_portas.message}</p>
                )}
              </div>

              <div>
                <label className="font-semibold">Cor:</label>
                <Controller
                  name="cor"
                  control={control}
                  rules={{ required: "Este campo é obrigatório" }}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder="Rosa"
                      className="text-md block px-3 py-2 rounded-lg w-full
                  bg-white border-2 border-gray-300 placeholder-gray-600   focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  )}
                />
                {errors.cor && (
                  <p className="text-red-500">{errors.cor.message}</p>
                )}
              </div>

              <div>
                <label className="font-semibold">Nome do Modelo:</label>
                <Controller
                  name="nome_modelo"
                  control={control}
                  rules={{ required: "Este campo é obrigatório" }}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      placeholder="Nome do modelo"
                      className="text-md block px-3 py-2 rounded-lg w-full
                  bg-white border-2 border-gray-300 placeholder-gray-600   focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  )}
                />
                {errors.nome_modelo && (
                  <p className="text-red-500">{errors.nome_modelo.message}</p>
                )}
              </div>

              <div>
                <label className="font-semibold">Valor:</label>
                <Controller
                  name="valor"
                  control={control}
                  rules={{ required: "Este campo é obrigatório" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="R$ 0,00"
                      className="text-md block px-3 py-2 rounded-lg w-full
                  bg-white border-2 border-gray-300 placeholder-gray-600   focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  )}
                />
                {errors.valor && (
                  <p className="text-red-500">{errors.valor.message}</p>
                )}
              </div>

              <div>
                <label className="font-semibold">Marca:</label>
                <Controller
                  name="brand"
                  control={control}
                  rules={{ required: "Este campo é obrigatório" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Chevrolet"
                      type="text"
                      className="text-md block px-3 py-2 rounded-lg w-full
                  bg-white border-2 border-gray-300 placeholder-gray-600   focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  )}
                />
                {errors.brand && (
                  <p className="text-red-500">{errors.brand.message}</p>
                )}
              </div>

              <div className="flex justify-end items-center w-100 border-t py-4 gap-2">
                <button
                  className="border border-black/40 hover:opacity-70 px-3 py-2 rounded mr-1 close-modal"
                  onClick={() => setModalOpen(false)}
                >
                  Cancelar
                </button>
                <button className="bg-slate-600 hover:bg-slate-700 px-3 py-2 rounded text-white">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
