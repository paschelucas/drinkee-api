import { Exception } from "@adonisjs/core/build/standalone";

export class NotFoundException extends Exception {
  constructor(message: string) {
    super(message, 404, 'E_ROW_NOT_FOUND');
  }
}
