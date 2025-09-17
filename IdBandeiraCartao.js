import React, { useState, useEffect } from 'react';
import { CreditCard, Check, X, Info } from 'lucide-react';

const CreditCardDetector = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardBrand, setCardBrand] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [formattedNumber, setFormattedNumber] = useState('');

  // Definição das regras para cada bandeira
  const cardBrands = {
    visa: {
      name: 'Visa',
      pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
      color: 'bg-blue-500',
      logo: '💳'
    },
    mastercard: {
      name: 'MasterCard',
      pattern: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
      color: 'bg-red-500',
      logo: '💳'
    },
    amex: {
      name: 'American Express',
      pattern: /^3[47][0-9]{13}$/,
      color: 'bg-green-500',
      logo: '💳'
    },
    discover: {
      name: 'Discover',
      pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      color: 'bg-orange-500',
      logo: '💳'
    },
    jcb: {
      name: 'JCB',
      pattern: /^(?:2131|1800|35\d{3})\d{11}$/,
      color: 'bg-purple-500',
      logo: '💳'
    },
    dinersclub: {
      name: "Diners Club",
      pattern: /^3[0689][0-9]{12}$/,
      color: 'bg-gray-500',
      logo: '💳'
    },
    elo: {
      name: 'Elo',
      pattern: /^(?:4011|431274|438935|451416|457393|4576|457631|457632|504175|627780|636297|636368|6500)[0-9]{10,13}$/,
      color: 'bg-yellow-500',
      logo: '💳'
    },
    hipercard: {
      name: 'Hipercard',
      pattern: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
      color: 'bg-pink-500',
      logo: '💳'
    }
  };

  // Algoritmo de Luhn para validação
  const luhnCheck = (num) => {
    const arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    
    const lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce(
      (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0
    );
    
    sum += lastDigit;
    return sum % 10 === 0;
  };

  // Identifica a bandeira do cartão
  const identifyCardBrand = (number) => {
    const cleanNumber = number.replace(/\D/g, '');
    
    for (const [key, brand] of Object.entries(cardBrands)) {
      if (brand.pattern.test(cleanNumber)) {
        return { key, ...brand };
      }
    }
    return null;
  };

  // Formata o número do cartão
  const formatCardNumber = (number) => {
    const clean = number.replace(/\D/g, '');
    const brand = identifyCardBrand(clean);
    
    if (brand && brand.key === 'amex') {
      // American Express: 4-6-5 format
      return clean.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3');
    } else {
      // Outros cartões: 4-4-4-4 format
      return clean.replace(/(\d{4})(?=\d)/g, '$1 ');
    }
  };

  // Effect para processar mudanças no número do cartão
  useEffect(() => {
    const cleanNumber = cardNumber.replace(/\D/g, '');
    
    if (cleanNumber.length >= 4) {
      const brand = identifyCardBrand(cleanNumber);
      setCardBrand(brand);
      setFormattedNumber(formatCardNumber(cleanNumber));
      setIsValid(brand && luhnCheck(cleanNumber));
    } else {
      setCardBrand('');
      setFormattedNumber('');
      setIsValid(false);
    }
  }, [cardNumber]);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 19) {
      setCardNumber(value);
    }
  };

  // Exemplos de cartões para teste
  const testCards = [
    { number: '4532015112830366', brand: 'Visa' },
    { number: '5555555555554444', brand: 'MasterCard' },
    { number: '371449635398431', brand: 'American Express' },
    { number: '6011111111111117', brand: 'Discover' },
    { number: '30569309025904', brand: 'Diners Club' }
  ];

  const loadTestCard = (number) => {
    setCardNumber(number);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <CreditCard className="w-12 h-12 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">
              Identificador de Bandeiras
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Digite o número do cartão para identificar a bandeira automaticamente
          </p>
        </div>

        <div className="space-y-6">
          {/* Input do cartão */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número do Cartão
            </label>
            <input
              type="text"
              value={formattedNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, ''))}
              placeholder="Digite o número do cartão"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg font-mono tracking-wider"
              maxLength="23"
            />
            {cardBrand && (
              <div className="absolute right-3 top-9 flex items-center">
                <span className="text-2xl mr-2">{cardBrand.logo}</span>
                {isValid ? (
                  <Check className="w-6 h-6 text-green-500" />
                ) : (
                  <X className="w-6 h-6 text-red-500" />
                )}
              </div>
            )}
          </div>

          {/* Resultado da identificação */}
          {cardBrand && (
            <div className={`p-6 rounded-lg text-white ${cardBrand.color} transform transition-all duration-300`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{cardBrand.name}</h3>
                  <p className="text-lg opacity-90">
                    Status: {isValid ? 'Válido' : 'Inválido (falha no algoritmo de Luhn)'}
                  </p>
                </div>
                <div className="text-4xl">{cardBrand.logo}</div>
              </div>
            </div>
          )}

          {/* Informações técnicas */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Info className="w-5 h-5 text-blue-500 mr-2" />
              <h4 className="text-lg font-semibold text-gray-800">Informações Técnicas</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Número limpo:</strong> {cardNumber}
              </div>
              <div>
                <strong>Comprimento:</strong> {cardNumber.length} dígitos
              </div>
              <div>
                <strong>Validação Luhn:</strong> {isValid ? '✓ Passou' : '✗ Falhou'}
              </div>
              <div>
                <strong>Bandeira detectada:</strong> {cardBrand ? cardBrand.name : 'Nenhuma'}
              </div>
            </div>
          </div>

          {/* Cartões de teste */}
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Cartões para Teste</h4>
            <div className="grid gap-3">
              {testCards.map((card, index) => (
                <button
                  key={index}
                  onClick={() => loadTestCard(card.number)}
                  className="flex items-center justify-between p-3 bg-white rounded-lg border hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                >
                  <span className="font-mono text-sm">{card.number}</span>
                  <span className="text-sm text-gray-600">{card.brand}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Estes são números de teste válidos que passam na validação de Luhn
            </p>
          </div>

          {/* Explicação do algoritmo */}
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Como Funciona</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>1. Identificação por Regex:</strong> Cada bandeira tem um padrão específico nos primeiros dígitos</p>
              <p><strong>2. Algoritmo de Luhn:</strong> Validação matemática para verificar se o número é válido</p>
              <p><strong>3. Formatação:</strong> Apresentação do número no formato padrão da bandeira</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardDetector;
