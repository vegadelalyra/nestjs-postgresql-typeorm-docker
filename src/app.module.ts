import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'rlyeh',
            password: 'rlyeh',
            database: 'my_db',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: false,
            retryDelay: 3_000,
            retryAttempts: 10
          }),
        TasksModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}