import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { CuentasModule } from './cuentas/cuentas.module';

@Module({
  imports: [TaskModule, CuentasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
