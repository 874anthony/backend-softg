import { NextFunction, Request, Response } from 'express';
import { Model, PopulateOptions } from 'mongoose';

// Importing the global handler error and the catchAsync
import HttpException from '@utils/httpException';
import catchAsync from '@utils/catchAsync';
import APIFeatures from '@utils/apiFeatures';

const createOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    if (!body) {
      return next(new HttpException('Hacen faltan campos para la creación del registro', 404));
    }

    const document = await Model.create(body);

    if (!document) {
      return next(new HttpException('No se pudo crear el registro, inténtelo nuevamente', 400));
    }

    return res.status(201).json({
      status: true,
      message: `Se creó el registro exitosamente!`,
      document,
    });
  });

const findAll = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const features = new APIFeatures(Model.find(), req.query).filter().sort().limitFields().paginate();

    const documents = await features.query;

    if (documents.length === 0) {
      return next(new HttpException('No hay registros con ese criterio de búsqueda!', 204));
    }

    return res.status(200).json({
      status: true,
      documents,
    });
  });

const findOne = (Model: Model<any>, populateOptions?: PopulateOptions | PopulateOptions[]) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    let query = Model.findById(id);

    if (populateOptions) query = query.populate(populateOptions);

    const document = await query;

    if (!document) {
      return next(new HttpException('No hay un registro con este ID', 404));
    }

    return res.status(200).json({
      status: true,
      document,
    });
  });

const updateOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const body = req.body;

    const documentUpdated = await Model.findByIdAndUpdate(id, body, {
      new: true,
      validateBeforeSave: false,
    });

    if (!documentUpdated)
      return next(new HttpException('No se ha podido actualizar el registro, intentelo nuevamente!', 500));

    res.status(200).json({
      status: true,
      message: 'El registro fue actualizado con exito',
      documentUpdated,
    });
  });

const deleteOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const deletedDocument = await Model.findByIdAndRemove(id);

    if (!deletedDocument)
      return next(new HttpException('No se ha podido eliminar el registro, intentelo nuevamente!', 500));

    res.status(204).json({
      status: true,
      message: 'El registro fue actualizado con exito',
      deletedDocument,
    });
  });

export { findAll, createOne, findOne, updateOne, deleteOne };
