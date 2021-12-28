import { self } from 'react-native-threads';
// import './config';

let count = 0;

self.onmessage = message => {
  console.log("self.onmessage");
  // console.tron.log(`THREAD: got message ${message}`);

  count++;

  for (let i = 0; i < 999999999; i++) {
    if (i==999999998){
      console.log('i=999999998');
    }
  };

  self.postMessage(`Message #${count} from worker thread!`);
}
