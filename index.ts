import { Neuron, INeuronType } from "./Neuron";

const enum RoundType {
  ACCEPT,
  SEND,
}

const main = () => {
  let neuronNet: Neuron[]
  const nb = (i: number): Neuron => {
    return neuronNet[i]
  }
  neuronNet = [
    new Neuron(INeuronType.POSITIVE, [0, 1, 1], nb), // A
    new Neuron(INeuronType.NEGATIVE, [1, 0, 1], nb), // B
    new Neuron(INeuronType.POSITIVE, [1, 1, 0], nb), // C
  ]

  neuronNet[0].push(1)

  let roundType: RoundType = RoundType.ACCEPT
  let i = 0
  while (true) {
    let emptyTokenCount = 0
    neuronNet.forEach((n: Neuron) => {
      if (roundType === RoundType.ACCEPT) {
        if (n.tokens.length === 0) {
          emptyTokenCount++
        }
        n.accept()
      } else {
        n.send()
      }
    })
    if (roundType === RoundType.ACCEPT && emptyTokenCount == neuronNet.length) {
      break
    }
    roundType = roundType === RoundType.ACCEPT
      ? RoundType.SEND
      : RoundType.ACCEPT
    console.log('------------------------ ROUND -----------------------', i++)
    console.log(neuronNet)
  }
  console.log('END -> ')
  console.log(neuronNet)
}


main()
