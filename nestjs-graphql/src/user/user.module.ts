import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { DateScalar } from '../scalars/date.scalar'

@Module({
  providers: [ UserService, UserResolver, DateScalar ]
})
export class UserModule {}