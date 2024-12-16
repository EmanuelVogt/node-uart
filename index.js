const { SerialPort } = require('serialport')

const port = new SerialPort({
  path: '/dev/ttyS3',
  baudRate: 9600,
});

port.on('open', () => {
  console.log('Porta serial aberta');
  const mensagem = 'Olá, UART3!';

  setInterval(() => {
    port.write(mensagem, (err) => {
      if (err) {
        return console.log('Erro ao enviar a mensagem:', err.message);
      }
      console.log('Mensagem enviada:', mensagem);
    });
  }, 5000);
});

port.on('error', (err) => {
  console.error('Erro na porta serial:', err.message);
});