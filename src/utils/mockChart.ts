
export const data = {
    labels: ["Mestres", "Doutores", "Especialistas"], 
    datasets: [
      {
        label: "Número de Professores", 
        data: [10, 5, 8], 
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)", 
        borderWidth: 1, 
      },
    ],
  };
  
  export const options = {
    responsive: true, 
    scales: {
      x: {
        beginAtZero: true, 
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  