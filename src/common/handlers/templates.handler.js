class Templates {
  static DAILY(data) {
    return `*Ponto do dia!!*\n\n*Linha:* \`\`\`${data.linha}\`\`\`\n\n*Ritmo:* \`\`\`${data.ritmo}\`\`\`\n\n${data.ponto}\n\n\`\`\`~~[Mensagem automática]~~\nPara ver mais pontos acesse:\nhttps://raizes.rodrigocordeiro.com.br/ ou me mande /help\`\`\``;
  }

  static PONTO(data) {
    return `*Ritmo:* \`\`\`${data.ritmo}\`\`\`\n\n${data.ponto}\n\n\`\`\``;
  }
}

module.exports.Templates = Templates;
