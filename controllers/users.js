import jwt from "jwt-simple";
import { config } from "../config/config.js";
import User from "../models/user.js";

export const signUp = (req, res) => {
  if (req.body.name && req.body.email && req.body.password) {
    let newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    console.log(newUser);
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        User.create(newUser).then((user) => {
          if (user) {
            var payload = {
              id: newUser.id,
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
              token: token,
            });
          } else {
            res.sendStatus("first" + 401);
          }
        });
      } else {
        res.sendStatus("second" + 401);
      }
    });
  } else {
    res.sendStatus("third" + 401);
  }
};

export const logIn = (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        if (user.password === req.body.password) {
          var payload = {
            id: user.id,
            name: user.name,
          };
          var token = jwt.encode(payload, config.jwtSecret);
          res.json({
            token: token,
          });
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
};
