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
      for (let i = 0; i < parameters.length; i++) {
        if (parameters[i].length > 200) {
          if (typeof parameters[i] === 'string') {
            parameters[i] = parameters[i].substring(0, 199) + '...';
          } else {
            parameters[i] = parameters[i].slice(0, 199);
          }
        }
      }

      super.logQuery(query, parameters, queryRunner);
    }
  }
}
