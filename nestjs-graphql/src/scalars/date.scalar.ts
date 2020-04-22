import { CustomScalar, Scalar } from '@nestjs/graphql'
import { Kind } from 'graphql'

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<number, Date>{
  description: string = 'Date Scalar Type'

  parseLiteral(ast: any): Date {
    return ast.kind === Kind.INT ? new Date(ast.value) : null
  }

  parseValue(value: number): Date {
    return new Date(value) // from client
  }

  serialize(value: Date): number {
    return value.getTime() // sent client
  }

}