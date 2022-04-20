import {
  AdvancedConsoleLogger,
  Logger,
  LoggerOptions,
  QueryRunner,
} from 'typeorm';

export class MyCustomLogger extends AdvancedConsoleLogger implements Logger {
  constructor(options: LoggerOptions) {
    super(options);
  }

  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    if (parameters) {
      const params = parameters.slice();
      for (let i = 0; i < params.length; i++) {
        if (params[i].length > 200) {
          if (typeof params[i] === 'string') {
            params[i] = params[i].substring(0, 199) + '...';
          } else {
            params[i] = params[i].slice(0, 199);
          }
        }
      }
      super.logQuery(query, params, queryRunner);
    } else {
      super.logQuery(query, parameters, queryRunner);
    }
  }
}
