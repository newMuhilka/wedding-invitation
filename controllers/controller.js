const { Admin, Comment, Invitaion } = require('../models');
const Op = require('sequelize');

class Controller {
  //! Get /login
  static async showLogin(req, res) {
    try {


    } catch (error) {
      res.send(error)

    }
  }


  //! Get /
  static async showInvitation(req, res) {
    try {



    } catch (error) {
      res.send(error)

    }
  }

  //! Get /dashboard
  static async dashboard(req, res) {
    try {
     
    } catch (error) {
      res.send(error)

    }
  }

  //! Post /login
  static async login(req, res) {
    try {

    } catch (error) {
      res.send(error)

    }
  }

  //! Post /logout
  static async logout(req, res) {
    try {

    } catch (error) {
      res.send(error)

    }
  }

  //! Post /comments
  static async storeComment(req, res) {
    try {

    } catch (error) {
      res.send(error)

    }
  }
}

module.exports = Controller