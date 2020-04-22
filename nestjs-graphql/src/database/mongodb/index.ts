import { MongooseModule } from '@nestjs/mongoose';
const HOST = 'localhost',
      PORT = '27017',
      DBNAME = 'nestjs_graphql_tutorial'

const uri = `mongodb://${HOST}:${PORT}/${DBNAME}`;
const options = { useNewUrlParser: true }

export const MongoModule = MongooseModule.forRoot(uri, options)