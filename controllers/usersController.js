import User from "../model/userModel.js";

export const getUsers = async(req, res) => { 
    const data = await User.find();
  res.json({ success: true, message: "message from GET", data: data });
// res.status(200).json({success: true, message: "SOME DATAS FROM SERVER /GET"});

};

export const setUsers = async (req, res) => {
  const data = await User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  res.status(200).json({ success: true, message: "data created successfully", data: data });
// res.status(200).json({success: true, message: "SOME DATAS FROM SERVER /POST"});

};
