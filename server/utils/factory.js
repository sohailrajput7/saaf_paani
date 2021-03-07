const catchAsync = require('./catchAsync');
const APIError = require('./APIError')


exports.deleteOne = Model =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            return next(new APIError('No document found with that ID', 404));
        }

        res.status(204).json({
            status: 'success',
            data: doc
        });
    });

exports.updateOne = Model =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!doc) {
            return next(new APIError('No document found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            data:doc
        });
    });

exports.createOne = Model =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body);

        res.status(201).json({
            status: 'success',
            data: doc
        });
    });

exports.getOne = (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
        let query = Model.findById(req.params.id);
        if (popOptions) query = query.populate(popOptions);
        const doc = await query;

        if (!doc) {
            return next(new APIError('No document found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            data:doc
        });
    });

exports.getAll = Model =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.find();

        res.status(200).json({
            status: 'success',
            data:doc
        });
    });