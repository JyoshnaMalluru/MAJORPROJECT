const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
// const Review = require("C:/Users/my lap/.vscode/MAJORPROJECT/models/review.js");
// const Listing = require("C:/Users/my lap/.vscode/MAJORPROJECT/models/listing.js");
const Review = require("../models/review");
const Listing = require("../models/listing");
const { isLoggedIn,validateReview,isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Post Review Route 
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete Review Route 
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports= router;