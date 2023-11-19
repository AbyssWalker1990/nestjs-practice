import { Injectable } from '@nestjs/common'
import UserType from 'src/types/UserType'

@Injectable()
export class UsersService {
    private users: UserType[] = [
        {
            id: 1,
            name: 'Leanne Graham',
            email: 'Sincere@april.biz',
            role: 'INTERN',
        },
        {
            id: 2,
            name: 'Ervin Howell',
            email: 'Shanna@melissa.tv',
            role: 'INTERN',
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            email: 'Nathan@yesenia.net',
            role: 'ENGINEER',
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            email: 'Julianne.OConner@kory.org',
            role: 'ENGINEER',
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            email: 'Lucio_Hettinger@annie.ca',
            role: 'ADMIN',
        },
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): UserType[] {
        if (role) {
            return this.users.filter((user) => user.role === role)
        }
        return this.users
    }

    findOne(id: number): UserType {
        const user = this.users.find((user) => user.id === id)
        return user
    }

    create(user: UserType): UserType {
        const usersByHighestId = [...this.users.sort((a, b) => b.id - a.id)]
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user,
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatedUser: Partial<UserType>): UserType {
        this.users = this.users.map((user) => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number): UserType {
        const removedUser = this.findOne(id)
        this.users.filter((user) => user.id !== id)
        return removedUser
    }
}
