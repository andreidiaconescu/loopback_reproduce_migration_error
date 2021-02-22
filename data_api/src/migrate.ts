import {LoopbackPocApplication} from './application';

export async function migrate(args: string[]) {
  const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
  console.log('Migrating schemas (%s existing schema)', existingSchema);

  const app = new LoopbackPocApplication();
  await app.boot();

  // const todoRepo = await app.getRepository(Todo2Repository);
  // await todoRepo.execute('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

  // await app.migrateSchema({existingSchema, models: ['TodoList', 'Todo2']});
  await app.migrateSchema({existingSchema});

  // Connectors usually keep a pool of opened connections,
  // this keeps the process running even after all work is done.
  // We need to exit explicitly.
  process.exit(0);
}

migrate(process.argv).catch(err => {
  console.error('Cannot migrate database schema', err);
  process.exit(1);
});
