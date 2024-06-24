import { MongoClient } from 'mongodb';
import { mongo } from 'mongoose';
import { ListFormat } from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import { updateReferences } from './updateReferences';
import { createCollectionAndInsertDocuments } from './insertCollection';
import cors from 'cors';

const express = require('express');
const body = require('body-parser');
const url = 'mongodb://localhost:27017/unifei';

const dbName = 'unifei';
const collectionsName = ['cursos', 'grades', 'periodos', 'disciplinas'];
const fileNames = ['cursosUnifei', 'gradeEco2015', 'periodosEco', 'disciplinasEco'];
let allCollectionsCreated = false;

async function start() {
  try {
    const app = express();
    app.use(cors());

    const mongo = await MongoClient.connect(url);
    await mongo.connect();
    app.db = mongo.db();

    app.use(
      body.json({
        limit: '10mb',
      }),
    );

    //routes
    app.use('/unifei', require('./routes/getRoutes'));

    //start server
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });

    collectionsName.forEach(async (collectionName, index) => {
      await createCollectionAndInsertDocuments(mongo, fileNames[index], collectionName);
      if (index === collectionsName.length - 1) updateReferences(mongo);
    });
  } catch (error) {
    console.error(error);
  }
}

start();
