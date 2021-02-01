import React from 'react'
import { ThemeProvider } from 'styled-components'

import QuizScreen from '../../src/screens/Quiz'

export default function QuizDaGaleraPage ({ dbExternal }) {
  return (
    <ThemeProvider theme={dbExternal.theme}>
      <QuizScreen
        externalQuestions={dbExternal.questions}
        externalBg={dbExternal.bg}
      />
    </ThemeProvider>
  )
}

export async function getServerSideProps (context) {
  const dbExternal = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
    .then((resposta) => {
      if (resposta.ok) {
        return resposta.json()
      }

      throw new Error('Falha ao pegar os dados.')
    }).catch((error) => {
      console.log(error)
    })

  return {
    props: {
      dbExternal
    }
  }
}
