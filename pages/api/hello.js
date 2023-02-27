// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //res.status(200).json({ outputArguments: req.query.inputArguments })
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    outputArguments: req.query.inputArguments,
  });
}
