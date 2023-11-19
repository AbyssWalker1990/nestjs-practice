import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'
import UserType from 'src/types/UserType'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: UserType['role']): UserType[] {
        return this.usersService.findAll(role)
    }

    @Get(':id') // GET /user/:id
    findOne(@Param('id') id: string): UserType {
        return this.usersService.findOne(+id)
    }

    @Post() // POST /users
    create(@Body() user: UserType): UserType {
        return this.usersService.create(user)
    }

    @Patch(':id') // PATCH /user/:id
    update(@Param('id') id: string, @Body() userUpdate: Partial<UserType>): UserType {
        return this.usersService.update(+id, userUpdate)
    }

    @Delete(':id') // GET /user/:id
    delete(@Param('id') id: string): UserType {
        return this.usersService.delete(+id)
    }
}
