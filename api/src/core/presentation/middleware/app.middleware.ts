import morgan from 'morgan';
import express, { Express } from 'express';

export class AppMiddleware {
  constructor(private readonly server: Express) {}

  init() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan('dev'));
  }
}
