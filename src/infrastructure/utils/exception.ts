import { BadRequestException } from "@nestjs/common";


export const badRequestError = (message: string): BadRequestException => {
    throw new BadRequestException(message);
  };
  