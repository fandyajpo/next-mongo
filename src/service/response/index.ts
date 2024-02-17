import { StatusCode } from "./statusCode";

export class ServiceResponse extends Error {
  private $statusCode: StatusCode;
  private $detailedMessage?: string;
  private $shouldNotify: boolean;

  constructor(
    message: string,
    statusCode: StatusCode,
    detailedMessage?: string,
    shouldNotify: boolean = false
  ) {
    super(message);
    this.$statusCode = statusCode;
    this.$detailedMessage = detailedMessage;
    this.$shouldNotify = shouldNotify;
    Error.captureStackTrace(this);
  }

  get statusCode() {
    return this.$statusCode;
  }

  get detailedMessage() {
    return this.$detailedMessage;
  }

  get shouldNotify() {
    return this.$shouldNotify;
  }
}
