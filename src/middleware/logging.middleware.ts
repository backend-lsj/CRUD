import { Logger, NestMiddleware } from '@nestjs/common';

export class LoggingMiddleWare implements NestMiddleware {
  private readonly logger = new Logger();

  use(req: any, res: any, next: (error?: any) => void) {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = Date.now() - startTime;

      this.logger.log(
        `[${method}]${originalUrl} : ${statusCode} ${responseTime}`,
      );
    });
    next();
  }
}
