import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('send-mail')
export class EmailConsumer {
  constructor() {}

  @Process('register')
  async registerEmail(job: Job<unknown>) {
    const time1 = new Date();
    // setTimeout(() => {
    //   console.log('Loading.... job_id:' + job.id.toString());
    // }, 3000);
    const time2 = new Date();
    console.log('Send Success: ', time2.getTime() - time1.getTime(), 'ms');
  }
}
