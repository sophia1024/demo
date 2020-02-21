function imgData (method) {
  let res = null
  switch (method) {
    case 'GET':
      res = [
        {
          name: '图片1',
          type: '类型1',
          value: '1',
          url: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          createTime: '2020/02/20'
        },
        {
          name: '图片2',
          type: '类型2',
          value: '2',
          url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          createTime: '2020/02/01'
        },
        {
          name: '图片3',
          type: '类型3',
          value: '3',
          url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          createTime: '2020/02/09'
        },
        {
          name: '图片4',
          type: '类型4',
          value: '4',
          url: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          createTime: '2020/02/08'
        },
        {
          name: '图片5',
          type: '类型4',
          value: '4',
          url: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          createTime: '2020/02/19'
        }
      ]
      break
    default:
      res = '请求错误'
  }
  return res
}
module.exports = imgData
