class RequestSche {
  limit = 0;
  runRequest = 0;
  requests = [];
  constructor(limit = 1) {
    this.limit = limit;
  }

  addRequest(request) {
    if (request) {
      this.requests.push(request);
      this.run();
    }
  }

  run() {
    while(this.runRequest < this.limit && this.requests.length) {
      var request = this.requests.shift();
      request.callback()
      .then(() => {

      })
      .finally(() => {
        this.runRequest -= 1;
        this.run();
      })
      this.runRequest += 1;
    }
  }
}

class Request {
  id = '';
  time = 0;
  constructor(id, time) {
    this.id = id;
    this.time = time;
  }

  callback() {
    return new Promise((resovle) => {
      setTimeout(() => {
        console.log('id is', this.id, ', time is', this,this.time);
        resovle();
      }, this.time)
    });
  }
}

const sche = new RequestSche(3);
sche.addRequest(new Request('1', 1000))
sche.addRequest(new Request('2', 400))
sche.addRequest(new Request('3', 300))
sche.addRequest(new Request('4', 700))