import { Button, Text, TextInput, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { styles } from './styles'
import { useSpinContext } from '../../contexts';

export const Plus = () => {

  const [m_a, setM_a] = useState<number | undefined>(undefined);
  const [m_b, setM_b] = useState<number | undefined>(undefined);
  const [mag_staggered, setMag_staggered] = useState<number | undefined>(undefined);
  const [mag_total, setMag_total] = useState<number | undefined>(undefined);

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
      const encontrarPorTemperatura = spin1.find(item => item.mag_total === temperature);
      setM_a(encontrarPorTemperatura?.m_a);
      setM_b(encontrarPorTemperatura?.m_b);
      setMag_staggered(encontrarPorTemperatura?.mag_staggered);
      setMag_total(encontrarPorTemperatura?.mag_total);
    } else if (parseInt(valorInput) === 2) {
      const encontrarPorTemperatura = spin2.find(item => item.temperatura === temperature);
      setM_a(encontrarPorTemperatura?.m_a);
      setM_b(encontrarPorTemperatura?.m_b);
      setMag_staggered(encontrarPorTemperatura?.mag_staggered);
      setMag_total(encontrarPorTemperatura?.mag_total);
    } else if (parseInt(valorInput) === 3) {
      const encontrarPorTemperatura = spin3.find(item => item.temperatura === temperature);
      setM_a(encontrarPorTemperatura?.m_a);
      setM_b(encontrarPorTemperatura?.m_b);
      setMag_staggered(encontrarPorTemperatura?.mag_staggered);
      setMag_total(encontrarPorTemperatura?.mag_total);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encontre os dados para a temperatura desejada</Text>
      <View style={styles.underline} />
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.text}>Spin-1/2 e spin-</Text>
          <TextInput
            placeholder='...'
            value={valorInput}
            onChangeText={handleInput}
            keyboardType='numeric'
            style={styles.input}
          />
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>Temperatura:</Text>
          <TextInput
            placeholder='...'
            value={valorInputTemperatura}
            onChangeText={handleInputTemperatura}
            keyboardType='numeric'
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Buscar' onPress={handleSpin} />
      </View>

      <View style={styles.subredes}>
        <Text style={styles.text}>Magnetização de sub-rede A: <Text style={styles.respostas}>{m_a}</Text></Text>
        <Text style={styles.text}>Magnetização de sub-rede B: <Text style={styles.respostas}>{m_b}</Text></Text>
      </View>
      <View style={styles.magnetizacoes}>
        <Text style={styles.text}>Magnetização staggered: <Text style={styles.respostas}>{mag_staggered}</Text></Text>
        <Text style={styles.text}>Magnetização total: <Text style={styles.respostas}>{mag_total}</Text></Text>
      </View>
    </View>
  )
}
