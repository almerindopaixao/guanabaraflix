import React from 'react';
import FooterBase from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>&copy; Almerindo Paixão</p>
      <p>
        Desenvolvido durante a Imersão React da{' '}
        <FooterBase.Anchor href="https://www.alura.com.br">
          Alura
        </FooterBase.Anchor>
      </p>
      <p>
        Acesse o site oficial do{' '}
        <FooterBase.Anchor href="https://www.cursoemvideo.com">
          Curso em vídeo
        </FooterBase.Anchor>
      </p>
    </FooterBase>
  );
}

export default Footer;
