class Templates{
  static DAILY(data){
    return `Ponto do dia!!\n\n*Linha:* \`\`\`${data.linha}\`\`\`\n\n*Ritmo:* \`\`\`${data.ritmo}\`\`\`\n\n${data.ponto}\n\n\`\`\`[Mensagem automática]\`\`\``
  }
}

module.exports.Templates=Templates;