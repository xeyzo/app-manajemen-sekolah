import { NotFoundException } from "@nestjs/common";

export function isCanGetData(
    obj: any,
    key: string | number,
    value: string | number
  ) {
    if (!obj) {
      throw new NotFoundException(
        `Data dengan ${key} '${value}' tidak ditemukan.`
      );
    }
  }
  