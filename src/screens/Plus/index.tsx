import { Button, Text, TextInput, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { styles } from './styles'
import { useSpinContext } from '../../contexts';

export const Plus = () => {
  const [mag, setMag] = useState<number | undefined>(undefined);
  const [valorInput, setValorInput] = useState<string>('');
  const [valorInputTemperatura, setValorInputTemperatura] = useState<string>('');

  const { spin1 } = useSpinContext();
  const { spin2 } = useSpinContext();
  const { spin3 } = useSpinContext();

  const handleInput = (texto: string) => {
    setValorInput(texto);
  }

  const handleInputTemperatura = (texto: string) => {
    setValorInputTemperatura(texto);
  }

  const handleSpin = () => {
    const temperature = parseInt(valorInputTemperatura);
    if (parseInt(valorInput) == 1) {
      const encontrarPorTemperatura = spin1.find(item => item.temperatura === temperature);
      setMag(encontrarPorTemperatura?.m_a);
    } else if (parseInt(valorInput) === 2) {
      const encontrarPorTemperatura = spin2.find(item => item.temperatura === temperature);
      setMag(encontrarPorTemperatura?.m_a);
    } else if (parseInt(valorInput) === 3) {
      const encontrarPorTemperatura = spin3.find(item => item.temperatura === temperature);
      setMag(encontrarPorTemperatura?.m_a);
    }
  }
    return (
      <View style={styles.container}>
        <View>
          <Text>Spin-1/2</Text>
          <TextInput
            placeholder='Digite o segundo spin'
            value={valorInput}
            onChangeText={handleInput}
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text>Temperatura:</Text>
          <TextInput
            placeholder='Digite o segundo spin'
            value={valorInputTemperatura}
            onChangeText={handleInputTemperatura}
            keyboardType='numeric'
          />
        </View>
        <Button title='Buscar' onPress={handleSpin} />
        <View>
          <Text>m_A = {mag}</Text>
        </View>
      </View>
    )
}
