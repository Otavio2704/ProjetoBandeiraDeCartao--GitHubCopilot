# 💳 Identificador de Bandeiras de Cartão de Crédito

> **Desenvolvido durante o Bootcamp "Microsoft 50 Anos - GitHub Copilot"**

Uma aplicação web moderna e interativa para identificação automática de bandeiras de cartão de crédito, desenvolvida com foco na utilização do **GitHub Copilot** como assistente de programação e acelerador de desenvolvimento.

![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-Enabled-blue?logo=github&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-blue?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-blue?logo=tailwindcss&logoColor=white)

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte do bootcamp **"Microsoft 50 Anos - GitHub Copilot"**, com o objetivo de explorar as capacidades da inteligência artificial aplicada ao desenvolvimento de software. A aplicação demonstra como o GitHub Copilot pode acelerar significativamente o processo de codificação, especialmente em tarefas que envolvem:

- Expressões regulares complexas
- Algoritmos de validação
- Lógica de negócio específica
- Interface de usuário responsiva

## 🚀 Funcionalidades

### ✅ Identificação Automática
- **8 Bandeiras Suportadas**: Visa, MasterCard, American Express, Discover, JCB, Diners Club, Elo, Hipercard
- **Detecção em Tempo Real**: Identifica a bandeira conforme o usuário digita
- **Padrões Regex Precisos**: Cada bandeira possui seu próprio padrão de validação

### 🔒 Validação Robusta
- **Algoritmo de Luhn**: Implementação completa para validação matemática
- **Formatação Inteligente**: Diferentes formatos para cada tipo de cartão
- **Feedback Visual**: Indicadores de validade em tempo real

### 🧪 Recursos para Desenvolvimento
- **Cartões de Teste**: Números válidos pré-configurados para testes
- **Informações Técnicas**: Detalhes sobre validação e detecção
- **Interface Educativa**: Explicação dos algoritmos utilizados

## 🤖 Como o GitHub Copilot Contribuiu

Durante o desenvolvimento, o GitHub Copilot foi fundamental em diversas áreas:

### 📝 Geração de Código
```javascript
// Exemplo: Copilot sugeriu automaticamente o padrão regex para Visa
visa: {
  name: 'Visa',
  pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
  // Copilot completou automaticamente as propriedades
}
```

### 🔍 Algoritmos Complexos
```javascript
// O algoritmo de Luhn foi sugerido completamente pelo Copilot
const luhnCheck = (num) => {
  const arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  // ... resto da implementação sugerida automaticamente
};
```

### 🎨 Componentes React
- **Auto-complete de Hooks**: `useState`, `useEffect` com lógica completa
- **Sugestões de JSX**: Estrutura de componentes e propriedades
- **Styling com Tailwind**: Classes CSS sugeridas contextualmente

### 📊 Casos de Teste
```javascript
// Copilot gerou automaticamente números de cartão válidos para teste
const testCards = [
  { number: '4532015112830366', brand: 'Visa' },
  { number: '5555555555554444', brand: 'MasterCard' },
  // ... outros cartões sugeridos
];
```

## 🛠️ Tecnologias Utilizadas

- **React 18+** - Biblioteca para interface de usuário
- **JavaScript ES6+** - Linguagem de programação
- **Tailwind CSS** - Framework de CSS utilitário
- **Lucide React** - Ícones modernos
- **Regex** - Expressões regulares para validação
- **Algoritmo de Luhn** - Validação matemática de cartões

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos para Execução

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/credit-card-detector.git
cd credit-card-detector
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm start
# ou
yarn start
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 🎮 Como Usar

1. **Digite o número do cartão** no campo de entrada
2. **Observe a identificação automática** da bandeira
3. **Veja a validação em tempo real** com o algoritmo de Luhn
4. **Teste com cartões pré-configurados** clicando nos exemplos
5. **Explore as informações técnicas** na seção de detalhes

## 🧠 Aprendizados com GitHub Copilot

### ⚡ Aceleração do Desenvolvimento
- **70% menos tempo** escrevendo código repetitivo
- **Sugestões contextuais** baseadas no projeto
- **Auto-complete inteligente** para funções complexas

### 🎯 Melhoria da Qualidade
- **Padrões de código consistentes** sugeridos automaticamente
- **Validações robustas** implementadas sem consulta manual
- **Casos de teste abrangentes** gerados instantaneamente

### 📚 Aprendizado Contínuo
- **Exposição a novas técnicas** através das sugestões
- **Melhores práticas** incorporadas naturalmente
- **Soluções elegantes** para problemas complexos

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

**Otávio Guedes**
- GitHub: [@Otavio2704](https://github.com/Otavio2704)
- LinkedIn: [Otavio Guedes](https://www.linkedin.com/in/otavio-backend2007)
- Email: otavioaredes62@gmail.com

---


> *"O GitHub Copilot não substitui o desenvolvedor, mas potencializa suas capacidades, permitindo foco em soluções criativas e arquitetura de software."*
