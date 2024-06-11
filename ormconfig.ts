import { History } from 'src/entities/history.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ormConfig: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'BulkEmail',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    entities: [History],
    synchronize: true,
    schema: 'public',
  };
   
  export default ormConfig;