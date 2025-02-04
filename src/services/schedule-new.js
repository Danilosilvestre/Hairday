import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when}){
  try {
    // Faz a requisição para enviar os dados para o agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        name,
        when
      })
    })
    
    // Exibe mensagem de agendamento realizado com sucesso.
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar o atendimento. Tente novamente mais tarde.");
  }
}