// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    name: "Yosniel",
    company: "EIP-Studios",
    message: "welcome to my server",
    linkedin: "https://linkedin.com/in/ingenieríacubana",
    github: "https://github.com/ycabrera90",
  });
};