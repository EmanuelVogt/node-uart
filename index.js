const { SerialPort } = require('serialport');

const port = new SerialPort({
  path: 'COM3',        // Defina a porta COM apropriada
  baudRate: 9600,
});

port.on('open', () => {
  console.log('Porta serial aberta na COM4');
  
  // Envie uma mensagem assim que a porta abrir, se desejar
  const mensagem = 'DE WINDOWNS PARA LINUX';

  // Envia a mensagem a cada 5 segundos
  setInterval(() => {
    port.write(mensagem, (err) => {
      if (err) {
        return console.log('Erro ao enviar a mensagem:', err.message);
      }
      console.log('Mensagem enviada:', mensagem);
    });
  }, 5000);
});

// Evento disparado quando dados são recebidos pela serial
port.on('data', (data) => {
  console.log('Dados recebidos:', data.toString());
});

port.on('error', (err) => {
  console.error('Erro na porta serial:', err.message);
});
