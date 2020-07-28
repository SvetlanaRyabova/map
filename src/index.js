export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[400, 'Bad Request'], [404, 'Not Found'], [500, 'Internal Server Error']]);
  }

  translate(code) {
    let errorName;
    if (this.errors.has(code)) {
      errorName = this.errors.get(code);
    } else {
      errorName = 'Unknown error';
    }
    return errorName;
  }
}

// const errorrepo = new ErrorRepository();
// console.log(errorrepo);
// console.log(errorrepo.translate(404));
