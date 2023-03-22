const { SerialPort }= require('serialport');
const {ReadlineParser} = require('@serialport/parser-readline')
const prompt = require('prompt');
prompt.message = ("");

console.log('Press CTRL+C to exit')
prompt.start();

prompt.get(['Send from COM port number'], (err, result) => {
  if (err) {
    console.error('Error:', err.message);
    return;
  }
var comNum = 'COM'+result['Send from COM port number']

  const port = new SerialPort({path: comNum,  baudRate: 9600 });

  const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
  parser.on('data', console.log);

  const start = () => {
    prompt.get(['Tag'], (err, result) => {
      if (err) {
        console.error('Error:', err.message);
        port.close(() => {
          console.log('Serial port closed');
        });
        return;
      }

      const inputLowerCase = result.Tag.toLowerCase(); // convert input to lowercase
      port.write('aa00' + inputLowerCase + '00000000000000000000' + '\r\n', (err) => {
        if (err) {
          console.error('Error:', err.message);
          port.close(() => {
            console.log('Serial port closed');
          });
          return;
        }

        console.log('User input sent to serial port:', inputLowerCase);
        start();
      });
    });
  };

  parser.on('data', line => {
    console.log(line);
  });

  port.on('error', err => {
    console.error('Error:', err.message);
  });

  port.on('open', () => {
    console.log('Port opened');
    start(); // start the program after serial port is opened
  });
});
