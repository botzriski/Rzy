let handler = async (m, { conn, text, participants, isOwner, isOwner }) => {
  if (m.isGroup) {
    if (!(isOwner || isOwner)) {
      global.dfail('owner', m, conn)
      throw false
    }
  } else {
    global.dfail('group', m, conn)
    throw false
  }
  let users = participants.map(u => u.jid)
  m.reply(`${text ? `${text}\n` : ''}┌─〔 Tag All 〕\n` + users.map(v => '├ @' + v.replace(/@.+/, '')).join`\n` + '\n└────', null, {
    contextInfo: { mentionedJid: users }
  })
}

handler.help = ['tagall']
handler.tags = ['group', 'owner']
handler.command = ['tagall']

module.exports = handler
