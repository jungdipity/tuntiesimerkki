'use strict';

const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};


const cat_get = async (req, res) => {
  const id = req.params.id;
  const cat = await catModel.getCat(id);
  //const cat = cats.filter(kissa => kissa.id === id).pop();
  /* pidempi muoto
  const cat = cats.filter((kissa) => {
    if(kissa.id === id) {
      return kissa;
    }
  }); */
  res.json(cat);
};

//jos ei async & await, ei jää odottamaan tuloksia
const cat_create_post = async (req, res) => {
  console.log('cat_create_post', req.body, req.file);
  // object destructuring
  const {name, age, weight, owner} = req.body;
  const params = [name, age, weight, owner, req.file.filename];
  const cat = await catModel.addCat(params);
  res.json({message: 'upload ok'});
};

const cat_update_put = async (req, res) => {
  console.log('cat_update_put', req.body);
  // object destructuring
  const {name, age, weight, owner, id} = req.body;
  const params = [name, age, weight, owner, id];
  const cat = await catModel.updateCat(params);
  res.json({message: 'modify ok'});
};

const cat_delete = async (req, res) => {
  const id = req.params.id;
  const cat = await catModel.deleteCat(id);
  res.json(cat);
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_create_post,
  cat_update_put,
  cat_delete,
};