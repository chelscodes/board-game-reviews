import express from "express";
import objection from "objection";
const { ValidationError } = objection;
import cleanUserInput from "../../../services/cleanUserInput.js";
import Review from "../../../models/Review.js";

const boardGameReviewsRouter = new express.Router({mergeParams: true})


export default boardGameReviewsRouter