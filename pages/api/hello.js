// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //res.status(200).json({ outputArguments: req.query.inputArguments })
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send({
    "err_code": 0,                // 状态码，可在获得响应后区分下一步操作
    "data_list": [
      {                           // 目前返回信息需要包裹在 `data_list` 中唯一对象内
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        outputArguments: req.query.inputArguments,
        encryptText: req.query.encryptText,
      }
    ]
  });
}
