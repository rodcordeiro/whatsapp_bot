const { client } = require('../wweb/client.wweb');
const {connection}=require("../../database");
const {automatedMessage} = require ("../../common/utils/automatedMessage.util")
const { PontosService } = require('../../common/utils/pontos.util');
const { Templates } = require('../../common/handlers/template.handlers');

const DAY_IN_MS = 24 * 60 * 60 * 1000

const sendDailyPonto = async()=>{
  const Pontos = new PontosService();
  const { pontos } = await Pontos.getData();
  const data = pontos.getRandom()
  const message = Templates.DAILY(data)
  const destiny =await connection("bot_tb_registered_channels").select("channel_id").where({name:"raizes"})
  await client.sendMessage(destiny,message)

  
}


(()=> {
   const interval = setInterval(async()=>{
     await sendDailyPonto()
   },DAY_IN_MS)
})()
