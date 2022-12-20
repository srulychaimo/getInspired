import User from "../models/userModule.js";
import { userRegisterValidate } from "../validations/usersValidation.js";

// @desc    User a new register
// @route   POST /api/users
// @access  public

export const userRegister = async (req, res) => {
  try {
    // Validate user input
    const { error } = userRegisterValidate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    // Validate system

    let user = await User.findOne({ email: req.body.email });

    if (user) {
      res
        .status(400)
        .send(
          "a user with this email already exists, please try again with a other email"
        );
      return;
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      country: req.body.country,
      city: req.body.city,
    });

    await res.send(`User saved ${user.name}`);
  } catch (err) {
    console.error(err);
  }
};
