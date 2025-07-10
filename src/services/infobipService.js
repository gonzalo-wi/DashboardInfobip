import axios from 'axios'

export async function getDataConversationPorAgente() {
  const response = await axios.get('http://192.168.0.58:83/api/infobip/get-data-conversation-x-agente')
  return response.data.data 
}