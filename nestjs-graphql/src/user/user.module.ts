import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { DateScalar } from '../scalars/date.scalar'
import { UserModel } from "./user.schema"

const models = MongooseModule.forFeature([ UserModel ])

@Module({
  imports: [ models ],
  providers: [ UserService, UserResolver, DateScalar ]
})
export class UserModule {}