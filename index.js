const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

const insertData = async (index, notes) => {
  try {
    for (let i = 0; i < notes.length; i++) {
      console.log('==============================')
      const { body } = await client.index({ index, type: '_doc', id: i.toString(), body: { name: i.toString(), note: notes[i] } })
      console.log(body)
    }
  } catch (err) {
    console.error(err)
  }
}

async function main() {
  const notes = [
    '天氣真好',
    '吃起來',
    '好巧啊！',
    '力量真大',
    '力',
    '巧克力好吃',
    '好吃力啊',
    '天氣好熱吃個冰',
    '吃巧克力'
  ]
  // await insertData('user-before', notes)
  await insertData('user-after', notes)
}

main().catch(err => console.log(err))
