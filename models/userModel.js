'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();


const getAllUsers = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    // [rows] ottaa hausta ensimmäisen taulukon kentän, eli haun tuloksen,
    // toinen kenttä on kaikki metadata mikä tulee ensimmäisen mukana
    const [rows] = await promisePool.query('SELECT * FROM wop_User');
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.log('userModel error', e.message);
    return {error: 'DB Error'};
  }
};

const getUser = async (id) => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM wop_user WHERE user_id = ?',
        [id]);
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.log('userModel error', e.message);
    return {error: 'DB Error'};
  }
};

const addUser = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO wop_user (name, email, password) VALUES (?,?,?)',
        params
    );
    console.log('rows', rows);
    return rows;
  } catch (e) {
    console.log('userModel error', e.message);
    return {error: 'DB Error'};
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
};