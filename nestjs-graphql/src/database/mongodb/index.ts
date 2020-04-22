import { MongooseModule } from '@nestjs/mongoose';
const HOST = 'localhost',
      PORT = '27018',
      DBNAME = 'nestjs_graphql_tutorial'

const uri = `mongodb://${HOST}:${PORT}/${DBNAME}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true }

export const MongoModule = MongooseModule.forRoot(uri, options)