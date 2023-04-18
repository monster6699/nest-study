import { ArgumentsHost, Catch, ExceptionFilter, BadRequestException, HttpException } from '@nestjs/common';
import { Response, Request } from 'express';

@Catch()
export class ValidateExceptionFilter<T> implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    console.log('golabal-------filter------exception');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    if (exception instanceof BadRequestException) {
      const status = exception.getStatus();
      const exceptResponse = exception.getResponse() as any;
      response.status(status).json({
        statusCode: status,
        path: request.url,
        message: exceptResponse.message.map((item) => {
          const mes = item.split('-');
          return {
            filed: mes[0],
            error: mes[1],
          };
        }),
      });
    }

    // console.log(exception instanceof HttpException);
    return response;
  }
}
