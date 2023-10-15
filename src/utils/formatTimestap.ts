export const formatTimestamp = (
  timestamp: number
): { date: string; time: string } => {
  const date = new Date(timestamp * 1000); // Multiplica por 1000 para converter para milissegundos

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Os meses em JavaScript são base 0
  const year = date.getFullYear();

  return {
    date: `${day}/${month}/${year}`,
    time: `${hours}:${minutes}`,
  };
};
