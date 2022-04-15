import passport from "passport";
import passportJWT from "passport-jwt";
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
import { config } from "./config.js";
import User from "../models/user.js";

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export default function () {
  let strategy = new Strategy(params, (payload, callback) => {
    let user = User.findById(payload.id) || null;
    if (user) {
      return callback(null, { id: user.id });
    } else {
      return callback(new Error("User not found"), null);
    }
  });

  passport.use(strategy);

  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      return passport.authenticate("jwt", { session: false });
    },
  };
}
