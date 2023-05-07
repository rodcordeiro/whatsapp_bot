class Templates {
  static DAILY(data) {
    return `*Ponto do dia!!*\n\n*Linha:* \`\`\`${
      data.linha
    }\`\`\`\n\n${Templates.PONTO(data)}\`\`\`${Templates.Footer()}`;
  }

  static PONTO(data) {
    return `*Ritmo:* \`\`\`${data.ritmo}\`\`\`\n\n${data.ponto}\n\n\`\`\``;
  }
  static Footer(search = undefined) {
    return `\`\`\`~~[Mensagem automática]~~\nPara ver mais pontos acesse:\nhttps://raizes.rodrigocordeiro.com.br/${
      search ? `index.php?buscar=${search.replace(/ /gm, '%20')}` : ''
    } ou me mande /help\`\`\``;
  }
}

module.exports.Templates = Templates;
