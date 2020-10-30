'use strict';

const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  /* pidempi versio
  const newUsers jos halutaan tallentaa muutokset uuteen taulukkoon
  //const newUsers =// users.map((kayttaja) => {
    delete kayttaja.password;
  });*/
  res.json(users);
};

const user_get = async (req, res) => {
  const id = req.params.id;
  const user = userModel.getUser(id);
  delete  user.password;
  res.json(user);
};

const user_create_post = async (req, res) => {
  console.log('user_create_post', req.body);
  // object destructuring
  const {name, email, passwd} = req.body;
  const params = [name, email, passwd];
  const user = await userModel.addUser(params);
  res.json({message: 'user create ok'});
};

module.exports = {
  user_list_get,
  user_get,
  user_create_post,
};