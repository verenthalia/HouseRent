const express = require("express");

const {
  getAllPropertiesController,
  bookingHandleController,
  getAllBookingsController,
  authController,
  forgotPasswordController
} = require("../controllers/userController");

const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/getallproperties", getAllPropertiesController);

router.post(
  "/bookinghandle/:propertyid",
  authMiddleware,
  bookingHandleController
);

router.get(
  "/getallbookings",
  authMiddleware,
  getAllBookingsController
);

router.post(
  "/auth",
  authMiddleware,
  authController
);

router.post(
  "/forgotpassword",
  forgotPasswordController
);

module.exports = router;